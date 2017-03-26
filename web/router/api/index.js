'use strict'

const express = require('express')
const router = express.Router()
// const apikey = require('../../middlewares/auth')
const users = require('./users')
// router.use('/', apikey) // api key 검증 middleware
router.use('/users', users) // 사용자 인증 관련

module.exports = router
