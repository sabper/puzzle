'use strict'

const express = require('express')
const app = express()
const path = require('path')
const home = require('./home')

app.set('views', path.join(__dirname, '../../../views'))

app.get('/', home.getHome)

module.exports = app
