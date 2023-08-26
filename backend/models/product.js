const mongoose= require ("mongoose");
const productShema= new mongoose.Schema ({
    _id:String,
    name:String,
    imageUrls: Array,
    stock:Number,
    price:Number,
    createdDate:Date,
    isActive:Boolean,
    categories : [{type:String, ref:"Category"}]
});
const Product =mongoose.model("product",productShema);
module.exports=Product