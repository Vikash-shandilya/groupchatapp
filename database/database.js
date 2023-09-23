const sequelize=require('sequelize')

const groupchatapp=new sequelize('chatapp','root','localhost',{
    dialect:'mysql',
    host:'localhost'

})

module.exports=groupchatapp;