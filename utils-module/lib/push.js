'user strict'

const logger = require('winston')
const config = require('../../config')
const backoff = require('backoff')
const request = require('request')

/**
  * app PUSH 메시지 전송. firebase API 호출
  * @param options https://firebase.google.com/docs/cloud-messaging/http-server-ref#params
  */
exports.pushWithFirebase = (body, callback) => {
  var options = {
    method: 'POST',
    uri: config.firebase_push_uri,
    headers: {
      'Authorization': config.firbase_push_key,
      'Content-Type': 'application/json'
    },
    body: body,
    json: true
  }

  const requestApi = (cb) => {
    request(options, (err, res) => {
      if (err || res.statusCode > 200 || res.body.failure > 0) {
        cb({
          status: res.statusCode,
          body: res.body,
          err: err,
          failure: res.body.failure,
          resultMsg: res.body.results[0].error
        }, null)
      } else {
        cb(null, res)
      }
    })
  }

  // 지수 backoff 적용.
  const call = backoff.call(requestApi, (err, res) => {
    // Todo: 실패 로그 적재
    if (err) {
      logger.error('[ retry to push message ] \n [ retry ] :', call.getNumRetries(), '\n [ reqbody ] : ', err.body, '\n [ request option ] : ', options)
      callback(err)
    } else {
      logger.info('push send result : ', res.body)
      callback(null, res)
    }
  })

  call.retryIf((err) => {
    logger.info('[ push.push_not_send ] [ retry : ]', call.getNumRetries(), err.body)
    return err.status > 200 || err.failure > 0
  })
  call.setStrategy(new backoff.ExponentialStrategy())
  call.failAfter(5)
  call.start()
}
