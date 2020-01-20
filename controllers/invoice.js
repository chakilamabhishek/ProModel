/**
 * @module invoice-controllers
 */

/**
 * @function
 * @name getPrice
 * @description To check Price of the Product
 * @param {date} day contains Day of week,
 * @param {object} productInfo Product Details.
 * @returns {number} Price of the required product
 */
getPrice = ( day, productInfo ) => {
  return productInfo.productModels[day].productModelPrice;
}

/**
 * @function
 * @name checkOnVacation
 * @description To check Vendor is on vacation or not
 * @param {object} subscriptionInfo Subscription Details
 * @param {object} index Check Date for vacation
 * @returns {boolean} True or false for vacation Status
 */
checkOnVacation = (subscriptionInfo, index) => {
  return !!subscriptionInfo.holdDate.find(date => {
    date = new Date(date);
    return date.getTime() === index.getTime();
  });
}

/**
 * @function
 * @name calculateInvoice
 * @description To calculate invoice of customer subscription
 * @param {object} payload contains Subscription Details, Product Details
 * @returns {number} Amount of Invoice generated
 */
module.exports.calculateInvoice = payload => {
  let { subscriptionInfo, productInfo } = payload
  let amount = 0;
  let startDate = new Date(subscriptionInfo.subscriptionFrom);
  let endDate = new Date(subscriptionInfo.subscriptionTo);
  for ( startDate; startDate <= endDate; ) {
    if (!checkOnVacation(subscriptionInfo, startDate)) {
        amount = +amount + +getPrice(startDate.getDay(), productInfo);
    }
    startDate.setDate(startDate.getDate() + 1);
  }
  return amount;
}

