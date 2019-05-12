const express = require('express');
const app = express();

app.get('/jsonp',(req, res) => {
	const {callback} = req.query
	res.send(callback + '("这是jsonp返回的数据")')

})

app.get('/cros',(req,res) => {
	res.set('Access-Control-Allow-origin','*')
	//res.set('Access-Control-Allow-origin','http://localhost:4000')
	res.send('这是cros服务器返回的响应')
})

app.listen(3002, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
