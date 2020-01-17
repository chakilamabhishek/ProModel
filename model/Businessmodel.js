
/**
 * Class representing BusinessTypes
 */
class BusinesstTypes {
  /**
   * Create a BusinesstType.
   * @param {object} payload Object containing Initial values
   * 
   */
  constructor(payload) {
    /**
     * @type {string}
     */
    this.name = payload.name;
    /**
     * @type {number}
     */
    this.businessId = payload.businessId;
    /**
     * @type {Array}
     */
    this.inventory = payload.inventory;
  }
}

module.exports.BusinesstTypes = BusinesstTypes;
