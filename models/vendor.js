/**
 * Class representing Vendor
 */
class Vendor {
    /**
     * Creates a Vendor.
     * @param {object} payload Object containing Initial values
     */
    constructor(payload) {
      /**
       * @type {number}
       */
      this.vendorID = Math.floor(Math.random() * Math.floor(100)); //only for testing
      /**
       * @type {string}
       */
      this.firstName = payload.firstName;
      /**
       * @type {string}
       */
      this.lastName = payload.lastName;
      /**
       * @type {string}
       */
      this.email = payload.email;
      /**
       * @type {string}
       */
      this.phone = payload.phone;
      /**
       * @type {Array}
       */
      this.contacts = payload.contacts;
      /**
       * @type {Array}
       */
      this.invoices = payload.invoices;
      /**
       * @type {Array}
       */
      this.business = payload.business;
    }
  }
  

  module.exports.Vendor = Vendor;
  