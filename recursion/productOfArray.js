function productOfArray(arrayNumber) {
  if(!arrayNumber.length) return 1
  return arrayNumber[0] * productOfArray(arrayNumber.slice(1))
}