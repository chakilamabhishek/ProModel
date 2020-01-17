const { Vendor } = require("../model/vendormodel");
/**
 * @module vendorMethods
 */

/**
 * @function
 * @name registerVendor
 * @description To register Vendor
 * @param {object} vendor Vendor details to be added
 * @returns {number} Change in Size of Number of Vendor's
 *
 */

function registerVendor(vendor) {
  newVendor = new Vendor(vendor);
  let numberOfVendors = ActyvPro.length;
  ActyvPro.push(newVendor);
  return ActyvPro.length - numberOfVendors;
}

module.exports.registerVendor = registerVendor;
