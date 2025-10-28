const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Neo-Aries Backend is running')
})

module.exports = app;