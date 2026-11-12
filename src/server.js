import express from 'express'
// const express = require('express')

const app = express();

const hostName = 'localhost';
const port= 8017;
app.get('/',function(req,res){
    res.send('<h1>Xin chào Node JS Vinh Phan</h1>');
})
app.listen(port,hostName,()=>{
    console.log(`Xin chào Vinh Phan, Đang chạy server at http://${hostName}:${port}`);
})
