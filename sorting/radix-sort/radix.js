function getDigit(num, place) {
  const string = num.toString()
  return Number.parseInt(string[(string.length - 1) - place])
}

getDigit(1992, 3)