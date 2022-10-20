const express = require('express');
const app = express();
const apiRoute = require('./routes/api')
app.use(express.json());

app.use('/api',apiRoute)

app.listen('3000',()=>{
    console.log('Server started at port 3000')
})