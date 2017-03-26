'use strict'

const express = require('express')
const app = express()
const home = require('./home')
const users = require('./users')
// const login = require('../../middlewares/checkLogin')

// app.use('/', login)
app.use('/', home)
app.use('/users', users) // 사용자

module.exports = app
