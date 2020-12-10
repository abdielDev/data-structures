function reverse(string){
  // add whatever parameters you deem necessary - good luck
  let resultString = ''
  function helper(position) {
      if(position < 0) return
      resultString = resultString + string[position]
      helper(position - 1)
  }
  helper(string.length - 1)
  return resultString
}