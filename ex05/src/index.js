var myPetsArray = [
  {
    animalType: "Dog",
    name: "Pujdo",
  },
  {
    animalType: "Cat",
    name: "Maca",
  },
  {
    animalType: "Bird",
    name: "Tweety",
  },
];
function myPetsFunction(pets) {
  var myPets = [...pets];
  return myPets[1].name;
}
console.log(myPetsFunction(myPetsArray));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;
