/**
 * @module business-controllers
 */
const { ActyvPro } = require("../models/vendor");
const { Business } = require('../models/business')

/**
 * @function
 * @name addBusiness
 * @description To add Business to the Vendor
 * @param {object} payload containes User's Phone Number, Business details to be added
 * @returns {number} Changed Size of User's Business
 */
module.exports.addBusiness = payload =>  {
  let { phone, business } = payload
  newBusiness = new Business(business);
  return ActyvPro.map((user) => {
     if(user.phone === phone ){
      let oldBusinessSize = user.business.length
      user.business.push(newBusiness)
      return user.business.length - oldBusinessSize
     }
  })
}
