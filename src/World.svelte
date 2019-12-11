<script>
  import Cell from "./Cell.svelte"

  export let width, height
  export let previous;
  export let next;

  let living

  $: {
    previous = living
  }

  $: {
    living = next
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
    {#each [...Array(width).keys()] as c}
      {#each [...Array(height).keys()] as r}
        <Cell x={c} y={r} bind:living />
      {/each}
    {/each}
  </div>
</main>
