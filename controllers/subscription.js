/**
 * @module subscription-controllers
 */
const { Subscription } = require("../models/subscription")

/**
 * @function
 * @name addSubscription
 * @description To add Subsription details to the Customer about Product
 * @param {object} payload contains User's Phone Number, Customer details, Subscription details to be added.
 * @returns {number} Changed Size of customer's Subscription
 */
module.exports.addSubscription = payload => {
    let {phone, customerName, subscription} = payload
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
  