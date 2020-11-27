function validAnagram(normalString, secondString){
  // add whatever parameters you deem necessary - good luck!
  // check if the input strings are equal
  if(normalString.length !== secondString.length) {
      return false;
  }
  // create two objects
  let firstObject = {};
  let secondObject = {};
  // loop through the normal string
  for(let val of normalString) {
    // fill firstObject with keys (letters of both strings) and values (times repeated)
    firstObject[val] = (firstObject[val] || 0) + 1;
  }
  // loop through the firstObject
  for(let val of secondString) {
    // fill secondObject with keys (letters of both strings) and values (times repeated)
    secondObject[val] = (secondObject[val] || 0) + 1;
  }
  // loop through first key
  for(let key in firstObject) {
    // check if the letter exist in the secondObject as key
    // check if the value is equal of both key objects
    if(!(key in secondObject) || firstObject[key] !== secondObject[key]) {
        return false;
    }
  }
  // return true if the second string is an anagram
  return true;
}