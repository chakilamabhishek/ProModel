/**
 * @module vendor-controllers
 */
const { Vendor } = require("../models/vendor");

/**
 * @function
 * @name registerVendor
 * @description To register Vendor
 * @param { object }  payload Vendor details to be added
 * @returns {number} Change in Size of Number of Vendor's
 */

module.exports.registerVendor = payload  => {
  newVendor = new Vendor(payload);
  let numberOfVendors = ActyvPro.length;
  ActyvPro.push(newVendor);
  return ActyvPro.length - numberOfVendors;
}
