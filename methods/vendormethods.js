/**
 * @module vendorMethods
 */

/**
 * @function
 * @name registerVendor
 * @description To register Vendor
 * @param {object} vendor Vendor details to be added
 * @returns {number} Changed Size of Number of Vendor's
 * 
 */
module.exports.registerVendor = (vendor) => {
  newVendor = new Vendor(vendor)
  let numberOfVendors = ActyvPro.length
  ActyvPro.push(milkvendor)
  return ActyvPro.length - numberOfVendors
}


module.exports.Createvendor=Createvendor
