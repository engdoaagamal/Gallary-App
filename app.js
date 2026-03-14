require("dotenv").config();
const mongoose=require("mongoose")
const express=require("express")
const app=express();
app.use(express.json());
const port =process.env.PORT||5000
async function connectDB(){
try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongoose connect")
} catch (error) {
    console.log("error to connect",error)
}
 
}
connectDB()
app.get("/api",(req,res)=>{
    console.log("welcome to test");
   res.status(200).json({
    msg:"welcome"
   })
})


const imgRouters = require("./routers/img_rout"); 
app.use("/api", imgRouters);
app.listen(port,()=>{
    console.log("server run")
}) 