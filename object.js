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


// switch case to lookups

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
  return result=lookup[val]
   
}
  console.log(phoneticLookup("charlie"),phoneticLookup("bravo"));

  
  
  var obj={
    gift: "pony", 
    pet: "kitten", 
    bed: "sleigh",
    city: "Seattle"
    }
    
function checkObj(obj, checkProp) {
   if(obj.hasOwnProperty(checkProp)){
     return obj[checkProp];
   }
   else{
     return "Not Found";
   }
}

console.log(checkObj("pet"))
console.log(checkObj("city"))

var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
