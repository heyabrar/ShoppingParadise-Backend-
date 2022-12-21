const {Router} = require("express");

const ProductsRouter = Router( );
const {ProductsModel} = require("../Models/Products.model")

ProductsRouter.get('/get',async (req,res) =>{
    try {
        const AllProducts = await ProductsModel.find( );
        res.send(AllProducts)
    } catch (error) {
        
    }
});


ProductsRouter.post('/create', async (req,res) =>{
    const {title,image,price,category,actualPrice,brand,discount} = req.body;
    console.log(title,image,price)
    try {
        const NewData = new ProductsModel({title,image,price,category,actualPrice,brand,discount});
        await NewData.save( );
        res.status(200).send({"message" : "Product Added"})
        
    } catch (error) {
        res.status(400).send({"message" : "Error In Adding Product (POST)"})
    }

})

module.exports = {
    ProductsRouter
};