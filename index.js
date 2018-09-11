
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 4000;


app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('sample');
})


app.listen(port,()=>{
  console.log(`Now listening on port ${port}`);
})