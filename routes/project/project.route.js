const Project = require('./../../repository/project/project.repo')
const AppUser = require('./../../repository/auth/appUser.repo')
const ReturnObj = require('./../../models/return-object.model')
const express = require('express')
const router = express.Router()

router.get('/all/:userId', function (req, res) {
  const userId = req.params.userId

  Project.find({
    $or: [{
      'CreatedBy': userId
    }, {
      'Members': userId
    }]
  }, function (err, projects) {
    if (err) {
      res.send(err)
    }
    res.status(200).send(new ReturnObj(true, 'MSG_SUCCESS', 200, projects))
  })
})

router.get('/:projectId', function (req, res) {
  const projectId = req.params.projectId
  Project.findById(projectId, (err, project) => {
      if (err) {
        res.status(500).send(new ReturnObj(false, 'ERR_SOMETHING_WENT_WRONG', 500, null))
      } else {
        res.send(new ReturnObj(false, 'MSG_PROJECT_FOUND', 200, project))
      }
    })
    .populate('Members', 'Name Surname Username')
})

router.post('/', function (req, res) {
  const project = new Project(req.body)
  const userId = project.CreatedBy

  project.save(function (err, examples) {
    if (err) {
      res.status(500).send(new ReturnObj(false, 'ERR_PROJECT_NOT_CREATED', 500, null))
    }

    Project.find({
      $or: [{
        'CreatedBy': userId
      }, {
        'Members': userId
      }]
    }, function (err, projects) {
      if (err) {
        res.status(500).send(new ReturnObj(false, 'ERR_SOMETHING_WENT_WRONG', 500, null))
      }

      res.status(200).send(new ReturnObj(true, 'MSG_PROJECT_CREATED', 200, projects))
    })
  })
})

router.get('/add-member/:projectId/:memberId', (req, res) => {
  const projectId = req.params.projectId
  const memberId = req.params.memberId

  AppUser.findOne({
    Username: memberId
  }, (err, user) => {
    if (err || !user) {
      // If given username is not registred as a user
      res.send(new ReturnObj(false, 'ERR_USER_DOESNT_EXIST', 200, null))
    } else {
      Project.findByIdAndUpdate({
            _id: projectId
          }, {
            $addToSet: {
              'Members': user._id
            }
          }, {
            new: true
          },
          (err, result) => {
            if (err) res.send(new ReturnObj(false, 'ERR_MEMBER_NOT_ADDED', 200, null))
          })
        .populate('Members', 'Name Surname Username')
        .exec((errE, p) => {
          if (errE) {
            res.send(new ReturnObj(false, 'ERR_MEMBER_NOT_REMOVED', 200, null))
          } else {
            res.send(new ReturnObj(true, 'MSG_USER_ADDED_ON_BOARD', 200, p.Members))
          }
        })
    }
  })
})

router.delete('/remove-member/:projectId/:memberId', function (req, res) {
  const projectId = req.params.projectId
  const _memberId = req.params.memberId

  Project.findByIdAndUpdate({
        _id: projectId
      }, {
        $pull: {
          'Members': _memberId
        }
      }, {
        new: true
      },
      (err, result) => {
        if (err) res.send(new ReturnObj(false, 'ERR_MEMBER_NOT_REMOVED', 200, null))
      })
    .populate('Members', 'Name Surname Email Username')
    .exec((errE, b) => {
      if (errE) {
        res.send(new ReturnObj(false, 'ERR_MEMBER_NOT_REMOVED', 200, null))
      } else {
        res.send(new ReturnObj(true, 'MSG_USER_REMOVED_FROM_BOARD', 200, b.Members))
      }
    })
})


module.exports = router