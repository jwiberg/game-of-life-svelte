<script>
  import Cell from "./Cell.svelte"

  const cols = [...Array(100).keys()]
  const rows = [...Array(100).keys()]
  const ids = [...Array(cols.length * rows.length).keys()]
  let living = new Array(ids.length).fill(false)

  console.log(ids)

  function getIdForCell() {
    const id = ids[0]
    ids.shift()
    return id
  }

  $: {
    console.log(living)
  }

  /*setInterval(() => {
    console.log("running");
  }, 1000);*/
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
