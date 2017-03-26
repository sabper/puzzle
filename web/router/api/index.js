'use strict'

const express = require('express')
const router = express.Router()
// const apikey = require('../../middlewares/auth')
const users = require('./users')
<<<<<<< HEAD

router.use('/', apikey) // api key 검증 middleware
=======
// router.use('/', apikey) // api key 검증 middleware
>>>>>>> ae579e03962fdaf3057486c9fe80ff7b22e8f3ba
router.use('/users', users) // 사용자 인증 관련

module.exports = router
