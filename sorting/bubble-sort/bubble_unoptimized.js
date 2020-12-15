// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){
  let noSwap
  for(var i = arr.length; i > 0; i--){
    noSwap = true
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwap = false
      }
    }
    if(noSwap) break;
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let noSwap
  for (let i = arr.length; i > 0; i--) {
    noSwap = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false
      }
    }
    if(noSwap) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);