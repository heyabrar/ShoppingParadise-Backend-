const mongoose = require("mongoose");
const ProductsSchema = mongoose.Schema({
    title : String,
    image : String,
    price : String,
    category : String,
    brand : String,
    actualPrice : String,
    discount : String
 });

const ProductsModel = mongoose.model("product", ProductsSchema);

module.exports = {
    ProductsModel
};
