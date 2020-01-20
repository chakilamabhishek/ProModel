/**
 * Class representing Customer
 */
class Subscription {
    /**
     * Creates a Subscription.
     * @param {object} payload Object containing Initial values
     */
    constructor(payload) {
       /**
       * @type {number}
       */
      this.subscriptionID = payload.subscriptionID;
       /**
       * @type {Date}
       */
      this.subscriptionFrom = payload.subscriptionFrom;
       /**
       * @type {Date}
       */
      this.subscriptionTo = payload.subscriptionTo;
       /**
       * @type {Array}
       */
      this.holdDate = payload.holdDate;
       /**
       * @type {object}
       */
      this.product = payload.product;
    }
  }
  
  module.exports.Subscription = Subscription;
  