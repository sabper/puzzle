
'use strict'

const logger = require('winston')

// 멀티 프로세스로 구성 시 PROCESS_TYPE 으로 구분하여 해당 config file 로드
const type = process.env.PROCESS_TYPE

logger.info(`Starting '${type}' process`, { pid: process.pid })

if (type === 'web') {
  require('./web')
} else if (type === 'web_backoffice') {
  require('./web_backoffice')
} else {
  throw new Error(`
    ${type} is an unsupported process type.
    Use one of: 'web'!
  `)
}
