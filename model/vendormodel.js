/**
 * @module vendormodel
 */

/**
 *
 *
 * @class Vendor
 */
class Vendor {
  /**
   *Creates an instance of Vendor.
   * @param {*} payload
   * @memberof Vendor
   */
  constructor(payload) {
    this.firstName = payload.firstName;
    this.lastName = payload.lastName;
    this.email = payload.email;
    this.phone = payload.phone;
    this.contacts = payload.contacts;
    this.invoices = payload.invoices;
    this.BusinessTypes = payload.BusinessTypes;
  }
}

ActyvPro = [];

module.exports.ActyvPro = ActyvPro;
module.exports.Vendor = Vendor;
