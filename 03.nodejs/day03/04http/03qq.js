const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
app.get('',(req, res) => {

})
app.use((err, req, res, next) => {
  console.log(err);
  res.end('error');
})


app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
