'use strict'

const express = require('express')
const app = express()
const mail = require('./mail')

app.get('/user/verify/:uid/:oobCode', mail.confirm) // 메일 인증

module.exports = app
