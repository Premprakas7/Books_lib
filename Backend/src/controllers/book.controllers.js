const express=require("express");
const Book=require("../models/book.models");
const router=express.Router();


router.get("", async(req,res)=>{
    try {
        const book=await Book.find().lean().exec();
        return res.status(200).send(book)
    } catch (err) {
        return res.status(400).send(err)
    }
})

router.post("", async(req,res)=>{
    try {
        const book=await Book.create(req.body);
        return res.status(200).send(book)
    } catch (err) {
        return res.status(400).send(err)
    }
})

router.get("/:id", async(req,res)=>{
    try{
        const book=await Book.findById(req.params.id).lean().exec();
        return res.status(200).send({book})

    }catch(err){
        return res.status(400).send({err})
    }
})

router.put("/:id", async(req,res)=>{
    try{
        const book=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send({book})
    }catch(err){
        return res.status(400).send({err})
    }
})

router.delete("/:id", async(req,res)=>{
    try{
        const book=await Book.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({book})
    }catch(err){
        return res.status(400).send({err})
    }
})



module.exports=router;