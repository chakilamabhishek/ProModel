/**
 *
 *
 * @param {*} day
 * @param {*} productinfo
 * @returns
 */
function getprice(day, productinfo) {
  return productinfo.ProductModel[day].price;
}
/**
 *
 *
 * @param {*} subscriptioninfo
 * @param {*} index
 * @returns
 */
function checkOnVacation(subscriptioninfo, index) {
  return !!subscriptioninfo.vacations.find(date => {
    date = new Date(date);
    return date.getTime() == index.getTime();
  });
}
/**
 *
 *
 * @param {*} subscriptioninfo
 * @param {*} productinfo
 * @returns
 */
function calculateInvoice(subscriptioninfo, productinfo) {
  let amount = 0;
  let enddate = new Date(subscriptioninfo.subscribeTo);
  let index = new Date(subscriptioninfo.subscribeFrom);
  for (index; index <= enddate; ) {
    if (!checkOnVacation(subscriptioninfo, index)) {
      if (subscriptioninfo.subscribedOnWeekend || !(index.getDay() == 0 || index.getDay() == 6)) {
        amount = +amount + (+getprice(index.getDay(), productinfo));
      }
    }
    index.setDate(index.getDate() + 1);
  }
  return amount;
}
