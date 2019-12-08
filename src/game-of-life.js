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
      const count = countNeighbours(row, col, previous)
      if (
        isAliveAndHasTwoOrThreeNeighbours(count, previous[row][col]) ||
        isNewborn(count, previous[row][col])
      ) {
        next[row][col] = true
      }
    }
  }
  return next
}

function isNewborn(neighbourCount, cell) {
  return neighbourCount === 3 && cell === false
}

function isAliveAndHasTwoOrThreeNeighbours(neighbourCount, cell) {
  return (neighbourCount === 2 || neighbourCount === 3) && cell === true
}


function countNeighbours(row, col, previous) {
  let neighbourCount = 0
  for (let x = -1; x < 2; x += 1) {
    for (let y = -1; y < 2; y += 1) {
      if (
        !isItself(col, x, y) &&
        isAliveNeighbour(previous, row + y, col + x)
      ) {
        neighbourCount++
      }
    }
  }
  return neighbourCount
}

function isAliveNeighbour(previous, y, x) {
  if (y < 0) return false
  if (x < 0) return false
  if (y > previous.length - 1) return false
  return previous[y][x] === true
}

function isItself(col, x, y) {
  return y === 0 && col + x === col
}
