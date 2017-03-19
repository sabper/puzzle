const User = require('../../../../model/mongo/user')
const logger = require('winston')
const admin = require('firebase-admin')
const firebase = require('firebase')
const config = require('../../../../config')
const utils = require('../../../../utils-module')
const path = require('path')
const randomstring = require('randomstring')
const pug = require('pug')

exports.create = (req, res) => {
  const email = req.body.email
  const password = req.body.password

  // 파라미터 검증
  const _promise = new Promise(
    (resolve, reject) => {
      if (!email) {
        reject({
          code: 'user.email_not_exists',
          message: config.message.user.email_not_exists
        })
      }

      if (!password) {
        reject({
          code: 'user.password_not_exists',
          message: config.message.user.password_not_exists
        })
      } else {
        resolve(true)
      }
    }
  )

  /* firebase 에 사용자 생성.
     수행한 promise 를 return 하지 않으면
     다음 chain then() 수행.
     다음 chain 에서 then() 수행 성공 / 실패 결과 값을 받을 수 없으므로
  */
  const createUser = () => {
    return firebase.auth().createUserWithEmailAndPassword(email, password) // 1. firebase auth에 사용자 생성
  }

  // 로그인 실패 시 node process 재시작 됨. api error return
  const loginUser = () => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  // json 반환
  const resp = () => {
    // uid 조회
    let uid = firebase.auth().currentUser.uid

    // 로그인 토큰 조회. 발행되는 토큰 유효시간은 1시간임. 이 후 앱에서는 해당 토큰으로 로그인 한 후 토큰 조회하여 서버에 인증 요청
    admin.auth()
    .createCustomToken(uid)
    .then((customToken) => {
      return res.status(200).json({
        message: `${email} ${config.message.user.regist}`,
        uid: firebase.auth().currentUser.uid,
        token: customToken,
        email_auth_status: false // 이메일 인증 여부
      })
    })

    return uid
  }

  // 사용자 정보 DB 에 저장
  const createUserToDB = (uid) => {
    logger.debug('createUserToDB: ' + uid)

    let user = {
      uid: uid,
      user_type: 'mail',
      email: email
    }
    User.create(user)

    return user
  }

  // 인증 이메일 발송
  const sendEmailVerification = (user) => {
    // firebase.auth().currentUser.sendEmailVerification()
    const pugcompileF = pug.compileFile(path.join(__dirname, '../../../views/mail/verify_mail.pug'))

    let confirmCode = randomstring.generate(100)
    let confirmLink = `${config.base_domain}${config.confirm_uri}/${user.uid}/${confirmCode}`

    let mailOptions = {
      from: 'noreply',
      to: user.email,
      subject: '[Ugly Truth] 이메일 인증',
      html: pugcompileF({confirmLink: confirmLink})
    }
    utils.mail.sendMail(mailOptions, 3, (err, res) => {
      if (err) {
        logger.info(config.message.mail.mail_not_send, err)
      }
    })
  }

  /* promise 에러 공통 처리
  */
  const onError = (err) => {
    let errCode = err.code
    let errMsg = err.message

    logger.error(`[ ${errCode} ] ${errMsg}`, req.body)

    // firebase error 일 경우 code, message 규격에 맞게 변환
    if (errCode.includes('auth/')) {
      let jsonstr = JSON.stringify(config.message.user)
      let map = utils.common.objToStrMap(JSON.parse(jsonstr)) // message josn map 형태로 변환

      errCode = errCode.replace('auth/', '').replace(/-/gi, '_')
      errMsg = map.get(errCode)
    }

    return res.status(401).json({
      code: errCode,
      message: errMsg
    })
  }

  // 전체 promise chain
  _promise // 1. 파라미터 검증
  .then(createUser) // 2. 사용자 생성 (firbase)
  .then(loginUser) // 3. uid, token 조회를 위해 사용자 로그인 (firebase)
  .then(resp) // 4. uid, token 조회하여 return
  .then(createUserToDB) // 5. 사용자 정보 barogo db에 저장
  .then(sendEmailVerification) // 6. 인증 이메일 발송. Todo: firebase 이용하지 않고 직접 구현 필요. 디자인 템플릿을 수정할 수 없음
  .catch(onError)
}

/* post /users/user/login
   firebase 사용자(이메일, 비밀번호) 로그인
*/
exports.login = (req, res) => {
  const email = req.body.email
  const password = req.body.password

  // 0. 파라미터 검증
  if (!email) {
    logger.error(`[ user.email_not_exists ] ${config.message.user.email_not_exists} `, req.body)

    return res.status(400).json({
      code: 'email_not_exists',
      message: config.message.user.email_not_exists
    })
  }

  if (!password) {
    logger.error(`[ user.password_not_exists ] ${config.message.user.password_not_exists} `, req.body)

    return res.status(400).json({
      code: 'password_not_exists',
      message: config.message.user.password_not_exists
    })
  }

  const resp = () => {
    // uid 조회
    let uid = firebase.auth().currentUser.uid

    // 이메일 인증 조회 검증
    let emailAuthStatus = firebase.auth().currentUser.emailVerified

    // 휴대폰 번호 중복 여부
    let isChangePhone = false

    // 사용자 조회
    User.findOne({'uid': uid}, (err, user) => {
      if (err) {
        return onError(err)
      }

      if (!user) {
        return onError({
          'code': 'user_info_db_not_exists',
          'message': config.message.user_info_db_not_exists
        })
      }

      // 로그인 토큰 발행 후 각 사용자 인증 값 전달. 발행되는 토큰 유효시간은 1시간임. 이 후 앱에서는 해당 토큰으로 로그인 한 후 토큰 조회하여 서버에 인증 요청
      return admin
      .auth()
      .createCustomToken(uid)
      .then((customToken) => {
        return res.json({
          message: `${email} user login.`,
          email_auth_status: emailAuthStatus || false, // 이메일 인증 여부
          phone_status: isChangePhone,
          uid: uid,
          token: customToken
        })
      })
    })

    return uid
  }

  /* promise 에러 공통 처리
  */
  const onError = (err) => {
    let errCode = err.code || 'common.not_define_error'
    let errMsg = err.message || config.message.common.not_define_error

    logger.error(`[ ${errCode} ] ${errMsg}`, req.body)

    // firebase error 일 경우 code, message 규격에 맞게 변환
    if (!Number.isFinite(errCode) && errCode.includes('auth/')) {
      let jsonstr = JSON.stringify(config.message.user)
      let map = utils.common.objToStrMap(JSON.parse(jsonstr)) // message josn map 형태로 변환

      errCode = errCode.replace('auth/', '').replace(/-/gi, '_')
      errMsg = map.get(errCode)
    }

    return res.status(401).json({
      code: errCode || 'user.login_can_not_pass',
      message: errMsg || config.message.user.login_can_not_pass
    })
  }

  // 전체 promise chain
  firebase.auth().signInWithEmailAndPassword(email, password) // 1. 로그인
  .then(resp) // 2. 로그인
  .catch(onError)
}
