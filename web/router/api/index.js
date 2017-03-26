'use strict'

const express = require('express')
const router = express.Router()
const users = require('./users')

router.use('/users', users) // 사용자 인증 관련

module.exports = router
