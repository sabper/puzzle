'use strict'

const joi = require('joi')

const envVarsSchema = joi.object({
  NODE_ENV: joi.string()
    .allow(['development', 'production', 'test', 'provision'])
    .required()
}).unknown()
  .required()

const { error, value: envVars } = joi.validate(process.env, envVarsSchema)
if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  env: envVars.NODE_ENV,
  firebase_key_path: '../firebase/puzzle-c6f1c-firebase-adminsdk-sf2m5-d5e7f7c434.json',
  base_domain: 'http://ec2-13-113-12-108.ap-northeast-1.compute.amazonaws.com:3000',
  confirm_uri: '/users/user/verify',
  mail_id: envVars.MAIL_ID,
  mail_pass: envVars.MAIL_PASS,
  mail_retry: 3,
  mail_smtp_domain: 'smtp.gmail.com',
  mail_smtp_port: 587
}

module.exports = config
