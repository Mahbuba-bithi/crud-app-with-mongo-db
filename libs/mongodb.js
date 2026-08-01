import mongoose from "mongoose";

const connectMongoDB = (){
    try{
        mongoose.connect(process.env.MONGO_DB_URI)
        console.log("connected to mongodb")
    } catch(error){
       console.log(error)
    }
    
}

export default connectMongoDB;