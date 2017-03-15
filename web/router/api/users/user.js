const User = require('../../../../model/mongo/user')

exports.user = (req, res) => {

  User.find({}).exec()
  .then(
    users => {
      res.json({users})
    }
  )

}
