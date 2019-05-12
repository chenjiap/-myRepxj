const mongoose = require('mongoose')

const citiesSchhema = new mongoose.Schema({
  code:String,
  province:String,
  city:String,
  county:String,
  name:String,
  level:Number




})
module.exports = mongoose.model('cities',citiesSchhema)














