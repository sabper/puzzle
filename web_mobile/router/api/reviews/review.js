const Review = require('../../../../model/mongo/review')
const logger = require('winston')
const config = require('../../../../config')

exports.create = (req, res) => {
  const title = req.body.title
  const description = req.body.description
  const information = req.body.information
  const uid = req.body.uid

  logger.info(title)
  logger.info(description)
  logger.info(information)

  // 파라미터 검증
  const _promise = new Promise(
    (resolve, reject) => {
      if (!uid) {
        reject('review uid not exists')
      }

      if (!title) {
        reject('review title not exists')
      }

      if (!description) {
        reject('review description not exists')
      }

      if (!information) {
        reject('review information not exists')
      }

      resolve(true)
    }
  )

  // review 정보 DB 에 저장. Todo. error reject 시킬 수 있게 개선 필요.
  const createReviewToDB = () => {
    let review = {
      title: title,
      description: description,
      information: information,
      uid: uid
    }
    Review.create(review)

    res.json({
      msg: 'write success'
    })
  }

  // 전체 promise chain
  _promise // 1. 파라미터 검증
  .then(createReviewToDB) // 2. review 정보 DB 저장
  .catch((err) => {
    logger.error(err)
    return res.status(401).json({
      meessage: err
    })
  })
}
