
const Koa = require('./application')


const app = new Koa()


app.use((res,req,next) => {


})


app.listen(3002,(err) => {
	if(!err){
		console.log('服务器启动成功')
	}else {
		console.log(err)
	}
})










