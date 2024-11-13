import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'

const connectDB = async () =>{
    try {
        const connectionDB = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Connection successful: ${connectionDB}`);
    } catch (error) {
        console.log(`Connection failed`);
        process.exit(1);
    }
}

export default connectDB;
