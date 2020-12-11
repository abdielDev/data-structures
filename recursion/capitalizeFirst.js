function capitalizeFirst (stringArray) {
  // add whatever parameters you deem necessary - good luck!
  // declare empty array
  let newArray = []
  // write base case if there is a empty string return
  if(!stringArray.length) return newArray
  // get the first letter of the string at first position of the array and capitalize and concat with the rest of the string
  newArray.push(stringArray[0][0].toUpperCase() + stringArray[0].slice(1))
  // execute in the next position of the array
  newArray = newArray.concat(capitalizeFirst(stringArray.slice(1)))
  return newArray
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']