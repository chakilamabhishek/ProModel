/**
 * Class representing Customer
 */
class Customer {
    /**
     * Creates a Customer.
     * @param {object} payload Object containing Initial values
     */
    constructor(payload) {
      /**
       * @type {number}
       */
      this.customerID = Math.floor(Math.random() * Math.floor(100)); //only for testing
      /**
       * @type {string}
       */
      this.customerName = payload.customerName;
      /**
       * @type {string}
       */
      this.customerAddress = payload.customerAddress;
      /**
       * @type {Array}
       */
      this.subscriptions = payload.subscriptions;
    }
  }
  
  module.exports.Customer = Customer;