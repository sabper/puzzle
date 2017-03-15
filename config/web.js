'use strict'

const common = require('./components/common')
const logger = require('./components/logger')
const mongo = require('./components/mongo')
const redis = require('./components/redis')
const server = require('./components/server')

module.exports = Object.assign({}, common, logger, mongo, redis, server)
