const { ActyvPro } = require('../../../data/sampleDatabase');

/**
 *
 *
 * @param {*} vendor
 * @returns
 */
function saveVendor(vendor){
  let numberOfVendors = ActyvPro.length;
  ActyvPro.push(vendor);
  return ActyvPro.length-numberOfVendors
}


function updatingBusinessesOfVendor(business,phone){
  return ActyvPro.map((vendor) => {
    if(vendor.phone === phone ){
     let oldBusinessSize = vendor.business.length
     vendor.business.push(business)
     return vendor.business.length - oldBusinessSize
    }
 })
}


function updatingCustomerOfVendor(customer,phone){
  return ActyvPro.map((vendor) => {
    if(vendor.phone === phone ){
     let oldContactsSize = vendor.contacts.length
     vendor.contacts.push(customer)
     return vendor.contacts.length - oldContactsSize
    }
 })
}

function updatingInventoryOfVendor(product,phone,businessName){
  return ActyvPro.map(vendor => {
    if (vendor.phone === phone)
      if (
        (j = vendor.business.findIndex(
          requiredBusiness => requiredBusiness.businessName === businessName
        )) !== undefined
      ) {
        let oldInventorySize = vendor.business[j].inventory.length;
        vendor.business[j].inventory.push(product);
        return vendor.business[j].inventory.length - oldInventorySize;
      }
  });
}


function updatingProductOfVendor(productModel,phone, businessName, productName){
  return ActyvPro.map(vendor => {
    if (vendor.phone === phone)
      if (
        (j = vendor.business.findIndex(
          requiredBusiness => requiredBusiness.businessName === businessName
        )) >= 0
      )
        if (
          (k = vendor.business[j].inventory.findIndex(
            existingProduct => existingProduct.productName === productName
          )) >= 0
        ) {
          let oldProductModelSize =
            vendor.business[j].inventory[k].productModels.length;
          vendor.business[j].inventory[k].productModels.push(productModel);
          return (
            vendor.business[j].inventory[k].productModels.length - oldProductModelSize
          );
        }
  });
}

function  updatingSubscriptionInfoOfCustomer(subscription,phone, customerName){
  return ActyvPro.map(vendor => {
    if (vendor.phone === phone)
    { 
      if ((j = vendor.contacts.findIndex(contact => contact.customerName === customerName))>=0) {
        let oldSubscriptionSize = vendor.contacts[j].subscriptions.length;
        vendor.contacts[j].subscriptions.push(subscription);
        return vendor.contacts[j].subscriptions.length - oldSubscriptionSize;
      }
    }
  });
}

module.exports.saveVendor=saveVendor
module.exports.updatingBusinessesOfVendor=updatingBusinessesOfVendor
module.exports.updatingCustomerOfVendor=updatingCustomerOfVendor
module.exports.updatingInventoryOfVendor=updatingInventoryOfVendor
module.exports.updatingProductOfVendor=updatingProductOfVendor
module.exports.updatingSubscriptionInfoOfCustomer=updatingSubscriptionInfoOfCustomer