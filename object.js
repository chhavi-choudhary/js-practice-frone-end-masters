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