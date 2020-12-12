function stringifyNumbers(object) {
  let newObject = {}
  for(let key in object) {
      if(typeof object[key] === 'object' && object[key] !== null && !object[key].hasOwnProperty('length')) {
          newObject[key] = stringifyNumbers(object[key])
      }
      else if(Number.isInteger(object[key])) {
          newObject[key] = object[key].toString()
      } else {
          newObject[key] = object[key]
      }
  }
  return newObject
}

/*
let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}
/*

stringifyNumbers(obj)

/*
{
  num: "1",
  test: [],
  data: {
      val: "4",
      info: {
          isRight: true,
          random: "66"
      }
  }
}
*/