
const {Vendor,ActyvPro,test} = require("../model/vendormodel")

/**
 *
 *@function
 * @param {*} payload
 * @returns
 * @example
 */
function Createvendor(payload) {
  milkvendor=new Vendor(payload)
  ActyvPro.push(milkvendor)
  return "addedcustomer"
}



//  console.log(Createvendor({
//   firstName:'abhi',
//   lastName:"shek",
//   email:"abhishekch65@gmail.com",
//   phone:"+918897626060",
//   contacts:[],
//   invoices:[],
//   BusinessTypes:[]
// })
// )

// test();


module.exports.Createvendor=Createvendor


// let payload = {
//   name: "customer1",
//   phone: "9567876543",
//   subscribedIds: [
//     {
//       subscribeId: "New234",
//       subscribeFrom: "Thu Jan 1 2020 05:30:30 GMT+0530 (India Standard Time)",
//       subscribeTo: "Thu Jan 31 2020 05:30:30 GMT+0530 (India Standard Time)",
//       vacations: [
//         "Thu Jan 16 2020 05:30:30 GMT+0530 (India Standard Time)",
//         "Thu Jan 23 2020 05:30:30 GMT+0530 (India Standard Time)",
//         "Thu Jan 29 2020 05:30:30 GMT+0530 (India Standard Time)"
//       ],
//       subscribedOnWeekend: true,
//       productId: "News767"
//     }
//   ]
// }