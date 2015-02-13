GLOBAL.express = require('express')

var bodyParser     = require('body-parser')
var morgan         = require('morgan')
var errorHandler   = require('errorhandler')
var multer         = require('multer')
var methodOverride = require('method-override')

var mongoose     = require('mongoose')

/**
 * Create Express server.
 */
var app = express()

/**
 * Connect to MongoDB.
 */

var MONGODB_URL = process.env.MONGODB || 'mongodb://localhost:27017/node-api'

mongoose.connect(MONGODB_URL)
mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.')
})


app.use(morgan('dev')) // log requests to the console
// configure body parser
app.use(methodOverride())
app.use(multer())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var router = require('./routes')

app.use(function (req, res, next) {
  // do logging
  console.log('Something is happening.')
  next()
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use('/api', router)

app.use(errorHandler())

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})

module.exports = server
