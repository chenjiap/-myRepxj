const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ajax',{useNewUrlParser:true,useCreateIndex:true})

module.exports = new Promise((resolve,reject) => {
  mongoose.connection.once('open',(err) => {
    if(!err){
      console.log('数据库连接成功')
      resolve()
    }else{
      console.log(err)
      reject()
    }

  })



})














