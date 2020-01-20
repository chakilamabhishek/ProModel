const should = require("chai").should();
const { newPayload } = require("./sampedata");
const { addSubscription } = require("../controllers/subscription");
/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("Subscription ", function() {
  it("should create a instance of Product. returns change in size of Inventory of Vendor", function(done) {
    let subscriptionPayload = {
      subscription: {
        subscriptionID: "1023",
        subscriptionFrom:
          "Thu Jan 1 2020 05:30:30 GMT+0530 (India Standard Time)",
        subscriptionTo:
          "Thu Jan 31 2020 05:30:30 GMT+0530 (India Standard Time)",
        holdDate: ["Thu Jan 29 2020 05:30:30 GMT+0530 (India Standard Time)"]
      },
      customerName: "Acabhishek",
      phone: "+919876543210"
    };
    noOfSubscriptonsAdded = addSubscription(subscriptionPayload);
    noOfSubscriptonsAdded[0].should.be.a("number");
    noOfSubscriptonsAdded[0].should.equal(1);
    done();
  });
});
