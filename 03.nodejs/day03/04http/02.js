const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.static('test'))
app.get('/',(req,res)=>{
//console.log(req.params)
//res.send('这是服务器响应的内容555')
    //res.send('这是服务器响应的内容123')
  // res.download('./01.面试题.js')
    console.log(req.body)
 //  console.log(a );
})
app.use((err,req,res,next)=>{
    console.log(err)
    res.send('error')
    
})
app.listen(3000,(err)=>{
    if(!err) console.log('服务器启动成功');
    else console.log(err)
})
