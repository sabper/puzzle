'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routerApi = require('./router/api')
const routerPage = require('./router/page')
const logger = require('winston')
const helmet = require('helmet')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

app.use(helmet())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

morgan.token('req-body', (req, res) => {
  return '\n "Request-Body" : ' + JSON.stringify(req.body, null, '\t')
})
app.use(morgan('[:date[iso]] :method :status :url HTTP/:http-version :user-agent [time :response-time ms] :req-body')) // request log를 console에 print

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: [
    path.join(__dirname, 'views/partials/'),
    path.join(__dirname, 'views/partials_mobile/')
  ]
}))
app.set('view engine', '.hbs')

app.use(express.static(path.join(__dirname, 'public')))
app.use('/bootstrap_css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))
app.use('/bootstrap_js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')))

app.use('/', (routerPage)) // / 하위로 요청되는 request 다음 router에서 수행
app.use('/api/v1', routerApi) // /api/v1 하위로 요청되는 request 다음 router에서 수행

const logErrors = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  logger.error(err.stack)
}

app.use(logErrors)
module.exports = app
