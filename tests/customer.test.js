const should = require("chai").should();
const { addCustomer } = require("../controllers/customer");

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("Contact ", function() {
  it("should create a instance of Product. returns change in size of Inventory of Vendor", function(done) {
    let customerPayload = {
      customer: {
        customerID: "1023",
        customerName: "Acabhishek",
        customerAddress: "Hyderabad",
        subscriptions: []
      },
      phone: "+919876543210"
    };
    noOfCustomersAdded = addCustomer(customerPayload);
    noOfCustomersAdded[0].should.be.a("number");
    noOfCustomersAdded[0].should.equal(1);
    done();
  });
});
