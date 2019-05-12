const express = require('express')
const db = require('./db')
const Users = require('./model/users')
const  app =express()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
console.log(db)
db
    .then(()=>{
    console.log(111)
    app.post('/register',async (req,res)=>{
        console.log(333)
        const {username,password,rePassword,email} = req.body
        const usernameReg = /^[a-zA-Z0-9_]{5,10}$/
        const  passwordReg = /^[a-zA-Z0-9_]{5,10}$/
        const  emailReg = /^\w{3,15}@\w{2,5}\.com$/
        if(!usernameReg.test(username)){
            res.send('用户名长度为5-10位，只能是英文、数字和下划线')
            return
        }
        if (!passwordReg.test(password)){
            res.send('密码长度为5-10位，只能是英文、数字和下划线')
            return  
        }
        if (password !== rePassword){
            res.send('两次密码输入不一致')
        }
        if (!emailReg.test(email)){
            res.send('邮箱格式不正确')
            return
        }
        const result = await Users.findOne({username})
        if(result){
            res.send('用户已存在')
        }else {
            await Users.create({username,password,email})
            res.send(username+'用户注册成功')
        }
        
    })
    })



app.listen(3001,(err)=>{
    if(!err)console.log('服务器启动成功')
    else console.log(err)
})















