const admin = require('firebase-admin')
const config = require('../config')
const serviceAccount = require(config.firebase_key_path)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://puzzle-c6f1c.firebaseio.com'
})
