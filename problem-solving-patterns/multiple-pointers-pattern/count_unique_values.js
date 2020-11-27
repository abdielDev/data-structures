function countUniqueValues(array) {
  // declare a pointer to know where is the counting
  let pointer = 0
  // declare a sum of unique values
  let sum = 0
  // loop though the array
  while(pointer < array.length) {
    // compare the value at pointer with next value if they are different
    if (array[pointer] !== array[pointer + 1]) {
      // add 1 to sumOfUniqueValues
      sum++
    // compare the value at pointer with next value if they are equal
    }
    pointer += 1
  }
  // return sumOfUniqueValues
  return sum
}

countUniqueValues([1,1,1,2,3,4,4,5,6,6])