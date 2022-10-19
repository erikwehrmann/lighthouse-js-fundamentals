const howManyHundreds = function (x) {
  return ((x-(x%100))/100);
}

console.log(howManyHundreds(450));