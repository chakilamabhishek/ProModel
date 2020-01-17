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
    this.subscribeId = payload.subscribeId;
     /**
     * @type {Date}
     */
    this.subscribeFrom = payload.subscribeFrom;
     /**
     * @type {Date}
     */
    this.subscribeTo = payload.subscribeTo;
     /**
     * @type {Array}
     */
    this.vacations = payload.vacations;
     /**
     * @type {number}
     */
    this.ProductId = payload.ProductId;
     /**
     * @type {boolean}
     */
    this.subscribedOnWeekend = payload.subscribedOnWeekend;
  }
}

module.exports.Subscription = Subscription;
