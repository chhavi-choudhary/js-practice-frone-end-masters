var dogs = {
    Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
  };
  var myDog = "Hunter";
  var myBreed = dogs[myDog];
  console.log(myBreed);

  var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  ourDog.name="Happy Camper"
  console.log(ourDog);

  var yourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  yourDog["bark"]="bho bhoo"
  yourDog.bark1="woof woof"
  console.log(yourDog)

  var ourDog1 = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
  };
  delete ourDog1.legs;
  console.log(ourDog1);




  function phoneticLookup(val) {
    var result = "";
    var lookup= {
      "alpha":"Adams",
      "bravo":"Boston",
      "charlie":"Chicago",
      "delta":"Denver",
      "echo":"Easy",
     "foxtrot":"Frank"
    }
  return lookup[val]
    // Only change code above this line
    return result;
  }
  console.log(phoneticLookup("charlie"));
