const express=require('express')
const cors=require('cors')
const database=require('./database/database')

//importing route 
const userroute=require('./router/userroute')


const app=express();
app.use('/',(req,res,next)=>{
    res.send('making in the process')
})

app.use(userroute);


database
  .sync()
  .then(() => {
    app.listen(3001);
  })
  .catch((err) => {
    console.log(err);
  });