/**
 * Class representing Product
 */
module.exports.Units = {
  UNITS : "UNITS",
  LITERS: "LITERS",
  KILOGRAMS:"KILOGRAMS",
  DOZEN:"DOZEN"
}
 class Product {
    /**
     * Creates a Product.
     * @param {object} payload Object containing Initial values
     */
    constructor(payload) {
     /**
       * @type {number}
       */
      this.productID = Math.floor(Math.random() * Math.floor(100)); //only for testing
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
      this.units = payload.units?payload.units:Units.UNITS;
      /**
       * @type {Array}
       */
      this.productModels = payload.productModels;
    }
  }
  
  module.exports.Product = Product;
  