const { registerVendor } = require("../methods/vendormethods");
const {
  addingProductToInventory,
  addingProductModelToProduct
} = require("../methods/productmethods");
const { addBusinessType } = require("../methods/businessmethods");
const { newpayload } = require("../sampedata");
const { calculateInvoice } = require("../methods/invoicemethods");
const { addCustomer, addSubscription } = require("../methods/customerMethods");

const should = require("chai").should();

before(done => {
  const payload = {
    firstName: "Abhishek",
    lastName: "ch",
    email: "abhishekch65@gmail.com",
    phone: "+919876543210",
    contacts: [],
    invoices: [],
    BusinessTypes: []
  };
  registerVendor(payload);
  registerVendor(newpayload);
  done();
});

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("creating a Vendor", function() {
  it("should create a instance of vendor. returns  change in size of total_no_of_vendors.", function() {
    const payload = {
      firstName: "abhi",
      lastName: "shek",
      email: "abhishek@gmail.com",
      phone: "+917207735192",
      contacts: [],
      invoices: [],
      BusinessTypes: []
    };
    no_of_vendors = registerVendor(payload);
    no_of_vendors.should.be.a("number");
    no_of_vendors.should.equal(1);
  });
});

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("creating a Business", function() {
  it("should create a instance of Business. returns  change in size of no of businesses.", function() {
    const payload = {
      phone: "+919876543210",
      businessType: {
        name: "News paper",
        businessId: "News32",
        inventory: []
      }
    };
    no_of_businesses_added = addBusinessType(payload);
    no_of_businesses_added[0].should.be.a("number");
    no_of_businesses_added[0].should.equal(1);
  });
});

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("Adding product to Inventory of Vendor", function() {
  it("should create a instance of Product. returns change in size of Inventory of Vendor.", function() {
    let phone = "+919876543210";
    let businessPayload = {
      name: "News paper",
      businessId: "News32",
      inventory: []
    };
    let productPayload = {
      productId: "101",
      name: "Hindu",
      description: "This is Hindu Paper",
      units: "units",
      ProductModels: [
        { model: "Sunday", price: "6" },
        { model: "Monday", price: "6" },
        { model: "Tuesday", price: "6" },
        { model: "Wednesday", price: "6" },
        { model: "Thursday", price: "6" },
        { model: "Friday", price: "6" },
        { model: "Saturday", price: "6" }
      ],
      customer: []
    };
    no_of_Products_added = addingProductToInventory(
      phone,
      businessPayload,
      productPayload
    );
    no_of_Products_added[0].should.be.a("number");
    no_of_Products_added[0].should.equal(1);
  });
});

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("Adding productModel to Product of Vendor's Inventory", function() {
  it("should create a instance of ProductModel. returns change in size of ProductModels in PRODUCT of Vendor's Inventory.", function() {
    let phone = "+919876543210";
    let businessname = "News paper";
    let productname = "Hindu";
    let productModelPayload = { model: "Saturday", price: "6" };
    no_of_Products_added = addingProductModelToProduct(
      phone,
      businessname,
      productname,
      productModelPayload
    );
    no_of_Products_added[0].should.be.a("number");
    no_of_Products_added[0].should.equal(1);
  });
});

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("Contact ", function() {
  it("should create a instance of Product. returns change in size of Inventory of Vendor", function() {
    let Customerinfo = {
      customerId: "1023",
      customerName: "Acabhishek",
      customerAddress: "Hyderabad",
      subscriptions: []
    };
    let vendorPhone = "+919876543210";
    no_of_Customers_added = addCustomer(vendorPhone, Customerinfo);
    no_of_Customers_added[0].should.be.a("number");
    no_of_Customers_added[0].should.equal(1);
  });
});

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("Subscription ", function() {
  it("should create a instance of Subscription. returns change in size of no of subscriptions", function() {
    let subscriptoninfo = {
      subscribeId: "1023",
      subscribeFrom: "Thu Jan 1 2020 05:30:30 GMT+0530 (India Standard Time)",
      subscribeTo: "Thu Jan 31 2020 05:30:30 GMT+0530 (India Standard Time)",
      vacations: ["Thu Jan 29 2020 05:30:30 GMT+0530 (India Standard Time)"],
      subscribedOnWeekend: true,
      productId: "1001"
    };
    let customerName = "Acabhishek";
    let vendorPhone = "+919876543210";
    no_of_subscriptons_added = addSubscription(
      vendorPhone,
      customerName,
      subscriptoninfo
    );
    no_of_subscriptons_added[0].should.be.a("number");
    no_of_subscriptons_added[0].should.equal(1);
  });
});

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("Invoice ", function() {
  it("it should calculate the invoice amount when user is on some vacations", function() {
    amount = calculateInvoice(
      newpayload.contacts[0].subscription[0],
      newpayload.BusinessTypes[0].inventory[0]
    );
    amount.should.be.a("number");
    amount.should.equal(184);
  });
  it("it should calculate the invoice amount when user Subscribed whole month", function() {
    let subscriptioninfo = {
      subscribeId: "10001",
      subscribeFrom: "Thu Jan 1 2020 05:30:30 GMT+0530 (India Standard Time)",
      subscribeTo: "Thu Jan 31 2020 05:30:30 GMT+0530 (India Standard Time)",
      vacations: [],
      subscribedOnWeekend: true,
      productId: "1001"
    };
    amount = calculateInvoice(
      subscriptioninfo,
      newpayload.BusinessTypes[0].inventory[0]
    );
    amount.should.be.a("number");
    amount.should.equal(202);
  });

  it("it should calculate the invoice amount when user is on some vacations and not subscribed on weekends", function() {
    let subscriptioninfo = {
      subscribeId: "10001",
      subscribeFrom: "Thu Jan 1 2020 05:30:30 GMT+0530 (India Standard Time)",
      subscribeTo: "Thu Jan 31 2020 05:30:30 GMT+0530 (India Standard Time)",
      vacations: [
        "Thu Jan 16 2020 05:30:30 GMT+0530 (India Standard Time)",
        "Thu Jan 23 2020 05:30:30 GMT+0530 (India Standard Time)",
        "Thu Jan 29 2020 05:30:30 GMT+0530 (India Standard Time)"
      ],
      subscribedOnWeekend: false,
      productId: "1001"
    };
    amount = calculateInvoice(
      subscriptioninfo,
      newpayload.BusinessTypes[0].inventory[0]
    );
    amount.should.be.a("number");
    amount.should.equal(120);
  });

  it("it should calculate the invoice amount when user is on some vacations and subscribed on weekends", function() {
    let subscriptioninfo = {
      subscribeId: "10001",
      subscribeFrom: "Thu Jan 1 2020 05:30:30 GMT+0530 (India Standard Time)",
      subscribeTo: "Thu Jan 31 2020 05:30:30 GMT+0530 (India Standard Time)",
      vacations: [
        "Thu Jan 10 2020 05:30:30 GMT+0530 (India Standard Time)",
        "Thu Jan 14 2020 05:30:30 GMT+0530 (India Standard Time)",
        "Thu Jan 16 2020 05:30:30 GMT+0530 (India Standard Time)",
        "Thu Jan 20 2020 05:30:30 GMT+0530 (India Standard Time)",
        "Thu Jan 21 2020 05:30:30 GMT+0530 (India Standard Time)",
        "Thu Jan 22 2020 05:30:30 GMT+0530 (India Standard Time)",
        "Thu Jan 29 2020 05:30:30 GMT+0530 (India Standard Time)",
        "Thu Jan 30 2020 05:30:30 GMT+0530 (India Standard Time)"
      ],
      subscribedOnWeekend: true,
      productId: "1001"
    };
    amount = calculateInvoice(
      subscriptioninfo,
      newpayload.BusinessTypes[0].inventory[0]
    );
    amount.should.be.a("number");
    amount.should.equal(154);
  });
  it("it should calculate the invoice amount even he is not Subscribed for weekends and on vaction on weekends", function() {
    let subscriptioninfo = {
      subscribeId: "10001",
      subscribeFrom: "Thu Jan 1 2020 05:30:30 GMT+0530 (India Standard Time)",
      subscribeTo: "Thu Jan 31 2020 05:30:30 GMT+0530 (India Standard Time)",
      vacations: [
        "Thu Jan 3 2020 05:30:30 GMT+0530 (India Standard Time)",
        "Thu Jan 5 2020 05:30:30 GMT+0530 (India Standard Time)",
        "Thu Jan 12 2020 05:30:30 GMT+0530 (India Standard Time)",
        "Thu Jan 18 2020 05:30:30 GMT+0530 (India Standard Time)",
        "Thu Jan 25 2020 05:30:30 GMT+0530 (India Standard Time)"
      ],
      subscribedOnWeekend: false,
      productId: "1001"
    };
    amount = calculateInvoice(
      subscriptioninfo,
      newpayload.BusinessTypes[0].inventory[0]
    );
    amount.should.be.a("number");
    amount.should.equal(132);
  });
});
