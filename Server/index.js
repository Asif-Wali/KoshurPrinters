const express= require ("express");
const cors = require ("cors");
const mongoose= require("mongoose");
const{AuthRouter}= require("./Routes/AuthRoute.js")
require("dotenv").config();



const app= express();
app.use(cors());
app.use(express.json());


app.get("/",(req, res)=>{
   
    res.status(200).json("Server is Working");
});
app.use("/api/auth", AuthRouter)


mongoose.connect(process.env.Mongo_URL).then(()=>{
    console.log(`DB connection successful`);
}).catch((err)=>{
    console.log(err.message)
})
app.listen(process.env.Port, ()=>{
    console.log(`Server Started on port ${process.env.Port}`)
});

