const { Createvendor } =require('../methods/vendormethods')
const { ActyvPro } = require('../model/vendormodel')
const {addingCustomerToVendor,addingSubscriptionToCustomer}=require('../methods/customerMethods')
Createvendor({
  firstName:'abhi',
  lastName:"shek",
  email:"abhishekch65@gmail.com",
  phone:"+918897626060",
  contacts:[],
  invoices:[],
  BusinessTypes:[]
});
addingCustomerToVendor(
  {
    phone:"+918897626060",
    customer:{
    customerId: "101",
    customerName: "SampleUser",
    customerAddress: "ABCDEFGHI",
    subscriptions: []
   }
  }
)
addingSubscriptionToCustomer(
  {
    phone:"+918897626060",
    customerName: "SampleUser",
   }
)
console.log(ActyvPro)
