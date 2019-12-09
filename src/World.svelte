<script>
  import Cell from "./Cell.svelte"
  import * as gol from "./game-of-life"

  export let cells = []
  export let cellsCalculated = []

  const cols = [...Array(100).keys()]
  const rows = [...Array(100).keys()]
  const ids = [...Array(cols.length * rows.length).keys()]
  let living

  /*
    What if we create grid in on mount...
  */

  function getIdForCell() {
    const id = ids[0]
    ids.shift()
    return id
  }

  $: {
    cells = living
  }

  $: {
    living = cellsCalculated
  }
</script>

<style>
  .world {
    display: grid;
    grid-gap: 0.1em;
    grid-template-columns: repeat(100, 1fr);
  }
</style>

<main>
  <div class="world">
    {#each cols as c}
      {#each rows as r}
        <Cell x={c} y={r} id={getIdForCell()} bind:living />
      {/each}
    {/each}
  </div>
</main>
