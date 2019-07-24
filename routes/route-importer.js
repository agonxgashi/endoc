const router = require('express').Router()
const jwtMiddleware = require('./../services/auth/jwt.service')
const authRoute = require('./auth/auth.route')

// Routes
const projectRoute = require('./project/project.route')
const projectRoutesRoute = require('./project-routes/projectRoute.route')
const satelliteRoute = require('./satellite/satellite.route')

// Allow anonymous
router.use('/auth', authRoute)

// Protected routes
router.use(jwtMiddleware)
router.use('/projects', projectRoute)
router.use('/projectRoutes', projectRoutesRoute)
router.use('/satellite', satelliteRoute)

module.exports = router
