const express = require('express');
const bodyParse=require('body-parser');
const cors=require('cors');
const{ mongoose }=require('./db.js');
var employeeController=require('./controllers/employeeController.js');

var app=express();
app.use(bodyParse.json());
app.use(cors({origin:'http://localhost:4200'}));

app.listen(3000,()=>console.log('Server is established at port:3000'));

app.use('/employees',employeeController);