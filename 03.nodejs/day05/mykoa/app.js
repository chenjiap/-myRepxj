
const Koa = require('./application.js')


const  app = new Koa()

app.use((context,next) => {

console.log('中间件执行了11')
	context.body = {name:'jack'}
next()
})

app.use((context,next) => {
	console.log('中间件执行了22')

})



app.listen(3002,(err) => {
	if(!err){
		console.log('服务器启动成功')
	}
})



