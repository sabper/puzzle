'use strict'

const Review = require('../../../../model/mongo/review')
const logger = require('winston')

exports.getHome = (req, res) => {
  Review.find({}).sort({create_dt: -1}).exec()
  .then((reviews) => {
    return res.render('home', {
      reviews: reviews,
      title: 'mobile'
    })
  })
  .catch((err) => {
    logger.error(err)
  })
}
