function getDigit(num, place) {
  // my solution
  // const string = num.toString()
  // return Number.parseInt(string[(string.length - 1) - place])
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

getDigit(1992, 3)