const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
    phoneNumber: String,
    email:String,
  });
  
  
const User = mongoose.model('user', userSchema);
module.exports=User;
  