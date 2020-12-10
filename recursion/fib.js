function fib(number){
  // add whatever parameters you deem necessary - good luck!  
  // built base case
  let count = 3
  function innerFib(prev, current) {
      if(number === count) {
          return prev + current
      }
      if(count < 3) return 1
      count++
      return innerFib(current, prev + current)
  }
  return innerFib(1, 1)
}
fib(10)