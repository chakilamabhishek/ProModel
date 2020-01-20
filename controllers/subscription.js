/**
 * @module subscription-controllers
 */
const { Subscription } = require("../models/subscription")
const {savingSubscriptionInfoOfCustomer} =require('../service/utils')

/**
 * @function
 * @name addSubscription
 * @description To add Subsription details to the Customer about Product
 * @param {object} payload contains User's Phone Number, Customer details, Subscription details to be added.
 * @returns {number} Changed Size of customer's Subscription
 */
module.exports.addingSubscriptionToVendor = payload => {
    let {phone, customerName, subscriptionInfo} = payload
    subscription = new Subscription(subscriptionInfo);
    return savingSubscriptionInfoOfCustomer(subscription,phone, customerName)
  };
  