module.exports = function countCats (matrix) {
  let counter = 0

  for (const row of matrix) {
    for (const col of row) {
      if (col === '^^') counter++
    }
  }

  return counter
}
