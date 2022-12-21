const express = require("express");
const app = express( );

const {connection} = require("./config/db");
const {ProductsRouter} = require("./Routes/Products.Routes");

app.use(express.json( ));
app.use('/products', ProductsRouter)

app.listen(8080,async ( ) =>{
    try {
        await connection;
        console.log({"message" : "Connected To paradise DataBase"})
    } catch (error) {
        console.log(error);
        console.log({"message" : "Failed in Connecting to paradise DataBase"})
    }
   
})