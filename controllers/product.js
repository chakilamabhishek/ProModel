/**
 * @module product-controllers
 */

const { Product } = require("../models/product");
const { ProductModel } = require("../models/product-model");
const {updatingInventoryOfVendor,updatingProductOfVendor}=require("../controllers/service/APIs")

/**
 * @function
 * @name addingProductToInventory
 * @description To add Product to the Vendor's Inventory
 * @param {object} payload contains User's Phone Number, User's Business details, Product Details to be added
 * @returns {number} Change in  Size of Inventory
 */
module.exports.addingProductToInventory = payload => {
  let { phone, businessName, productInfo } = payload;
  product = new Product(productInfo);
  return updatingInventoryOfVendor(product,phone,businessName)
};

/**
 * @function
 * @name addingProductModelToProduct
 * @description To add ProductModel(Type) to the Inventory's Product
 * @param {object} payload contains User's Phone Number, User's Business details, Product Details, productModel details to be added
 * @returns {number} Changed Size of ProductModel's
 */
module.exports.addingProductModelToProduct = payload => {
  let { phone, businessName, productName, productModelInfo } = payload;
  productModel = new ProductModel(productModelInfo);
  return updatingProductOfVendor(productModel,phone, businessName, productName)
};
