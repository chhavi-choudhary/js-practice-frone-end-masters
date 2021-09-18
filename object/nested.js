let nestedObject = {
    id: 28802695164,
    date: 'December 31, 2016',
    data: {
      totalUsers: 99,
      online: 80,
      onlineStatus: {
        active: 67,
        away: 13,
        busy: 8
      }
    }
  };
  nestedObject.data.onlineStatus.busy = 10;
  console.log(nestedObject)


  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  function checkInventory(scannedItem) {
  return foods[scannedItem]
  }
  console.log(checkInventory("apples"));
  delete foods.apples;
  console.log(foods)

  for (let user in users) {
    console.log(user);
  }

  //Generate an Array of All Object Keys with Object.keys()
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
  return Object.keys(obj);
  }
  
  console.log(getArrayOfUsers(users));