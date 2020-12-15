
// my version
function insertionSort(arr){
	let currentVal;
	let insertionPosition;
	let reassign
    for(let i = 1; i < arr.length; i++){
        reassign = false
        currentVal = arr[i];
        for(let j = i - 1; j >= 0; j--) {
            if(arr[j] > currentVal) {
                arr[j+1] = arr[j]
                insertionPosition = j
                reassign = true
            } else {
                break;
            }
        }
        if(reassign) {
            arr[insertionPosition] = currentVal;
        }
    }
    return arr;
}

insertionSort([21,2,1,9,76,4, 0])

// colt's version
function insertionSort(arr){
	let currentVal;
    for(let i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(let j = i - 1; j >= 0; j--) {
            arr[j+1] = arr[j]
            if(arr[j] < currentVal) {
                arr[j] = currentVal;
            }
        }
    }
    return arr;
}

insertionSort([2,1,9,76,4])