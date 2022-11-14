const judgeVegetable = function (vegetable, metric) {
  if (metric === 'redness'){
    let x = 0
    for (let i = 0; i < vegetable.length; i++) {
      if (vegetable[i].redness > x) {
        x = vegetable[i].redness;
      }
    }
    if (vegetable[0].redness === x){
      let winner = vegetable[0].submitter;
      return winner;
    } else if (vegetable[1].redness === x){
      let winner = vegetable[1].submitter;
      return winner;
    } else if (vegetable[2].redness === x){
      let winner = vegetable[2].submitter;
      return winner;
    }
  }
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 1,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));