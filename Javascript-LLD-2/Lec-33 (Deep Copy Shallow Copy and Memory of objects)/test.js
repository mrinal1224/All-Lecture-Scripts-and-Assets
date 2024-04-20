let zoo = {
    name: "Amazing Zoo",
    location: "Melbourne, Australia",
    animals: [
      {
        species: "Lion",
        favoriteTreat: "Meat",
      },
      {
        species: "Panda",
        favoriteTreat: "Leaves",
      },
    ],
  };
  
  let shallowCopyZoo = { ...zoo };
  console.log(shallowCopyZoo) // Prints the whole copied Zoo Object
  
  shallowCopyZoo.location = 'Kerela , India'
  
  console.log(zoo)
  console.log(shallowCopyZoo)