export function createEmptyGrid(worldWidth, worldHeight) {
  let grid = []
  for (let row = 0; row < worldHeight; row++) {
    grid.push([])
    for (let col = 0; col < worldWidth; col++) {
      grid[row][col] = false
    }
  }
  return grid
}

export function generateNext(previous) {
  let next = createEmptyGrid(previous[0].length, previous.length)
  for (let row = 0; row < previous.length; row++) {
    for (let col = 0; col < previous[row].length; col++) {
      const neighbourCount = countNeighbours(row, col, previous)
      //Any live cell with fewer than two live neighbours dies, as if by underpopulation.
      if (neighbourCount < 2 && previous[row][col] === true) {
        next[row][col] = false
        //Any live cell with two or three live neighbours lives on to the next generation.
      } else if (
        (neighbourCount === 2 || neighbourCount === 3) &&
        previous[row][col] === true
      ) {
        next[row][col] = true
        //Any live cell with more than three live neighbours dies, as if by overpopulation.
      } else if (neighbourCount > 3 && previous[row][col] === true) {
        next[row][col] = false
        //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.r
      } else if (neighbourCount === 3 && previous[row][col] === false) {
        next[row][col] = true
      }
    }
  }
  return next
}

function countNeighbours(row, col, previous) {
  let neighbourCount = 0
  for (let x = -1; x < 2; x += 1) {
    for (let y = -1; y < 2; y += 1) {
      if (!isItself(col, x, y) && isAliveNeighbour(previous, row, col, x, y)) {
        neighbourCount++
      }
    }
  }
  return neighbourCount
}

function isAliveNeighbour(previous, row, col, x, y) {
  if (row + y < 0) return false
  if (col + x < 0) return false
  if (row + y > previous.length - 1) return false
  return previous[row + y][col + x] === true
}

function isItself(col, x, y) {
  return y === 0 && col + x === col
}
