'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  name: String, // 사용자 이름
  user_type: String, // 사용자 구분. firebase, kakao
  phone: String, // 사용자 전화번호
  uid: String, // 사용자 uid from firebase
  email: String, // 사용자 email
  create_dt: String, // 등록일시
  update_dt: String, // 수정일시
  device_token: String // device token
})

User.statics.findOneByname = function (name) {
  return this.findOne({
    name
  }).exec()
}

User.statics.findOneByapikey = function (apikey) {
  return this.findOne({
    apikey
  }).exec()
}

User.statics.findOneByphone = function (phone) {
  return this.findOne({
    phone
  }).exec()
}

User.statics.create = function (userArr) {
  const user = new this(userArr)

  return user.save()
}

module.exports = mongoose.model('User', User)
