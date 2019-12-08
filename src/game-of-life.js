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
      let neighbourCount = 0
      for (let x = -1; x < 2; x += 1) {
        if(col + x == col) {
          continue
        }
        if (previous[row][col + x] === true) {
          neighbourCount++
        }
      }
      if (neighbourCount == 2) {
        next[row][col] = true
      }
    }
  }
  return next
}
