const lastIndexOf = function (list, value) {
  let i = (list.length - 1);
  while (i >= -1) {
    if (value === list[i]) {
      return i;
    } else if (value !== list[i] && i >= 0) {
      i--
    } else if (i === -1) {
      return -1
    }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));