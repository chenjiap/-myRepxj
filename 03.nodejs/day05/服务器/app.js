const express = require('express');

const sha1 = require('sha1')

const fetchticket = require('./wechat/ticket')

const app = express();

app.set('views','views')
app.set('view engine','ejs')





app.get('/search',async (req, res) => {
  const {ticket} = await fetchticket()
  const url = 'http://4d4291b4.ngrok.io/search'
  const noncestr = Math.random().toString().substring(2)
  const timestamp = Math.floor(Date.now()/1000)

	console.log(ticket);
	console.log(url);
	console.log(noncestr);
	console.log(timestamp);

  const arr = [
    `jsapi_ticket=${ticket}`,
    `url=${url}`,
    `noncestr=${noncestr}`,
    `timestamp=${timestamp}`
  ].sort()

  const str = arr.join('&')

  const signature = sha1(str)

  res.render('search',{signature,noncestr,timestamp})

console.log(signature)

})

app.listen(3002, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
