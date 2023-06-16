import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const DBConnection=async() =>{
   const MONGO_URL=process.env.MONGO_URL
   console.log(MONGO_URL);
   try {
      await mongoose.connect(MONGO_URL,{useNewUrlParser: true});  //d
      console.log("database is Connected")
   } 
   catch (error) {
    console.log("Error while connecting to database")
   }
}

export default DBConnection;