'use strict'

const express = require('express')
const router = express.Router()
const users = require('./users')

router.use('/main', (req, res) => {
  res.render('home', {
    name: 'barogo',
    title: 'Home'
  })
})
router.use('/users', users) // 사용자

module.exports = router
