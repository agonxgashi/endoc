const SatelliteModel = require('./../../repository/satellite/satellite.repo')
const ReturnObj = require('./../../models/return-object.model')
const express = require('express')
const router = express.Router()

router.get('/:satelliteId', function (req, res) {
  const satelliteId = req.params.satelliteId
  SatelliteModel.findOne({
      SatelliteId: satelliteId
    }, function (err, cargo) {
      if (err) {
        res.status(500).send(new ReturnObj(false, 'ERR_SOMETHING_WENT_WRONG', 500, null))
      }

      res.status(200).send(new ReturnObj(true, 'MSG_SUCCESS', 200, cargo ? cargo.Cargo : []))
    })
    .select('-_id Cargo')
})

module.exports = router