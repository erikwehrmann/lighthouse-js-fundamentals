const judgeVegetable = function (vegetable, metric) {
  if (metric === 'redness') {
    if (vegetable[0].redness > vegetable[1].redness && vegetable[0].redness > vegetable[2].redness){
      return vegetable[0].submitter;
    } else if (vegetable[1].redness > vegetable[0].redness && vegetable[1].redness > vegetable[2].redness){
      return vegetable[1].submitter;
    } else if (vegetable[2].redness > vegetable[0].redness && vegetable[2].redness > vegetable[1].redness){
      return vegetable[2].submitter;
    }
  } else if ( metric === 'plumpness') {
    if (vegetable[0].plumpness > vegetable[1].plumpness && vegetable[0].plumpness > vegetable[2].plumpness){
      return vegetable[0].submitter;
    } else if (vegetable[1].plumpness > vegetable[0].plumpness && vegetable[1].plumpness > vegetable[2].plumpness){
      return vegetable[1].submitter;
    } else if (vegetable[2].plumpness > vegetable[0].plumpness && vegetable[2].plumpness > vegetable[1].plumpness){
      return vegetable[2].submitter;
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
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));