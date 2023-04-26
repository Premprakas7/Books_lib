const express=require("express");

const bookController=require("./controllers/book.controllers")

const app=express()
app.use(express.json());

app.use("/books", bookController)

module.exports=app;