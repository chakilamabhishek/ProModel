const { Createvendor } =require('../methods/vendormethods')
const { ActyvPro } = require('../model/vendormodel')
const {addingCustomerToVendor,addingSubscriptionToCustomer}=require('../methods/customerMethods')

const  should = require('chai').should()
  before(function() {
    
  });
  /**
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */
    describe('creating a Vendor', function() {
        it('should return no_of_vendors after creation', function() {     
            const payload={
              firstName:'indraneel',
              lastName:"vera",
              email:"indraneel65@gmail.com",
              phone:"+918897626060",
              contacts:[],
              invoices:[],
              BusinessTypes:[]
            }
            no_of_vendors=Createvendor(payload)
            console.log(typeof(no_of_vendors))
            // foo.should.be.a('string');

        })
  })
foo.should.be.a('string')
foo.should.equal('bar')