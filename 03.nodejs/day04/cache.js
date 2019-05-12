
const express = require('express');
const {readFile} = require('fs')
const app = express();



app.get('/',(req, res) => {
  readFile('./public/index.html',function (err,data) {
		if(!err){
			res.end(data)
		}else {
			console.log(err)
		}
	})

})


app.get('/test.js',(req,res) => {
	console.log('test.js路由出发了')
	readFile('./public/test.js',function (err,data) {
		if(!err){
			res.set('cache-control','max-age=86400')
			res.set('expires',new Date(Date.now()+1000*3600*24).toGMTString())
			res.end(data)

		}else console.log(err)

	})


})



let etag = '333'
let lastModified = Date.now()

app.get('/test2.js',function (req,res) {
	console.log('test2.js路由触发了')
  const ifNoneMatch = req.get('if-none-match')

	if(ifNoneMatch){
		if(ifNoneMatch === etag){
			res.status(304).end()
		}else {
			readFileAsync(res)
		}


	}else {
		 const ifModifiedSince = Date.parse(req.get('if-modified-since'))
		 if(ifModifiedSince === lastModified){
		 	  res.status(304).end()
		 }else{
			 readFileAsync(res)
		 }


	}


})
  

function readFileAsync(res) {
	readFile('./public/test2.js',function (err,data) {
		if(!err){
			res.set('etag',etag)
			res.set('last-modified',new Date(lastModified).toGMTString())
      res.end(data)
		}else console.log(err)
	})



}






app.listen(3002, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
