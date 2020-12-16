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

merge([1,5,8, 12], [2,4,5,9, 10])