function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
    let pivotIndex = startIndex
    let storeIndex = pivotIndex + 1
    for(let i = pivotIndex + 1; i <= endIndex; i++) {
        if(arr[i] < arr[pivotIndex]) {
          swap(arr, i, storeIndex)
          storeIndex++
        }
    }
  swap(arr, pivotIndex, storeIndex - 1)
  return storeIndex - 1
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

quickSort([3,44,38,5,47,15,-1,36,26,27,2,1,4])