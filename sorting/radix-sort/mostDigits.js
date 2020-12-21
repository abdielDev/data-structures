function digitCount(num) {
  if(num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arr) {
  let maxDigits = 0
  for(let i = 0; i < arr.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(arr[i]))
  }
  return maxDigits
}

mostDigits([19, 7, 280, 1996])