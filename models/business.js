/**
 * Class representing Business
 */
class Business {
    /**
     * Create a Business.
     * @param {object} payload Object containing Initial values
     * 
     */
    constructor(payload) {
      /**
       * @type {number}
       */
      this.businessID = Math.floor(Math.random() * Math.floor(100)); //only for testing
      /**
       * @type {string}
       */
      this.businessName = payload.businessName;
      /**
       * @type {Array}
       */
      this.inventory = payload.inventory;
    }
  }
  
  module.exports.Business = Business;
  