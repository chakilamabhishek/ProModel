const { registerVendor } = require("../methods/vendormethods");
const {ActyvPro} =require("../model/vendormodel")
const { addingProductToInventory } = require("../methods/productmethods");
const { addBusinessType } = require("../methods/businessmethods");

const should = require("chai").should();
before(done => {
  const payload = {
    firstName: "Abhishek",
    lastName: "ch",
    email: "abhishekch65@gmail.com",
    phone: "+918897626060",
    contacts: [{
      customerId:"101",
      customerName:"Indraneel",
      customerAddress:"Adilabad",
      subscription:[{
        subscribeId: "10001",
        subscribeFrom: "Thu Jan 1 2020 05:30:30 GMT+0530 (India Standard Time)",
        subscribeTo: "Thu Jan 31 2020 05:30:30 GMT+0530 (India Standard Time)",
        vacations: [
          "Thu Jan 16 2020 05:30:30 GMT+0530 (India Standard Time)",
          "Thu Jan 23 2020 05:30:30 GMT+0530 (India Standard Time)",
          "Thu Jan 29 2020 05:30:30 GMT+0530 (India Standard Time)"
        ],
        subscribedOnWeekend: true,
        productId: "1001"
      }]
    }],
    invoices: [],
    BusinessTypes: [
    {
        name: "Newspaper",
        businessId: "News32",
        inventory: [{
          productId:"1001",
          name:"Hindu",
          description:"",
          units:"units",
          ProductModels:[
            { model: "Sunday", price: "6" },
            { model: "Monday", price: "6" },
            { model: "Tuesday", price: "6" },
            { model: "Wednesday", price: "6" },
            { model: "Thursday", price: "6" },
            { model: "Friday", price: "6" },
            { model: "Saturday", price: "6" }
          ],
          customers:[
            {
              customerId:"101",
              customerName:"Indraneel",
              customerAddress:"Adilabad",
              subscription:[{
                subscribeId: "10001",
                subscribeFrom: "Thu Jan 1 2020 05:30:30 GMT+0530 (India Standard Time)",
                subscribeTo: "Thu Jan 31 2020 05:30:30 GMT+0530 (India Standard Time)",
                vacations: [
                  "Thu Jan 16 2020 05:30:30 GMT+0530 (India Standard Time)",
                  "Thu Jan 23 2020 05:30:30 GMT+0530 (India Standard Time)",
                  "Thu Jan 29 2020 05:30:30 GMT+0530 (India Standard Time)"
                ],
                subscribedOnWeekend: true,
                productId: "1001"
              }
          ]
        }]
    }]
  }]
};
registerVendor(payload);
console.log(ActyvPro)
done();
});
/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("creating a Vendor", function(done) {
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
    done();
  });

});

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("creating a Business", function(done) {
  it("should create a instance of Business. returns  change in size of no of businesses.", function() {
    const payload = {
      phone: "+917207735192",
      businessType: {
        name: "News paper",
        businessId: "News32",
        inventory: []
      }
    };
    no_of_businesses_added = addBusinessType(payload);
    no_of_businesses_added[0].should.be.a("number");
    no_of_businesses_added[0].should.equal(1);
    done();
  });
});

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("Adding product to Inventory of Vendor", function(done) {
  it("should create a instance of Product. returns change in size of Inventory of Vendor.", function() {
    let phone = "+917207735192";
    let businessPayload = {
      name: "News paper",
      businessId: "News32",
      inventory: []
    };
    let productPayload = [
      { model: "Sunday", price: "6" },
      { model: "Monday", price: "6" },
      { model: "Tuesday", price: "6" },
      { model: "Wednesday", price: "6" },
      { model: "Thursday", price: "6" },
      { model: "Friday", price: "6" },
      { model: "Saturday", price: "6" }
    ];
    no_of_Products_added = addingProductToInventory(
      phone,
      businessPayload,
      productPayload
    ); //change in no of products
    no_of_Products_added[0].should.be.a("number");
    no_of_Products_added[0].should.equal(1);
    done();
  });
});
