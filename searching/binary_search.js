function binarySearch(sortedArray, value){
  // add whatever parameters you deem necessary - good luck!
  let left = 0
  let right = sortedArray.length - 1
  while(left <= right) {
      let middle = Math.floor(left + (right - left) / 2)
      if(sortedArray[middle] === value) return middle
      if(sortedArray[middle] < value) {
          left = middle + 1
      }
      if(sortedArray[middle] > value) {
          right = middle - 1
      }
  }
  return -1
}

var array = [10, 15, 20, 25, 30, 32, 34]

binarySearch(array, 20)