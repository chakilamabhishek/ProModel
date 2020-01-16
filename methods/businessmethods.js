const {Business}= require("../model/Businessmodel");
const {Vendor,ActyvPro,test} = require("../model/vendormodel")
function addBusinessToVendor(payload) {
  let phone=payload.phone
  
  NewspaperBusiness=new Business(payload.bussinessinfo)
  ActyvPro.push(NewspaperBusiness)
  return "Sucessfully added business"
}