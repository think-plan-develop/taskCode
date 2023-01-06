// Function to send a verification code to a phone number
const jwt=require('jsonwebtoken');
const User=require('../userSchema');

const checkUser = async (body) => {
    let checkRecord;
    if(body.phoneNumber){
        checkRecord = await User.findOne({ phoneNumber:body.phoneNumber});
    }
    else if(body.email){
        checkRecord = await User.findOne({ email:body.email});
    }
    if(!checkRecord){
        checkRecord = await User.create(body);
    }

    return checkRecord
}
  
const createToken=async(userData)=>{
const secret = 'mysecret';
let data=JSON.stringify(userData);
let token = await jwt.sign(data, secret);
return token
}
module.exports={checkUser,createToken}