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

  var user = new Users(data);

  user.save(function (err, new_user) {
    if (err) return res.status(500).json(err);

    return res.status(200).json(new_user)

  });

})

Route.get('/users/:user_id', function (req, res) {
  var userId = req.params.user_id

  Users.findById(userId, function (err, user) {
      if (err) return res.status(500).json(err);

      if (user) return res.status(200).json(user)

      return res.status(400).json({'status': 'error', 'message': 'User not found!' })

    });
})

Route.put('/users/:user_id', function (req, res) {
  var userId = req.params.user_id

  var dataToUpdate = req.body

  Users.findByIdAndUpdate(userId, dataToUpdate, function (err, user) {
    if (err) return res.status(500).json(err);

    if (user) return res.status(200).json({status: 'success', 'message' : 'User has deleted', data: user})

    return res.status(400).json({'status': 'error', 'message': 'User not found!' })

  });
})

Route.delete('/users/:user_id', function (req, res) {

  var userId = req.params.user_id

  Users.findByIdAndRemove(userId, function (err, user) {
    if (err) return res.status(500).json(err);

    if (user) return res.status(200).json({status: 'success', 'message': 'User has deleted'})

    return res.status(400).json({'status': 'error', 'message': 'User not found!' })

  });

})

module.exports = Route
