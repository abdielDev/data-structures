function recursiveRange(number){
  function recursiveSum(start) {
      if(start === number) return number
      return start + recursiveSum(start + 1)
  }
  return recursiveSum(0)
}

recursiveRange(6)