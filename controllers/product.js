/**
 * @module product-controllers
 */

const { Product } = require("../models/product");
const { ProductModel } = require("../models/product-model");
const { ActyvPro } = require("../models/vendor");

/**
 * @function
 * @name addingProductToInventory
 * @description To add Product to the Vendor's Inventory
 * @param {object} payload contains User's Phone Number, User's Business details, Product Details to be added
 * @returns {number} Change in  Size of Inventory
 */
module.exports.addingProductToInventory = payload => {
  let { phone, businessName, product } = payload;
  newProduct = new Product(product);
  return ActyvPro.map(user => {
    if (user.phone === phone)
      if (
        (j = user.business.findIndex(
          requiredBusiness => requiredBusiness.businessName === businessName
        )) !== undefined
      ) {
        let oldInventorySize = user.business[j].inventory.length;
        user.business[j].inventory.push(newProduct);
        return user.business[j].inventory.length - oldInventorySize;
      }
  });
};

/**
 * @function
 * @name addingProductModelToProduct
 * @description To add ProductModel(Type) to the Inventory's Product
 * @param {object} payload contains User's Phone Number, User's Business details, Product Details, productModel details to be added
 * @returns {number} Changed Size of ProductModel's
 */
module.exports.addingProductModelToProduct = payload => {
  let { phone, businessName, productName, productModel } = payload;
  newProductModel = new ProductModel(productModel);
  return ActyvPro.map(user => {
    if (user.phone === phone)
      if (
        (j = user.business.findIndex(
          requiredBusiness => requiredBusiness.businessName === businessName
        )) >= 0
      )
        if (
          (k = user.business[j].inventory.findIndex(
            existingProduct => existingProduct.productName === productName
          )) >= 0
        ) {
          let oldProductModelSize =
            user.business[j].inventory[k].productModels.length;
          user.business[j].inventory[k].productModels.push(newProductModel);
          return (
            user.business[j].inventory[k].productModels.length - oldProductModelSize
          );
        }
  });
};
