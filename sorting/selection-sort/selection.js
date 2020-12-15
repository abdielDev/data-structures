function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  let small = 0
  for (let i = 0; i < arr.length - 1; i++) {
    small = i
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[small] > arr[j]) {
        small = j
      }
    }
    swap(arr, i, small)
  }
  return arr
}

selectionSort([4, 5, 6, 2, 30, 20, 10])