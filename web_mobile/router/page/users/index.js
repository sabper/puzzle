'use strict'

const express = require('express')
const app = express()
const mail = require('./mail')
const path = require('path')

app.get('/user/verify/:uid/:oobCode', mail.confirm) // 메일 인증

app.set('views', path.join(__dirname, '../../../views'))
app.get('/myaccount', (req, res) => {
  return res.render('users/myaccount', {
    title: 'mobile'
  })
})

app.get('/login', (req, res) => {
  return res.render('users/login', {
    title: 'mobile'
  })
})

app.get('/signin', (req, res) => {
  return res.render('users/signin', {
    title: 'mobile'
  })
})

module.exports = app
