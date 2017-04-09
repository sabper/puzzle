'use strict'

const express = require('express')
const router = express.Router()
const users = require('./users')
const reviews = require('./reviews')

router.use('/users', users) // 사용자 인증 관련
router.use('/reviews', reviews) // 후기 관련

module.exports = router
