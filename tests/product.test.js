const should = require("chai").should();
const { newPayload } = require("./sampleData");
const { addingProductToInventory } = require("../controllers/product");

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("Adding product to Inventory of Vendor", function() {
  it("should create a instance of Product. returns change in size of Inventory of Vendor.", function(done) {
    let productPayload = {
      phone: "+919876543210",
      businessName: "Newspaper",
      productInfo: {
        productID: "101",
        productName: "Hindu",
        description: "This is Hindu Paper",
        units: "units",
        productModels: []
      }
    };
    noOfProductsAdded = addingProductToInventory(productPayload).filter(
      Boolean
    );
    noOfProductsAdded[0].should.be.a("number");
    noOfProductsAdded[0].should.equal(1);
    done();
  });
});
