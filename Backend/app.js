const express=require('express');
const { connectdatabase } = require('./database');
const userrouter=require('./routes/userRoutes');
const blogrouter=require('./routes/blogroutes')

const app=express();
app.use(express.json());

app.use("/Bloguser",userrouter);
app.use('/Blog',blogrouter);


connectdatabase();

module.exports=app;