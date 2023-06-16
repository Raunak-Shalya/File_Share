import mongoose from 'mongoose'

const fileScheman=new mongoose.Schema({
  path:{
    type: String,
    required: true
  },
   name:{
    type:String,
    required:true
   },
   downloadCounter:{
     type:Number,
     required:true,
     default:0 
   }
})

const File=new mongoose.model('file',fileScheman)

export default File;