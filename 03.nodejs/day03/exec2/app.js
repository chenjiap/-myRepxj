
const express = require('express');
const db = require('./db')
const cities = require('./models/cities')

const app = express();

app.use(express.static('public'))

db
  .then(() => {
  app.get('/province',async (req,res)=>{

    try {
      const result = await cities.find({level:1},{name:1,province:1,_id:0})
      res.json({code:0,data:result})
    }catch(e) {
      console.log(e)
      res.json({code:1,err:e})
    }




  })

  app.get('/city',async (req,res) => {
    try{
      const {province} = req.query

      const result = await cities.find({province,level:2},{name:1,city:1,_id:0})
      res.json({code:0,data:result})


    }catch(e){
      res.json({code:1,err:e})
    }
  })

  app.get('/county',async (req,res) => {
   try {
     const {province,city} = req.query
     const result = await cities.find({province,city,level:3})
     res.json({code:0,data:result})
   }catch(e) {
     res.json({code:1,err:e})
   }

  })

  })
  .catch()


app.get('/',(req, res) => {

})



app.listen(3002, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
