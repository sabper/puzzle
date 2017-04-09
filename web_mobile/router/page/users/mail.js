'use strict'

const admin = require('firebase-admin')
const logger = require('winston')
const MobileDetect = require('mobile-detect')

exports.confirm = (req, res) => {
  const uid = req.params.uid

  const verifyUser = () => {
    let link = ''
    let isMobile = false
    const md = new MobileDetect(req.headers['user-agent']) // agent 조사

    // andorid. Todo: iphone 경우도 고려해야 함
    if (md.mobile()) {
      isMobile = true
      link = ''
    }

    res.render('mail/confirm_mail', {
      title: 'Ugly Truth 메일 인증',
      isMobile: isMobile,
      link: link
    })
  }

  admin.auth().updateUser(uid, {
    emailVerified: true
  })
  .then(verifyUser)
  .catch((err) => {
    logger.error(`error from email confirm \n ${err}`)
  })
}
