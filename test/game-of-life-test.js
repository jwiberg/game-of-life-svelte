import test from "ava"
import * as gol from "../src/game-of-life"

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

  t.deepEqual(gol.generateNext(generationX), [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ])
})

test("Cells with two neighbours stays alive left corner", t => {
  const generationX = [
    [true, true, true, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ]
  t.deepEqual(gol.generateNext(generationX), [
    [false, true, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ])
})

test("Cells with two neighbours stays alive middle of first line", t => {
  const generationX = [
    [false, true, true, true, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ]
  t.deepEqual(gol.generateNext(generationX), [
    [false, false, true, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ])
})

test("Cells with two neighbours stays alive middle of the world", t => {
  const generationX = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, true, true, true, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ]
  t.deepEqual(gol.generateNext(generationX), [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, true, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ])
})
