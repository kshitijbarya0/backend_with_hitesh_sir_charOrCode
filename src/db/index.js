import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        const createConnection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`Connection Sucessfull: ${createConnection}`);
    } catch (error) {
        console.error("Error while connecting DataBase: ", error);
        throw error
    }
}

export default connectDB;