

const express=require('express')
const InvoiceModel=require('../models/invoice.model')

const  InvoiceController=express.Router()


InvoiceController.get('/',(req,res)=>{
       
    res.send('this is the homepage')
})

InvoiceController.post('/post',async (req,res)=>{
      const {name,invoice,address,city,postal,country}=req.body

      const postInvoice= await InvoiceModel({name,invoice,address,city,postal,country})
        postInvoice.save()
        res.send("data posted successfully")
})

module.exports=InvoiceController