'use strict'

const express = require('express')
const router = express.Router()
const review = require('./review')

router.post('/review', review.create) // 사용자 등록

module.exports = router
