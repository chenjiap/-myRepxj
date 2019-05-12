const mongoose = require('mongoose')
const common = require('../common')
const teacherSchema = new mongoose.Schema(common)
const Teachers = mongoose.model('teachers',teacherSchema)
module.exports = Teachers

























