const should = require("chai").should();
const { addBusiness } = require("../controllers/business");
const { newPayload } = require("./sampedata");
const { registerVendor } = require("../controllers/vendor");

before(done => {
  const sampleVendor = {
    firstName: "Abhishek",
    lastName: "ch",
    email: "abhishekch65@gmail.com",
    phone: "+919876543210",
    contacts: [],
    invoices: [],
    business: []
  };
  registerVendor(sampleVendor);
  registerVendor(newPayload);
  done();
});

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("Creating a Business", function() {
  it("should create a instance of Business. returns change in size of no of businesses.", function(done) {
    const businessInfo = {
      phone: "+919876543210",
      business: {
        businessName: "Newspaper",
        businessID: "News32",
        inventory: []
      }
    };
    noOfBusinessesAdded = addBusiness(businessInfo);
    noOfBusinessesAdded[0].should.be.a("number");
    noOfBusinessesAdded[0].should.equal(1);
    done();
  });
});
