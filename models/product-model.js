/**
 * Class representing ProductModels
 */
class ProductModel {
    /**
     * Creates a ProductModel.
     * @param {object} payload Object containing Initial values
     */
    constructor(payload) {
       /**
       * @type {string}
       */
      this.productModelName = payload.productModelName;
       /**
       * @type {number}
       */
      this.productModelPrice = payload.productModelPrice;
       /**
       * @type {number}
       */
      this.productModelGST = payload.productModelGST;
       /**
       * @type {number}
       */
      this.productModelGSTAmount = payload.productModelGSTAmount;
       /**
       * @type {number}
       */
      this.productModelSubTotal = payload.productModelSubTotal;
       /**
       * @type {number}
       */
      this.productModelDiscount = payload.productModelDiscount;
    }
  }
  
  module.exports.ProductModel = ProductModel;
  