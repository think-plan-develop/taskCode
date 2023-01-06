
const mongoose=require('mongoose');
const cartSchema = new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    productId: mongoose.Types.ObjectId,
    quantity: Number
  });
  
  
const Cart = mongoose.model('cart', cartSchema);
module.exports=Cart;