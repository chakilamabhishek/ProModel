/**
 * @module customerMethods
 */

const { Customer } = require("../model/Customermodel");
const { Subscription } = require("../model/Subscriptionmodel");
const { ActyvPro } = require("../model/vendormodel");

/**
 *@function
 *@name addCustomer
 *@description To add Customer to the Vendor
 *@param {number} phone User's Phone Number
 *@param {object} customer Customer details to be added
 *@returns {number} Changed Size of User's Contacts
 * 
 */
module.exports.addCustomer = ( phone, customer ) => {
  newCustomer = new Customer(customer);
  return ActyvPro.map((user) => {
     if(user.phone === phone ){
      let oldContactsSize = user.contacts.length
      user.contacts.push(newCustomer)
      return user.contacts.length - oldContactsSize
     }
  })
}

/**
 *@function
 *@name addSubscription
 *@description To add Subsription details to the Customer about Product
 *@param {number} phone User's Phone Number
 *@param {object} customer Customer details
 *@param {object} subscription Subscription details to be added
 * @returns {number} Changed Size of customer's Subscription
 * 
 */
module.exports.addSubscription = (phone, customerName, subscription) => {
  newSubscription = new Subscription(subscription);
  return ActyvPro.map(user => {
    if (user.phone === phone)
    { 
      if ((j = user.contacts.findIndex(contact => contact.customerName === customerName))>=0) {
        let oldSubscriptionSize = user.contacts[j].subscriptions.length;
        user.contacts[j].subscriptions.push(newSubscription);
        return user.contacts[j].subscriptions.length - oldSubscriptionSize;
      }
    }
  });
};
