


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test1',{ useNewUrlParser: true, useCreateIndex: true })
module.exports = new Promise((resolve,reject)=>{
    mongoose.connection.once('open',function (error) {
        if(!error){
            console.log('数据库连接成功')
            resolve()
        }else {
            console.log('数据库连接失败',error)
            reject()
        }
    })

})