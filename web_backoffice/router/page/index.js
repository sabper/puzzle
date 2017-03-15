'use strict'

const express = require('express')
const router = express.Router()

router.use('/', (req, res) => {
  res.render('home', {
    name: 'barogo',
    title: 'Home'
  })
})

module.exports = router
