/**
 * @module customer-controllers
 */
const { Customer } = require("../models/customer")
const { ActyvPro } = require("../models/vendor")

/**
 * @function
 * @name addCustomer
 * @description To add Customer to the Vendor
 * @param {object} payload contains User's Phone Number and Customer details to be added
 * @returns {number} Changed Size of User's Contacts
 */
module.exports.addCustomer = payload => {
  let { phone, customer } = payload
  newCustomer = new Customer(customer);
  return ActyvPro.map((user) => {
     if(user.phone === phone ){
      let oldContactsSize = user.contacts.length
      user.contacts.push(newCustomer)
      return user.contacts.length - oldContactsSize
     }
  })
}

