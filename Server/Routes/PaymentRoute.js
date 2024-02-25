const express = require('express');
const {MakePayment}=require("../Controller/PaymentController.js")
const PaymentRouter = express.Router();


PaymentRouter.post("/now" , MakePayment);


module.exports={PaymentRouter}