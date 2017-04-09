'use strict'

const express = require('express')
const app = express()
const path = require('path')
const users = require('./users')
const home = require('./home')

app.set('views', path.join(__dirname, '../../views'))

// app.use('/', login)
app.use('/', home)
app.use('/users', users) // 사용자

module.exports = app
