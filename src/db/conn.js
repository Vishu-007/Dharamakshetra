const mongoose= require("mongoose");
mongoose.set('strictQuery', true);

//creating a database
mongoose.connect("mongodb://0.0.0.0:27017/mern",{  //calling connect function that's why file's name is con and connecting with mongodb
   // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
})