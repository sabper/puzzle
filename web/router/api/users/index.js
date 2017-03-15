'use strict'

const express = require('express')
const router = express.Router()
const user = require('./user')

router.get('/user', user.user)

module.exports = router
