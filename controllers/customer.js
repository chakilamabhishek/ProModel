/**
 * @module customer-controllers
 */
const { Customer } = require("../models/customer")
const { ActyvPro } = require("../data/sampleDatabase");
const { updatingCustomerOfVendor }=require("./service/APIs")
/**
 * @function
 * @name addCustomer
 * @description To add Customer to the Vendor
 * @param {object} payload contains User's Phone Number and Customer details to be added
 * @returns {number} Changed Size of User's Contacts
 */
module.exports.addingCustomerToVendor = payload => {
  let { phone, customerInfo } = payload
  customer = new Customer(customerInfo);
  return updatingCustomerOfVendor(customer,phone);
}

