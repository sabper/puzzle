'use strict'

const express = require('express')
const app = express()
const path = require('path')
const users = require('./users')
const reviews = require('./reviews')
const home = require('./home')

app.set('views', path.join(__dirname, '../../views'))

app.use('/', home)
app.use('/users', users)
app.use('/reviews', reviews)

module.exports = app
