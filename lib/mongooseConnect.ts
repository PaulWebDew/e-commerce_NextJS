import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";


export const mongooseConnect = async()=>{
const uri = process.env.MONGODB_URI;
try{
   uri && await mongoose.connect(uri,{
      useNewUrlParser: true,
      useUnifiedTopology: true}as ConnectOptions);
   console.log('connectDB')
}catch(err){
   console.log('Error connectDB:'+err)
}
}