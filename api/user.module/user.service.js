const User = require('./user.model')
const ReturnObj = require('./../../models/return-object.model')
const jwt = require('jsonwebtoken')
const config = require('./../../env/config.json')

module.exports = {
  login: async function (req, res) {
    console.log(config)
    console.log('LOGIN')
     
    try {
      const _username = req.body.Username
      const _password = req.body.Password

      if (_username && _password) {
        const _user = await User.findOne({ Username: _username }).exec()
        console.log(_user);
        
        if (_user) {
          _user.comparePassword(_password, function (err, isMatch) {
            if (err) { throw err }
            if (isMatch) {
              var payload = {
                _id: _user._id,
                Username: _username
              }
              // console.log(config);
              
              var secret = config.JWT_SECRET
              // var expires = config.JWT_TIMEOUT
              // console.log(secret, expires)
              var token = jwt.sign(payload, secret, {
                expiresIn: 80000
              })
              res.status(200).send(new ReturnObj(true, 'MSG_SUCCESS_LOGIN', 200, token))
            }
          })
        } else {
          throw new Error('USER_DOES_NOT_EXIST')
        }
      } else {
        throw new Error('USERNAME_OR_PASSWORD_NOT_PROVIDED')
      }
    } catch (error) {
      res.status(200).send(new ReturnObj(false, 'ERR_INVALID_CREDENTIALS', 401, null))
    }
  },

  register: async function (req, res) {
    try {
      const _user = new User(req.body)
      const _data = await _user.save()
      res.status(200).send(new ReturnObj(true, 'MSG_SUCCESS_REGISTER', 200, _data))
    } catch (error) {
      res.status(500).send(new ReturnObj(false, 'ERR_SOMETHING_WENT_WRONG', 500, null))
    }
  }
}
