const router = require('express').Router()

// Middlewares
const jwtMiddleware = require('./services/auth/jwt.service')

// Routes
const auth = require('./api/user.module/user.controller')
const project = require('./api/project.module/project.controller')
const satellite = require('./api/satellite.module/satellite.controller')

// Allow anonymous
router.use('/auth', auth)

// Protected routes
router.use(jwtMiddleware)
router.use('/project', project)
router.use('/satellite', satellite)

module.exports = router
