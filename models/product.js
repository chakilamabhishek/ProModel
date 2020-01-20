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
      this.productID = payload.productID;
      /**
       * @type {string}
       */
      this.productName = payload.productName;
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
      this.productModels = payload.productModels;
    }
  }
  
  module.exports.Product = Product;
  