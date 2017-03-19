'use strict'

const express = require('express')
const router = express.Router()
const mail = require('./mail')

router.get('/user/verify/:uid/:oobCode', mail.confirm) // 메일 인증

module.exports = router
