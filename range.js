const range = function (start, end, step) {
  const arr = [];
  if (start < end && step > 0) {
    let i = start
    while (i <= end) {
      arr.push(i);
      i = i + step;
    }
  }
  console.log(arr);
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));