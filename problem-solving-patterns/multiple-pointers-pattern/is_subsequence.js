function isSubsequence(subString, fullString) {
  // good luck. Add any arguments you deem necessary.
  let i = 0
  for(let j = 0; j < fullString.length; j++) {
      if(subString[i] === fullString[j]) {
          i++
          if(i === subString.length) {
              return true
          }
      }
  }
  return false
}