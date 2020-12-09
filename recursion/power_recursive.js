function power(base, exponent){
  // base case
  if(exponent === 0) return 1
  return base * power(base, exponent - 1)
}