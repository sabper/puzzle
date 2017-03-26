'use strict'

const logger = require('winston')
const User = require('../../model/mongo/user')
const firebase = require('firebase')

const checkLogin = (req, res, next) => {
  // firbase login check
  const checkLoginFbP = new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        resolve(user)
      }
      reject(new Error('not logined to firebase auth'))
    })
  })

  // user uid db 조회
  const findUserFromToDbP = (user) => {
    return new Promise(
      (resolve, reject) => {
        User.findOne({'uid': user.uid}, (err, user) => {
          if (err) {
            logger.error(err)
            reject(err)
          }

          if (!user) {
            reject(new Error('not exists user'))
          }

          resolve(true)
        })
      }
    )
  }

  const onError = (error) => {
    logger.error(error)

    // 로그인 페이지 리다이렉트 필요
    res.redirect(401, '/')
  }

  checkLoginFbP
  .then(findUserFromToDbP)
  .then(() => {
    next()
  }).catch(onError)
}

module.exports = checkLogin
