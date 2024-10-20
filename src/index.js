import dotenv from "dotenv";
import connectDB from './db/index.js';

dotenv.config({
    path:'./env'
})

connectDB();

/*

Method 1 to connect DB 

import express from "express";

const app = express();

(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error", (error) =>{
         console.log("Err: ", error);
         throw error
       })

       app.listen(process.env.PORT, ()=>{
           console.log("connection successfull on ", process.env.PORT);
       })
    } catch (error) {
        console.error("ERROP:", error);
        throw error
    }
})()

*/