const express = require('express');

const EventEmitter = require('events');

const app= express();

const event =new EventEmitter();

let count=0;

event.on("CountAPI",()=>{
    count++
    console.log(count)
})

app.get('/',(req,res)=>{
    res.send('Welcome')
    event.emit('CountAPI');
})

app.get('/search',(req,res)=>{
    res.send('Welcome');
})

app.get('/update',(req,res)=>{
    res.send('Welcome');
})

app.listen(4000);