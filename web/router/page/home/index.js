'use strict'

const express = require('express')
<<<<<<< HEAD
const router = express.Router()
const firebase = require('firebase')
const logger = require('winston')

router.get('/', (req, res) => {
=======
const app = express()
const path = require('path')
const firebase = require('firebase')
const logger = require('winston')

app.set('views', path.join(__dirname, '../../../views'))
app.get('/', (req, res) => {
>>>>>>> ae579e03962fdaf3057486c9fe80ff7b22e8f3ba
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

<<<<<<< HEAD
module.exports = router
=======
module.exports = app
>>>>>>> ae579e03962fdaf3057486c9fe80ff7b22e8f3ba
