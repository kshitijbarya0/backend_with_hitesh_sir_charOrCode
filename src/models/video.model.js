import mongoose,{Schema, Types} from "mongoose";

const userVideo = new Schema(
   {
     videofile:{
        type:String,
        required:true
     },
     thumbnail:{
        type:String,
        required:true
     },
     owner:{
        type: Schema.type.ObjectID,
        ref:"User"
     },
     title:{
        type:String,
        required:true,
        trim:true
     },
     description:{
        type:String,
        required: true,
        trim:true
     },
     duration:{
        type:Number,
        required:true
     },
     views:{
        type:Number,
        default:0
     },
     ispublished:{
        type:Boolean,
        required:true
     }

   },

   {
    timestamps:true
   }
)

export const Video = mongoose.model("Video",userVideo);