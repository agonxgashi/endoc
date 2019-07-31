const mongoose = require('mongoose')
const Schema = mongoose.Schema

var HeaderSchema = new mongoose.Schema({
  Key: String,
  Value: String,
  Description: String
})

var ParameterSchema = new mongoose.Schema({
  IsRequired: Boolean,
  Type: String,
  ParameterName: String,
  ParameterDataType: String
})

const EndpointSchema = new Schema({
  ProjectId: mongoose.Schema.Types.ObjectId,
  Method: String,
  Path: String,
  Description: String,
  ResponseExample: String,
  IsProtected: Boolean,
  Headers: [HeaderSchema],
  Parameters: [ParameterSchema]
})

var EndpointModel = mongoose.model('Endpoint', EndpointSchema)

module.exports = EndpointModel
