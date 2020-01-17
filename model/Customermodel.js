/**
 * @module Customermodel
 */

/**
 *
 *
 * @export
 * @class Customer
 */
class Customer {
  /**
   *Creates an instance of Customer.
   * @param {*} payload
   * @memberof Customer
   */
  constructor(payload) {
    this.customerId = payload.customerId;
    this.customerName = payload.customerName;
    this.customerAddress = payload.customerAddress;
    this.subscriptions = payload.subscriptions;
  }
  get _customerId() {
    return this.customerId;
  }
  get _customerName() {
    return this.customerName;
  }
  get _customerAddress() {
    return this.customerAddress;
  }
  get _subsriptions() {
    return this.subscriptions;
  }
  set _customerId(payload) {
    this.customerId = payload;
  }
  set _customerName(payload) {
    this.customerName = payload;
  }
  set _customerAddress(payload) {
    this.customerAddress = payload;
  }
  set _subsriptions(payload) {
    this.subscriptions = payload;
  }
}

module.exports.Customer = Customer;