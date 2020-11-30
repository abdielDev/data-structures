function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  let frequencyCounterObject = {}
  for(let val of args) {
      frequencyCounterObject[val] = (frequencyCounterObject[val] || 0) + 1
      if(frequencyCounterObject[val] > 1) {
          return true
      }
  }
  return false
}

// linear solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}