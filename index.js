const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const routeImporter = require('./routes/route-importer')
const config = require('./config/config.json')

const app = express()

app.use(express.static(path.join(__dirname, 'client/dist')))
app.use(bodyParser.urlencoded({ 'extended': 'true' }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(cors())

mongoose.connect(config.DB.Mongo_ConStr, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log('Error: Database connection!\nStopping application...')
    process.exit(22)
  } else {
    // Import API routes
    app.use('/api/', routeImporter)

    // Client-side pages
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client/dist/index.html'))
    })

    const port = config.Port || 3200
    app.listen(port, () => console.log('App started successfully on port ' + port))
  }
})
