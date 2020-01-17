/**
 * Class representing Product
 */
class Product {
  /**
   * Creates a Product.
   * @param {object} payload Object containing Initial values
   */
  constructor(payload) {
    /**
     * @type {number}
     */
    this.productId = payload.productId;
    /**
     * @type {string}
     */
    this.name = payload.name;
    /**
     * @type {string}
     */
    this.description = payload.description;
    
    /**
     * @type {string}
     */
    this.units = payload.units;
    /**
     * @type {Array}
     */
    this.ProductModels = payload.ProductModels;
    /**
     * @type {Array}
     */
    this.customers = payload.customers;
  }
}

module.exports.Product = Product;
