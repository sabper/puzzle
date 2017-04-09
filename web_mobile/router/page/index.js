'use strict'

const express = require('express')
const app = express()
const path = require('path')
const users = require('./users')
const reviews = require('./reviews')

app.set('views', path.join(__dirname, '../../views'))

app.get('/', (req, res) => {
  return res.render('home', {
    title: 'mobile'
  })
})
app.use('/users', users)
app.use('/reviews', reviews)

module.exports = app
