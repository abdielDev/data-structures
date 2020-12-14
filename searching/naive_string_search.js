function naiveStringSearch(shortString, longString) {
  let i = 0
  let j = 0
  let counter = 0
  while (i < longString.length) {
    if (longString[i + j] !== shortString[j]) {
      j = 0
      i++
    } else {
      j++
    }
    if(j === shortString.length) {
      j = 0
      counter++
      i++
    }
  }
  return counter
}

naiveStringSearch("lol", "lola wants to say lol any lrol")