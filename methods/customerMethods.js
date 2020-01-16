const Customer  = require('../models/customerModel')
const Subscription = require('../')
const { ActyvPro } = require('../model/vendormodel')

module.exports.addCustomer = (payload) =>{
   let { phone, customer } = payload
   newCustomer = new Customer(customer)
   for(let i = 0; i <ActyvPro.length ;i++ )
      if(ActyvPro[i].phone === phone) {
         ActyvPro[i].contacts.push(newCustomer)
      }
   return "Contact added"
}

module.exports.addSubscription = (payload) =>{
   let { phone, customer, subscription } = payload
   newSubscription = new Subscription(payload)
   for(let i = 0; i <ActyvPro.length ;i++ )
      if(ActyvPro[i].phone === phone) {
         for(let j = 0 ; j < ActyvPro[i].contacts.length ;j++)
            if(ActyvPro[i].contacts[j].name === customer.name){
               ActyvPro[i].contacts[j].subscriptions.push(newSubscription)
            }
      }
   return "Subscription Added"
}



 addCustomer({
  customerId: "101",
  customerName: "SampleUser",
  customerAddress: "ABCDEFGHI",
  subscriptions: 
 })