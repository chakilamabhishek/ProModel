const model = [
    {
      id :"123",
      name: "abhi",
      phone: "+918897626060",
      contacts: [],
      BusinessTypes: [
        {
          name: "News Paper",
          BusinessId: "Newspaper1",
          inventory: []
        }
      ]
    }
  ];

  function createVendor(payload){
    try {
        db.push(payload);
        return "Vendor Added"    
    } catch (error) {
        return error;
    }  
  }

  function addBussiness(payload){
    try {
        for (let i = 0; i <db.length;i++)
            if( db[i].id === payload.id){
                db[i].BusinessTypes.push(payload.BusinessTypes)
            }
            
    } catch (error) {
        return error
    }
  }

  function addCustomer(payload) {
    db[0].contacts.push(payload);
    return "Customer Added";
  }

  function addInventory() {
    let payload = {
      productId: "News767",
      name: "Hindu",
      ProductModel: [
        {
          model: "Sunday",
          price: "6"
        },
        {
          model: "Monday",
          price: "6"
        },
        {
          model: "Tuesday",
          price: "6"
        },
        {
          model: "Wednesday",
          price: "6"
        },
        {
          model: "Thursday",
          price: "6"
        },
        {
          model: "Friday",
          price: "6"
        },
        {
          model: "Saturday",
          price: "6"
        }
      ]
    };
    db[0].BusinessTypes[0].inventory.push(payload);
  }
  function getprice(day, productinfo) {
    return productinfo.ProductModel[day].price;
  }
  function checkOnVacation(subscriptioninfo, index) {
    return !!subscriptioninfo.vacations.find(date => {
      date = new Date(date);
      return date.getTime() == index.getTime();
    });
  }
  function calculateInvoice(subscriptioninfo, productinfo) {
    let amount = 0;
    let enddate = new Date(subscriptioninfo.subscribeTo);
    let index = new Date(subscriptioninfo.subscribeFrom);
    for (index; index <= enddate; ) {
      if (!checkOnVacation(subscriptioninfo, index)) {
        if (subscriptioninfo.subscribedOnWeekend || !(index.getDay() == 0 || index.getDay() == 6)) {
          amount = +amount + (+getprice(index.getDay(), productinfo));
        }
      }
      index.setDate(index.getDate() + 1);
    }
    return amount;
  }
  


  function mainUser(){
    let payload = {
        name: "customer1",
        phone: "9567876543",
        subscribedIds: [
          {
            subscribeId: "New234",
            subscribeFrom: "Thu Jan 1 2020 05:30:30 GMT+0530 (India Standard Time)",
            subscribeTo: "Thu Jan 31 2020 05:30:30 GMT+0530 (India Standard Time)",
            vacations: [
              "Thu Jan 16 2020 05:30:30 GMT+0530 (India Standard Time)",
              "Thu Jan 23 2020 05:30:30 GMT+0530 (India Standard Time)",
              "Thu Jan 29 2020 05:30:30 GMT+0530 (India Standard Time)"
            ],
            subscribedOnWeekend: true,
            paymentStatus:false,
            productId: "News767"
          }
        ]
      };
      console.log(addCustomer(payload))
  }
  addInventory();
  console.log(calculateInvoice(db[0].contacts[0].subscribedIds[0],db[0].BusinessTypes[0].inventory[0]));
  
  