function capitalizeWords (wordsArray) {
  // add whatever parameters you deem necessary - good luck!
  // declare an empty array
  let newArray = []
  if(!wordsArray.length) return newArray
  // capitalize first position and push it in the new array
  newArray.push(wordsArray[0].toUpperCase())
  // concat new array with the call of capitalizeWords splice of wordsArray
  newArray = newArray.concat(capitalizeWords(wordsArray.slice(1)))
  return newArray
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']