const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  invoice: { type: String },
  address: { type: String ,required:true },
  city:{type:String, required:true},
  postal:{type:Number,required:true},
  country:{type:String,required:true}
});

const InvoiceModel = mongoose.model("invoice", InvoiceSchema);

module.exports = InvoiceModel;
