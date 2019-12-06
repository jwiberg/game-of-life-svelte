<script>
  import Cell from "./Cell.svelte"

  const cols = [...Array(100).keys()]
  const rows = [...Array(100).keys()]
  const ids = [...Array(cols.length * rows.length).keys()]
  let living = new Array(ids.length).fill(false)

  export let cells = []
  export let cellsCalculated = []

  function getIdForCell() {
    const id = ids[0]
    ids.shift()
    return id
  }

  $: {
    cellsCalculated.forEach((cell) => {
      living[cell.id] = true;
    })
  }

  $: {
    cells = []
    living.forEach((isLiving, id) => {
      if (isLiving) {
        const data = document.getElementById(id).dataset
        cells.push({
          x: data.x,
          y: data.y, 
          id: id
        })
      }
    })
    cells = cells
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
