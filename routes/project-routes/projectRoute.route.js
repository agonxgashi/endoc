const ProjectRoute = require('./../../repository/project-routes/projectRoute.repo')
const ProjectRouteModel = require('./../../repository/project-routes/projectRoute.repo')
const ReturnObj = require('./../../models/return-object.model')
const express = require('express')
const router = express.Router()

router.get('/:projectId', function (req, res) {
  const projectId = req.params.projectId

  ProjectRoute.find({
    ProjectId: projectId
  }, function (err, projectRoutes) {
    if (err) { res.status(500).send(new ReturnObj(false, 'ERR_SOMETHING_WENT_WRONG', 500, null)) }

    res.status(200).send(new ReturnObj(true, 'MSG_SUCCESS', 200, projectRoutes))
  })
    .select('_id Path Method')
    .sort('Path')
})

router.get('/:projectId/:routeId', function (req, res) {
  const projectId = req.params.projectId
  const routeId = req.params.routeId
  ProjectRoute.findOne({
    _id: routeId,
    ProjectId: projectId
  }, function (err, projectRoutes) {
    if (err) {
      res.status(500).send(new ReturnObj(false, 'ERR_SOMETHING_WENT_WRONG', 500, null)) 
    } else {
      res.status(200).send(new ReturnObj(true, 'MSG_SUCCESS', 200, projectRoutes))
    }
  })
})

router.post('/', function (req, res) {
  const _projectRoute = new ProjectRouteModel(req.body)
  _projectRoute.save(err => {
    if (err) {
      res.status(500).send(new ReturnObj(false, 'ERR_SOMETHING_WENT_WRONG', 500, null))
    } else {
      res.status(200).send(new ReturnObj(true, 'MSG_SUCCESS', 200, _projectRoute))
    }
  })
})

router.post('/update', function (req, res) {
  const project = new ProjectRoute(req.body)
  const projToEdit = {
    IsProtected: req.body.IsProtected,
    Headers: req.body.Headers,
    Parameters: req.body.Parameters,
    ProjectId: req.body.ProjectId,
    Path: req.body.Path,
    Description: req.body.Description,
    ResponseExample: req.body.ResponseExample,
    Method: req.body.Method
  }
  // console.log(req.body.Path)
  
  ProjectRoute.findByIdAndUpdate(project._id, projToEdit, { new: true }, function (err, data) {
    console.log(data, err);
    if (err) {
      res.status(500).send(new ReturnObj(false, 'ERR_SOMETHING_WENT_WRONG', 500, err))
    } else {
      res.status(200).send(new ReturnObj(true, 'MSG_UPDATED', 200, data))
    }
  })
})

module.exports = router
