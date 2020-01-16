/**
 * @module productMethods
 */

const { Product } = require('../model/Productmodel')
const { ProductModel } = require('../model/productmodelsmodel')

/**
 * @name addingProductToInventory
 * @description Used to Add New Product to Inventory
 * @inner
 * @example Adding "Hindu" to Newspaper
 * @function
 */
module.exports.addingProductToInventory = (payload) => {
   let { phone, businesstypes, product } = payload;
   newProduct = new Product(product);
   for (let i = 0; i < ActyvPro.length; i++)
      if (ActyvPro[i].phone === phone) {
         for (let j = 0; j < ActyvPro[i].businesstypes.length; j++)
            if (ActyvPro[i].businesstypes[j].name === businesstypes.name) {
               ActyvPro[i].businesstypes[j].inventory.push(newProduct)
               return "Product Added"
            }
      }
}

/**
 * Blend two colors together.
 * @param {string} color1 - The first color, in hexadecimal format.
 * @param {string} color2 - The second color, in hexadecimal format.
 * @return {string} The blended color.
 */
module.exports.addingProductModelToProduct = (payload) => {
   let { phone, businesstypes, product, productModel } = payload
   newProductModel = new ProductModel(productModel);
   for (let i = 0; i < ActyvPro.length; i++)
      if (ActyvPro[i].phone === phone) {
         for (let j = 0; j < ActyvPro[i].businesstypes.length; j++)
            if (ActyvPro[i].businesstypes[j].name === businesstypes.name) {
               for (let k = 0; k < ActyvPro[i].businesstypes[j].inventory.length; k++)
                  if (ActyvPro[i].businesstypes[j].inventory[k].name === product.name) {
                     ActyvPro[i].businesstypes[j].inventory[k].productModels.push(newProductModel)
                     return "Product Model Added"
                  }
            }
      }
}
module.exports.addingProductToInventory = addingProductToInventory