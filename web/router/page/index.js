'use strict'

const express = require('express')
const app = express()
const path = require('path')
const users = require('./users')
const home = require('./home')
const firebase = require('firebase')
const logger = require('winston')

app.set('views', path.join(__dirname, '../../views'))

// login check middleware
app.use('/', (req, res, next) => {
  const user = firebase.auth().currentUser
  let isLogin = false

  if (user) {
    logger.info('home!!!!! user exists, name: ', user.email)
    isLogin = true
  } else {
    logger.info('home!!!!! user not exists')
    isLogin = false
  }

  req.isLogin = isLogin
  req.user = user

  next()
})
app.use('/', home)
app.use('/users', users) // 사용자

module.exports = app
