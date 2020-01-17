/**
 * @module productMethods
 */

const { Product } = require('../model/Productmodel')
const { ProductModel } = require('../model/productmodelsmodel')
const { ActyvPro } = require("../model/vendormodel");

/**
*@function
*@name addingProductToInventory
*@description To add Product to the Vendor's Inventory
*@param {number} phone User's Phone Number
*@param {object} businesstypes User's Business details
*@param {object} product Product Details to be added
*@returns {number} Change in  Size of Inventory
* 
*/
module.exports.addingProductToInventory = (phone, businesstypes, product) => {
   newProduct = new Product(product);
   ActyvPro.map((user) => {
      if(user.phone === phone)
         if (j = user.businesstypes.findIndex(business => business.name === businesstypes.name)) {
            let oldInventorySize = user.businesstypes[j].inventory.length;
               ActyvPro[i].businesstypes[j].inventory.push(newProduct)
               return user.businesstypes[j].inventory.length - oldInventorySize 
         }
   })
}

/**
*@function
*@name addingProductModelToProduct
*@description To add ProductModel(Type) to the Inventory's Product
*@param {number} phone User's Phone Number
*@param {object} businesstypes User's Business details
*@param {object} product Product Details
*@param {object} productModel productModel details to be added
*@returns {number} Changed Size of ProductModel's
* 
*/
module.exports.addingProductModelToProduct = (phone, businesstypes, product, productModel) => {
   newProductModel = new ProductModel(productModel);
   ActyvPro.map((user) => {
      if(user.phone === phone )
         if (j = user.businesstypes.findIndex(business => business.name === businesstypes.name))
            if(k = user.businesstypes[j].inventory.findIndex(existingProduct => existingProduct.name === product.name)){
               let oldProductModelSize = user.businesstypes[j].inventory[k].productModels.length;
               ActyvPro[i].businesstypes[j].inventory[k].productModels.push(newProductModel)
               return user.businesstypes[j].inventory[k].productModels.length - oldProductModelSize 
            }
      })
}