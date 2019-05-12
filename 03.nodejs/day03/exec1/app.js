const express = require('express');
const db = require('./db')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const uiRouter = require('./router/ui-router')
const userRouter = require('./router/user-router')
const app = express()
app.set('views','views')
app.set('view engine','ejs')

app.use(express.static('public'));
/*app.use('/login',(req,res,next)=>{
    res.sendfile(__dirname,'/public/login.ejs')
})
app.use('/register',(req,res,next)=>{
    res.sendfile(__dirname,'/public/register.ejs')
})*/
/*app.use((req,res,next)=>{
    const {username,password,repassword,email} = req.body

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

    if(email && !emailReg.test(email)){
        res.send('请输入3-5位字母加@.com邮箱地址')
    }
    next()
})*/
app.use(session({
  secret:'xiaohong ai chiyu',
  saveUninitialized:false,
  resave:false,
  store:new MongoStore({
    url:'mongodb://localhost:27017/daxiong',
    touchAfter:3600*24
  }),
  cookie:{
   maxAge:1000*3600*24*7
  }





}))



db.then( ()=>{
         /*app.post('/register',async (req, res) => {
             console.log(1111)
            /!*const {username,password,repassword,email} = req.body

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
            }*!/

             const {username,password,repassword,email} = req.body
             if(password !== repassword){
                 res.send('两次输入密码不一致')
                 return
             }
            const a =await model.findOne({username})
            if(!a){
                model.create({username, password, email})
                res.send(username+'注册成功')
            }else res.send('用户已存在')


        })
         app.post('/login',async (req,res)=>{
             const {username,password} = req.body
           const result = await model.findOne({username,password})
             if(result){
                 res.send('登陆成功')
             }else {
                 res.send('用户名密码不正确')
             }
         })*/
         app.use(uiRouter)
         app.use(userRouter)

    })

    .catch()




/*app.use((err, req, res, next) => {
  console.log(err);
  res.end('error');
})*/


app.listen(3001, (err) => {
  if (!err) console.log('服务器启动成功了~')
  else console.log(err);
})
