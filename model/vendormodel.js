/**
 * Class representing Customer
 */
class Vendor {
  /**
   * Creates a Vendor.
   * @param {object} payload Object containing Initial values
   */
  constructor(payload) {
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
     * @type {string}
     */
    this.contacts = payload.contacts;
    /**
     * @type {number}
     */
    this.invoices = payload.invoices;
    /**
     * @type {Array}
     */
    this.BusinessTypes = payload.BusinessTypes;
  }
}

ActyvPro = [];

module.exports.ActyvPro = ActyvPro;
module.exports.Vendor = Vendor;
