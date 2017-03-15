'use strict'

const logger = require('winston')
const User = require('../../model/mongo/user')

const apikeyMiddleware = (req, res, next) => {
  const apikey = req.headers['apikey']

  if (!apikey) {
    logger.error('[necessary api key] \n headers : ', req.headers)
    return res.status(403).json({
      message: 'necessary api key'
    })
  }

  const p = new Promise(
    (resolve, reject) => {
      User.findOne({apikey}, (err, user) => {
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

  const onError = (error) => {
    logger.error('not exists user')

    res.status(403).json({
      message: error.message
    })
  }

  p.then(() => {
    next()
  }).catch(onError)
}

module.exports = apikeyMiddleware
