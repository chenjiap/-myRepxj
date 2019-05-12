const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/exer',{useNewUrlParser:true,useCreateIndex:true})
module.exports = new Promise((resolve,reject)=>{
    mongoose.connection.once('open',(err)=>{
        if(!err) {
            console.log('数据库连接成功')
            resolve()
            console.log(999)
        }else {
            console.log(err)
            reject()}
    })

})
