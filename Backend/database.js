const mongoose=require('mongoose');

exports.connectdatabase=()=>{
    mongoose.connect('mongodb+srv://ashutoshbtech2002:3W3CFHbFaa5Xk9iY@blogapp.pjj06pq.mongodb.net/?retryWrites=true&w=majority&appName=Blogapp',{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
        console.log("Connected to data base mongodb://127.0.0.1:27017/Bookstore")
    }).catch((err)=>{
        console.log(err)
    })
}
