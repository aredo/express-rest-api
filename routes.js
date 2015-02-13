var Route     = express.Router()
var Users     = require('./models/users');

Route.get('/users', function (req, res) {

	Users.find(function (err, users) {
		if (err) return res.status(500).json(err);

		return res.status(200).json(users)
	});
})

Route.post('/users', function (req, res) {

  var data = req.body;

  console.log(data);

  var user = new Users(data);

  user.save(function (err, new_user) {
    if (err) return res.status(500).json(err);

    return res.status(200).json(new_user)

  });

})

Route.put('/users', function (req, res) {

})

Route.delete('/users', function (req, res) {

})

module.exports = Route
