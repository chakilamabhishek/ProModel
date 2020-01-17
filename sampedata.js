const newpayload = {
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
          { model: "Sunday", price: "8" },
          { model: "Monday", price: "6" },
          { model: "Tuesday", price: "6" },
          { model: "Wednesday", price: "6" },
          { model: "Thursday", price: "6" },
          { model: "Friday", price: "6" },
          { model: "Saturday", price: "8" }
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
}
module.exports.newpayload=newpayload