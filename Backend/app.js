const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors())
const { connectdatabase } = require('./database');
const userrouter=require('./routes/userRoutes');
const blogrouter=require('./routes/blogroutes')

app.use(express.json());

app.use("/Bloguser",userrouter);
app.use('/Blog',blogrouter);


connectdatabase();

module.exports=app;