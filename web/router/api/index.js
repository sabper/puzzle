'use strict'

const express = require('express')
const router = express.Router()
const apikey = require('../../middlewares/auth')

router.use('/', apikey) // api key 검증 middleware

module.exports = router
