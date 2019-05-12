const mongoose = require('mongoose')
const common = require('../common')
const studentSchema = new mongoose.Schema(common)
const Students = mongoose.model('students',studentSchema)
module.exports = Students










