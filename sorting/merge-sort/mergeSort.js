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
  
  const arr1 = arr.slice(0, halfLength)
  const arr2 = arr.slice(halfLength, arr.length)
  console.log(arr1, arr2)
  const arr1Splited = mergeSort(arr1)
  const arr2Splited = mergeSort(arr2)
  return merge(arr1Splited, arr2Splited)
}

mergeSort([1,4,62,2, 7, 9, 100, 55])