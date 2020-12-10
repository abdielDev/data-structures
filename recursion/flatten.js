function flatten(array){
  // add whatever parameters you deem necessary - good luck!
  // declare an empty array
  let newArray = []
  // declare a recursive function
  function recursive(array) {
    // loop through
    array.forEach(value => {
      // check if the position is an array call the recursive function
      if(Array.isArray(value)) {
        recursive(value)
      } // else push the value in the array     
      else {
        newArray.push(value)
      }
    })
  }
  // call the function
  recursive(array)
  // return array
  return newArray
}