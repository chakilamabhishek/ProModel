/**
 * @module business-controllers
 */
const { Business } = require('../models/business')
const {savingBusinessesOfVendor}=require("./service/APIs")

/**
 * @function
 * @name createBusinessForVendor
 * @description To add Business to the Vendor
 * @param {object} payload containes User's Phone Number, Business details to be added
 * @returns {number} Changed Size of User's Business
 */
module.exports.createBusinessForVendor = payload =>  {
  let { phone, businessInfo } = payload
  business = new Business(businessInfo);
  return savingBusinessesOfVendor(business,phone)
}
