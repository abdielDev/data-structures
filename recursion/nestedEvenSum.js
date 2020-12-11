function nestedEvenSum (object) {
  // add whatever parameters you deem necessary - good luck!
  // declare a sum with zero value
  let sum = 0
  // iterate keys of object
  for(let key in object) {
    // check if the value is an object call the function with the postion of the key
    if(typeof object[key] === 'object' && object[key] !== null) {
      sum += nestedEvenSum(object[key])
    }
    // else if the value is even and a number add it to the sum   
    else if(Number.isInteger(object[key]) && object[key] % 2 === 0) {
      sum += object[key]
    }
  }
  return sum
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10