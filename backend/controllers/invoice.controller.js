

const express=require('express')
const InvoiceModel=require('../models/invoice.model')

const  InvoiceController=express.Router()
    InvoiceController.use(express.json())
    

InvoiceController.get('/',async(req,res)=>{
       
    let invoiceData=await InvoiceModel.find()
    res.send(invoiceData)
})

InvoiceController.post('/post',async (req,res)=>{
      const {name,invoice,address,city,postal,country}=req.body
          
           
      const postInvoice= await InvoiceModel({name,invoice,address,city,postal,country})
        postInvoice.save()
        res.send("data posted successfully")
})

module.exports=InvoiceController