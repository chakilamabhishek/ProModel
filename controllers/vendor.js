/**
 * @module vendor-controllers
 */
const { Vendor } = require("../models/vendor");
const {savingVendor}=require("../service/utils")


/**
 * @function
 * @name registerVendor
 * @description To register Vendor
 * @param { object }  payload Vendor details to be added
 * @returns {number} Change in Size of Number of Vendor's
 */

module.exports.registerVendor = payload  => {
  vendor = new Vendor(payload);
  return savingVendor(vendor);
}
