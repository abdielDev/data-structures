function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  const num1String = num1.toString()
  const num2String = num2.toString()
  // compare if the length is equal
  if(num1String.length !== num2String.length) {
      return false
  }
  let firstNumberObject = {};
  let secondNumberObject = {};
  // Transform numbers in strings
  // fill objects with key digit of number and value frequency
  for(let val of num1String.split('')) {
      firstNumberObject[val] = (firstNumberObject[val] || 0) + 1
  }
  for(let val of num2String.split('')) {
      secondNumberObject[val] = (secondNumberObject[val] || 0) + 1
  }
  // compare each property if it doesn't exist in the other object or if the value is different
  for(let key in firstNumberObject) {
      if(!(key in secondNumberObject) || firstNumberObject[key] !== secondNumberObject[key]) {
          return false
      }
  }
  // return true
  return true
}