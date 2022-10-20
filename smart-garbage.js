const smartGarbage = function (trash, bins) {
  const binsValues = bins

  if (trash === 'waste') {
    binsValues.waste = binsValues.waste + 1;
  } else if (trash === 'recycling') {
    binsValues.recycling = binsValues.recycling + 1;
  } else if (trash === 'compost') {
    binsValues.compost = binsValues.compost + 1;
  }
  return binsValues;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));