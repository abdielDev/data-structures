function averagePair(array, average){
  // add whatever parameters you deem necessary - good luck!
  // if the array is empty return false
  if(!array.length) {
      return false
  }
  // create pointers
  let i = 0;
  let j = array.length -1
  while(j !== i) {
      const averagePair = (array[i] + array[j]) / 2
      if(averagePair === average) {
        return true
      }
      if(averagePair < average) {
        i++
      }
      if(averagePair > average) {
        j--
      }
  }
  return false
}