function merge(arr1, arr2) {
  const newArr = []
  let i = 0
  let j = 0
  while(i < arr1.length && j < arr2.length) {
      if(arr1[i] < arr2[j]) {
          newArr.push(arr1[i])
          i++
      } else {
          newArr.push(arr2[j])
          j++
      }
  }
  while(i < arr1.length) {
      newArr.push(arr1[i])
      i++
  }
  while(j < arr2.length) {
      newArr.push(arr2[j])
      j++
  }
  return newArr
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr
  let halfLength = Math.round((arr.length) / 2)
  
  const arr1Split = mergeSort(arr.slice(0, halfLength))
  const arr2Split = mergeSort(arr.slice(halfLength))
  return merge(arr1Split, arr2Split)
}

mergeSort([1,4,62,2, 7, 9, 100, 55])