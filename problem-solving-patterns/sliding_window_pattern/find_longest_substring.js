function findLongestSubstring(string){
  // add whatever parameters you deem necessary - good luck!
  if(!string.length) return 0
  let len = 0
  let subObject = {}
  let end = 0
  let start = 0
  while(end < string.length) {
    let char = string[end]
    if(subObject[char]) {
      start = Math.max(start, subObject[char])
    }
    len = Math.max(len, end - start + 1)
    subObject[char] = end + 1
    end++
  }
  
  return len
}


findLongestSubstring('thecatinthehat')