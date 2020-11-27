function sumZero(array) {
  let minPointer = 0
  let maxPointer = array.length - 1
  // loop through array
  while (array[minPointer] < array[maxPointer]) {
    const sum = array[minPointer] + array[maxPointer]
    if (sum === 0) {
      return [array[minPointer], array[maxPointer]]
    } else if (sum < 0) {
      minPointer += 1
    } else {
      maxPointer -= 1
    }
  }
}