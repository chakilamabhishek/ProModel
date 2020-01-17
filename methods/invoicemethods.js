/**
 * @module invoiceMethods
 */
 /**
 *@function
 *@name getprice
 *@description To check Price of the Product
 *@param {object} day Day of week
 *@param {number} productinfo product Details
 *@returns {number} Price of the required product 
 * 
 */
function getprice(day, productinfo) {
  return productinfo.ProductModels[day].price;
}
/**
 *@function
 *@name checkOnVacation
 *@description To check Vendor is on vacation or not
 *@param {object} subscriptioninfo Subscription Details
 *@param {number} index Check Date for vacation
 *@returns {boolean} True or false for vacation Status
 * 
 */
function checkOnVacation(subscriptioninfo, index) {
  return !!subscriptioninfo.vacations.find(date => {
    date = new Date(date);
    return date.getTime() === index.getTime();
  });
}
/**
 *@function
 *@name calculateInvoice
 *@description To calculate invoice of customer subscription
 *@param {object} subscriptioninfo Subscription Details
 *@param {object} productinfo Product Details
 *@returns {number} Amount of INVOICE generated
 * 
 */
function calculateInvoice(subscriptioninfo, productinfo) {
  let amount = 0;
  let index = new Date(subscriptioninfo.subscribeFrom);
  let enddate = new Date(subscriptioninfo.subscribeTo);
  for (index; index <= enddate; ) {
    if (!checkOnVacation(subscriptioninfo, index)) {
      if ( subscriptioninfo.subscribedOnWeekend || !(index.getDay() == 0 || index.getDay() == 6)) {
        amount = +amount + +getprice(index.getDay(), productinfo);
      }
    }
    index.setDate(index.getDate() + 1);
  }
  return amount;
}


module.exports.calculateInvoice=calculateInvoice
