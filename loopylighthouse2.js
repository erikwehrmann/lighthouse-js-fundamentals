const loopyLighthouse = function (range, multiples, words) {
  if (range.length === 2 && multiples.length === 2 && words.length === 2) {
    if (range [0] < range [1]) {
      for (x = range[0]; x <= range[1]; x++) {
        if (x % 2 === 0 && x % 5 === 0) {
        console.log("BattyBeacon");
      } else if (x % 2 === 0) {
        console.log('Batty');
      } else if (x % 5 === 0) {
        console.log('Beacon');
      } else {
        console.log(x);
      }
     
      }
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);