'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const logger = require('winston')

const Review = new Schema({
  uid: String, // 리뷰 작성 uid
  title: String, // 리뷰 제목
  description: String, // 여행 나쁜 경험
  information: String, // 여행 좋은 경험
  create_dt: {type: String, default: Date.now()}, // 등록일시
  update_dt: {type: String, default: Date.now()} // 수정일시

})

Review.statics.create = function (reviewArr) {
  const review = new this(reviewArr)

  logger.info(reviewArr)

  return review.save()
}

module.exports = mongoose.model('Review', Review)
