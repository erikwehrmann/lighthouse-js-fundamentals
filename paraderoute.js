const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function(moves) {
  const cordinates = [0, 0]
    for (let move of moves) {
      if (move === 'north') {
        cordinates[1] += 1;
      } else if (move === 'south') {
        cordinates[1] -= 1;
      } else if (move === 'east') {
        cordinates[0] += 1;
      } else if (move === 'west') {
        cordinates[0] -= 1;
      }
    } 
  console.log(cordinates);
}

finalPosition(moves);
