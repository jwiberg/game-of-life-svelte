import test from "ava"
import * as gol from "game-of-life"

test("Returns initialized grid for starting point", t => {
  t.deepEqual(gol.createEmptyGrid(5, 5), [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ])
})

test("Empty generation generates empty generation", t => {
  t.deepEqual(gol.generateNext(gol.createEmptyGrid(5, 5)), [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ])
})

test("Cell without any neighbours dies", t => {
  const generationX = [
    [true, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ]

  t.deepEqual(gol.generateNext(generationX), [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ])
})

test("Cells with only one neighbour dies", t => {
  const generationX = [
    [true, true, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ]
  let generated = gol.generateNext(generationX)
  t.deepEqual(generated, [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ])
})

test("Any live cell with two or three neighbors survives.", t => {
  const generationX = [
    [true, true, true, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ]
  t.deepEqual(gol.generateNext(generationX), [
    [false, true, false, false, false],
    [false, true, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ])
})

test("Any dead cell with three live neighbors becomes a live cell.", t => {
  const generationX = [
    [false, false, false, false, false],
    [false, true, true, true, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ]
  t.deepEqual(gol.generateNext(generationX), [
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ])
})

test("All other live cells die in the next generation. Similarly, all other dead cells stay dead.", t => {
  const generationX = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, true, true, true, false],
    [false, false, false, false, false],
    [true, true, false, true, true]
  ]
  t.deepEqual(gol.generateNext(generationX), [
    [false, false, false, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [true, false, false, false, true],
    [false, false, false, false, false]
  ])
})

test("Lonely cell right corner dies.", t => {
  const generationX = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, true]
  ]
  t.deepEqual(gol.generateNext(generationX), [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ])
})
