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
*@param {object} BusinessTypes User's Business details
*@param {object} product Product Details to be added
*@returns {number} Change in  Size of Inventory
* 
*/
module.exports.addingProductToInventory = (phone, businesstype, product) => {
   newProduct = new Product(product);
   return ActyvPro.map((user) => {
      if(user.phone === phone)
         if ((j = user.BusinessTypes.findIndex(business => business.name === businesstype.name))!==undefined) {
            let oldInventorySize = user.BusinessTypes[j].inventory.length;
               user.BusinessTypes[j].inventory.push(newProduct)
               return user.BusinessTypes[j].inventory.length - oldInventorySize 
         }
   })

}

/**
*@function
*@name addingProductModelToProduct
*@description To add ProductModel(Type) to the Inventory's Product
*@param {number} phone User's Phone Number
*@param {object} BusinessTypes User's Business details
*@param {object} product Product Details
*@param {object} productModel productModel details to be added
*@returns {number} Changed Size of ProductModel's
* 
*/
module.exports.addingProductModelToProduct = (phone, BusinessTypes, product, productModel) => {
   newProductModel = new ProductModel(productModel);
   ActyvPro.map((user) => {
      if(user.phone === phone )
         if (j = user.BusinessTypes.findIndex(business => business.name === BusinessTypes.name))
            if(k = user.BusinessTypes[j].inventory.findIndex(existingProduct => existingProduct.name === product.name)){
               let oldProductModelSize = user.BusinessTypes[j].inventory[k].productModels.length;
               ActyvPro[i].BusinessTypes[j].inventory[k].productModels.push(newProductModel)
               return user.BusinessTypes[j].inventory[k].productModels.length - oldProductModelSize 
            }
      })
}