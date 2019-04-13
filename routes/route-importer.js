const router = require('express').Router()
const jwtMiddleware = require('./../services/auth/jwt.service')
const projectRoute = require('./project/project.route')
const projectRoutesRoute = require('./project-routes/projectRoute.route')
const authRoute = require('./auth/auth.route')

// Allow anonymous
router.use('/auth', authRoute)

// Protected routes
router.use(jwtMiddleware)
router.use('/projects', projectRoute)
router.use('/projectRoutes', projectRoutesRoute)

module.exports = router
