'use strict'

const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, '../../../views'))
app.get('/', (req, res) => {
  return res.render('home', {
    title: 'home',
    isLogin: req.isLogin,
    user: req.user
  })
})

module.exports = app
