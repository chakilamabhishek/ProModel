const { Customer } = require("../model/Customermodel");
const { Subscription } = require("../model/Subscriptionmodel");
const { ActyvPro } = require("../model/vendormodel");
/**
 *
 *
 * @param {*} payload
 * @returns
 */
function addingCustomerToVendor(payload) {
  let { phone, customer } = payload;
  newCustomer = new Customer(customer);
  for (let i = 0; i < ActyvPro.length; i++)
    if (ActyvPro[i].phone === phone) {
      ActyvPro[i].contacts.push(newCustomer);
    }
  return "Contact added";
}

/**
 *
 *
 * @param {*} payload
 * @returns
 */
function addingSubscriptionToCustomer(payload) {
  let { phone, customer, subscription } = payload;
  newSubscription = new Subscription(payload);
  for (let i = 0; i < ActyvPro.length; i++)
    if (ActyvPro[i].phone === phone) {
      for (let j = 0; j < ActyvPro[i].contacts.length; j++)
        if (ActyvPro[i].contacts[j].customerName === customer.customerName) {
          ActyvPro[i].contacts[j].subscriptions.push(newSubscription);
        }
    }
  return "Subscription Added";
}

module.exports.addingCustomerToVendor = addingCustomerToVendor;
module.exports.addingSubscriptionToCustomer = addingSubscriptionToCustomer;
