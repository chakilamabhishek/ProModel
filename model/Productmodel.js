class Product{
  constructor(payload){
      this.productId = payload.productId
      this.name = payload.name
      this.description = payload.description
      this.units =payload.units
      this.ProductModels = payload.ProductModels
      this.customers = payload.customers
  }
}

module.exports.Product=Product