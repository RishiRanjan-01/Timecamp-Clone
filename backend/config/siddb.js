const mongoose = require("mongoose");
require("dotenv").config();

const Invoiceconnection = mongoose.connect(process.env.INVOICE_DB);

module.exports = Invoiceconnection;
