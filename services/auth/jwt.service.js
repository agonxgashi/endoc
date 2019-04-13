const jwt = require('jsonwebtoken')
const apiRoutes = require('express').Router()
const config = require('./../../config/config.json')
const ReturnObj = require('./../../models/return-object.model')

apiRoutes.use(function (req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers['Authorization'] || req.headers['x-access-token'] || req.headers['authorization']
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.JWT_SECRET, function (err, decoded) {
      if (err) {
        return res.status(401).send(new ReturnObj(false, 'ERR_NOT_AUTHORIZED', 401, err))
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded
        next()
      }
    })
  } else {
    // if there is no token
    // return an error
    return res.status(401).send(new ReturnObj(false, 'ERR_NO_TOKEN_PROVIDED', 401, null))
  }
})

module.exports = apiRoutes
