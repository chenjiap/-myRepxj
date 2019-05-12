const db = require('./db')
const Students = require('./modles/students');

const Teachers = require('./modles/teachers');
//console.log(Teachers)
 db
     .then(async () => {
         console.log('111');
         console.log('222')

         const result1 = await Students.create({name: 'zhangsan', age: 15, sex: '男'});
         console.log('333')
         const result2 = await Teachers.create({name: 'lisi', age: 18, sex: '女'})
     console.log(result1,result2)
     })
     .catch(()=>{

     })

