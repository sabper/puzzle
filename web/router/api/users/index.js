'use strict'

const express = require('express')
const router = express.Router()
const user = require('./user')

router.post('/user', user.create) // 사용자 등록
router.post('/user/login', user.login) // 사용자 로그인

module.exports = router
