const express = require('express')
const router =new express.Router()
const sha1 = require('sha1')
const ejs = require('ejs')
const model = require('../model/users')

router.use(express.urlencoded({extended: true}));
router.use((req,res,next)=>{
    const {username,password,repassword,email} = req.body

  const uesernameReg = /^[a-zA-Z0-9_]{3,5}$/
  const passwordReg = /^\d{5,9}$/
  const emailReg = /^\w{3,5}@\.com/
  const isRegister = req.path === '/register'


   /* if (!uesernameReg.test(username)){
        res.render(fileName,{errMessage:{usernameErr:'请输入3-5位包含字母数字的用户名'}})
        return
    }
    if (!passwordReg.test(password)){
        res.render(fileName,{errMessage:{passwordErr:'请输入5-9位数字密码'}})
        return
    }

    if(isRegister && !emailReg.test(email)){
        res.render(fileName,{errMessage:{emailErr:'请输入3-5位字母加@.com邮箱地址'}})
      return
    }
    next()*/
   const errMessage = {}
  if (!uesernameReg.test(username)){
    errMessage.usernameErr = '请输入3-5位包含字母数字的用户名'
  }
  if (!passwordReg.test(password)){
    errMessage.passwordErr = '请输入5-9位数字密码'
  }

  if(isRegister && !emailReg.test(email)){
    errMessage.emailErr = '请输入3-5位字母加@.com邮箱地址'

  }
  if(errMessage.usernameErr || errMessage.passwordErr || errMessage.emailErr ){
    const fileName = isRegister ? 'register.ejs': 'login.ejs'
    console.log(email)
    res.render(fileName,{errMessage,username,email})
    return
  }
  next()
})


router.post('/register',async (req, res) => {
    console.log(1111)
    /*const {username,password,repassword,email} = req.body

     const uesernameReg = /^[a-zA-Z0-9_]{3,5}$/
     const passwordReg = /^\d{5,9}$/
     const emailReg = /^\w{3,5}@\.com/

     if (!uesernameReg.test(username)){
     res.send('请输入3-5位包含字母数字的用户名')
     return
     }
     if (!passwordReg.test(password)){
     res.send('请输入5-9位数字密码')
     return
     }
     if(password !== repassword){
     res.send('两次输入密码不一致')
     return
     }
     if(!emailReg.test(email)){
     res.send('请输入3-5位字母加@.com邮箱地址')
     }*/
    const {username,password,repassword,email} = req.body
    if(password !== repassword){
        res.render('register.ejs',{errMessage:{repasswordErr:'两次输入密码不一致'},username,email})
        return
    }
    const a =await model.findOne({username})
    if(!a){
        model.create({username, password:sha1(password),email})
        res.redirect('/login')
    }else {res.render('register.ejs',{errMessage:{userErr:'用户已存在'},username,email})}


})
router.post('/login',async (req,res)=>{
    const {username,password} = req.body
    const result = await model.findOne({username,password:sha1(password)})
    if(result){
      console.log(result)
     // res.cookie('user',result._id,{maxAge:1000*3600*24*7})
      req.session.user = result._id
        res.redirect('/usercenter')

    }else {
        res.render('login.ejs',{errMessage:{usernameErr:'用户名密码不正确'},username})
    }
})
module.exports = router
