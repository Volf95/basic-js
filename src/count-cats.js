module.exports = function countCats(matrix) {
    let countCats = [];
    matrix.forEach(arrElem => {
      arrElem.forEach(findCats => {
        if (findCats === '^^') {
          countCats.push('We found our cat');
        }
      })
    });
    return countCats.length;
};
