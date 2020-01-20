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
       * @type {string}
       */
      this.businessName = payload.businessName;
      /**
       * @type {number}
       */
      this.businessID = payload.businessID;
      /**
       * @type {Array}
       */
      this.inventory = payload.inventory;
    }
  }
  
  module.exports.Business = Business;
  