'use strict'

const express = require('express')
const app = express()
const path = require('path')
const firebase = require('firebase')
const logger = require('winston')

app.set('views', path.join(__dirname, '../../../views'))
app.get('/', (req, res) => {
  const user = firebase.auth().currentUser
  let isLogin = false

  if (user) {
    logger.info('home!!!!! user exists, name: ', user.email)
    isLogin = true
  } else {
    logger.info('home!!!!! user not exists')
    isLogin = false
  }

  return res.render('home', {
    title: 'home',
    isLogin: isLogin,
    user: user
  })
})

module.exports = app
