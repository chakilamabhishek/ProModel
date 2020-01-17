/**
 * @module Businessmodel
 */

/**
 *
 *
 * @class BusinesstTypes
 */
class BusinesstTypes {
  /**
   *Creates an instance of BusinesstTypes.
   * @param {*} payload
   * @memberof BusinesstTypes
   */
  constructor(payload) {
    this.name = payload.name;
    this.businessId = payload.businessId;
    this.inventory = payload.inventory;
  }
}

module.exports.BusinesstTypes = BusinesstTypes;
