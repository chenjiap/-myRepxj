const express =require('express')
const path = require('path')
const cookieparse = require('cookie-parser')
const router = new express.Router()
const model = require('../model/users')
router.get('/login',(req,res,next)=>{
    const filename = path.resolve(__dirname,'../','public/login.html')
    res.sendFile(filename)
})
router.get('/register',(req, res, next) => {
    const filename = path.resolve(__dirname,'../','public/register.html')
    res.sendFile(filename)

})
router.get('/usercenter',cookieparse(),async (req,res)=>{
 // const {user} = req.cookies
  const {user} = req.session
  if(!user){
    res.redirect('/login')
    return
  }
  const result = await model.findOne({_id:user})
  if(result){
    res.render('user-center',{username:result.username})
  }else{
    res.redirect('/login')
  }

})
module.exports = router
