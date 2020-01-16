class ProductModels {
  constructor(payload){
      this.model = payload.model
      this.price = payload.price
      // this.features = payload.features
      // this.description = payload.description
      // this.expiry = payload.expiry
      // this.discountType = payload.discountType
      this.gst = payload.gst
      this.gstAmount = payload.gstAmount
      this.subTotal = payload.subTotal
      this.discount = payload.discount
  }
} 


module.exports.ProductModels=ProductModels