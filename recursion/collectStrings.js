function collectStrings(object) {
  let arrayString = []
  for(let key in object) {
      if(typeof object[key] === 'object' && object[key] !== null && !object[key].hasOwnProperty('length')) {
          arrayString = arrayString.concat(collectStrings(object[key]))
      } else {
          arrayString.push(object[key])
      }
  }
  return arrayString
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

collectStrings(obj) // ["foo", "bar", "baz"])