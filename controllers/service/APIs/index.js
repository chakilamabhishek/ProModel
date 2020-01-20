const { ActyvPro } = require("../../../models/vendor");

/**
 *
 *
 * @param {*} vendor
 * @returns
 */
function saveVendor(vendor){
  let numberOfVendors = ActyvPro.length;
  ActyvPro.push(vendor);
  return ActyvPro.length-numberOfVendors
}



module.exports.saveVendor=saveVendor