/**
 * @module businessMethods
 */
const { ActyvPro } = require("../model/vendormodel");
const { BusinesstTypes } = require('../model/Businessmodel')

/**
 * @function
 * @name addBusinessType
 * @description To add Business Type to the Vendor
 * @param {number} phone User's Phone Number
 * @param {object} businessType BusinessType details to be added
 * @returns {number} Changed Size of User's BusinessTypes
 * 
 */
module.exports.addBusinessType = ( {phone, businessType })=>  {
  newBusinessType = new BusinesstTypes(businessType);
  return ActyvPro.map((user) => {
     if(user.phone === phone ){
      let oldBusinessTypesSize = user.BusinessTypes.length
      user.BusinessTypes.push(newBusinessType)
      return user.BusinessTypes.length - oldBusinessTypesSize
     }
  })
}

