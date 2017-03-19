'use strict'

const nodemailer = require('nodemailer')
const config = require('../../config')
const logger = require('winston')
const backoff = require('backoff')

/**
 * 메일 전송
 *
 * @param {Object} mailOptions https://nodemailer.com/message/
 * @param {function} callback function
 */
exports.sendMail = (mailOptions, retry = 0, callback) => {
  if (!Number.isSafeInteger(retry)) {
    logger.error(`[ retry_not_number ] [ ${config.message.mail.retry_not_number} ]`, mailOptions.to)

    return callback(new Error(`retry not number. ${retry} \n ${mailOptions}`))
  }

  const smtpTransport = nodemailer.createTransport({
    host: config.mail_smtp_domain,
    port: config.mail_smtp_port,
    sechure: true,
    auth: {
      user: config.mail_id,
      pass: config.mail_pass
    }
  })

  // Todo: 메일 전송 시 메일 로그 DB 적재
  const smtpTranasSendMail = (mailOptions, cb) => {
    smtpTransport.sendMail(mailOptions, (err, res) => {
      if (err) {
        // Todo: 성공 로그 적재
        cb(err, null)
      } else {
        cb(null, res)
      }
    })
  }

  // 지수 backoff 적용.
  const call = backoff.call(smtpTranasSendMail, mailOptions, (err, res) => {
    // Todo: 실패 로그 적재
    if (err) {
      logger.error(`[ retry to send mail ] ${call.getNumRetries()}`)
      callback(err)
    }

    callback(null, res)
  })

  call.retryIf((err) => {
    logger.info(`[ mail.mail_not_send ] [ retry : ${call.getNumRetries()} ] [ ${err} ]`, mailOptions.to)
    return err
  })
  call.setStrategy(new backoff.ExponentialStrategy())
  call.failAfter(retry)
  call.start()
}
