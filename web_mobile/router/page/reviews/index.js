const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, '../../../views'))

app.get('/write', (req, res) => {
  return res.render('reviews/write', {
    title: 'mobile'
  })
})

module.exports = app
