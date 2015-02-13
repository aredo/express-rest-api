var Route     = express.Router()

// respond with "Hello World!" on the homepage
Route.get('/user', function (req, res) {
  res.send('Got e GET request at /api/user');
})

// accept POST request on the homepage
Route.post('/user', function (req, res) {
  res.send('Got a POST request at /api/user');
})

// accept PUT request at /user
Route.put('/user', function (req, res) {
  res.send('Got a PUT request at /api/user');
})

// accept DELETE request at /user
Route.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /api/user');
})

module.exports = Route