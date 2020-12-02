function minSubArrayLen(array, number) {
  let minSub = 0
  let tempSub = 0
  // create pointers
  let j = 1
  let i = 0
  let sum = array[i]
  // loop through until is greater or equal the sub
  while(sum < number) {
      if(j === array.length) {
          return 0
      }
      // check if the positions are equal to asign sum to that position
      sum += array[j]
      if(sum >= number) {
          break;
      }
      j++
  }
  minSub = (j + 1) - i
  i++
  sum = sum - array[i - 1]
  // loop through with a while
  while(j < array.length) {
      // check if the positions are equal to asign sum to that position
      if(i === j) {
          sum = array[i]    
      }
      // check if the sum of this sub array is greater or equal than number
      if(sum >= number) {
          // calculate the length or difference between the ponters and asign it to minSub
          tempSub = (j + 1) - i
          // asign it to minSub
          minSub = Math.min(minSub, tempSub)
          // increase i
          i++
          sum = sum - array[i - 1]
      } else {
          j++
          sum = sum + array[j]
      }
      // if the sum is less than number
          // increase j
      
  }
  // output
  return minSub
}