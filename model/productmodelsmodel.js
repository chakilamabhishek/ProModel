/**
 * Class representing ProductModels
 */
class ProductModels {
  /**
   * Creates a ProductModels.
   * @param {object} payload Object containing Initial values
   */
  constructor(payload) {
     /**
     * @type {string}
     */
    this.model = payload.model;
     /**
     * @type {number}
     */
    this.price = payload.price;
    // this.features = payload.features
    // this.description = payload.description
    // this.expiry = payload.expiry
    // this.discountType = payload.discountType
    // this.gst = payload.gst;
    // this.gstAmount = payload.gstAmount;
    // this.subTotal = payload.subTotal;
    // this.discount = payload.discount;
     /**
     * @type {number}
     */
    this.gst = payload.gst;
     /**
     * @type {number}
     */
    this.gstAmount = payload.gstAmount;
     /**
     * @type {number}
     */
    this.subTotal = payload.subTotal;
     /**
     * @type {number}
     */
    this.discount = payload.discount;
  }
}

module.exports.ProductModels = ProductModels;
