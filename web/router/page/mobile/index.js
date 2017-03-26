const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, '../../../views'))
app.get('/', (req, res) => {
  return res.render('mobile/home', {
    title: 'mobile',
    layout: 'mobile'
  })
})

app.get('/myaccount', (req, res) => {
  return res.render('mobile/account/myaccount', {
    title: 'mobile',
    layout: 'mobile'
  })
})

app.get('/login', (req, res) => {
  return res.render('mobile/account/login', {
    title: 'mobile',
    layout: 'mobile'
  })
})

app.get('/signin', (req, res) => {
  return res.render('mobile/account/signin', {
    title: 'mobile',
    layout: 'mobile'
  })
})

app.get('/write', (req, res) => {
  return res.render('mobile/write', {
    title: 'mobile',
    layout: 'mobile'
  })
})

module.exports = app
