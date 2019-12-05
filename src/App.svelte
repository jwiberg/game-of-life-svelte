<script>
  const cols = [...Array(100).keys()];
  const rows = [...Array(100).keys()];
  const ids = [...Array(cols.length * rows.length).keys()];
  const activeCells = new Set();

  function getIdForCell() {
    const id = ids[0];
    ids.shift();
    return id;
  }

  function cellClicked(event) {
    //const x = event.target.dataset.x;
    //const y = event.target.dataset.y;
    toggleCellLivingness(event.target);
  }

  function toggleCellLivingness(cell) {
    if (activeCells.has(cell.id)) {
      activeCells.delete(cell.id);
      cell.classList.remove("living");
      cell.classList.add("dead");
    } else {
      activeCells.add(cell.id);
      cell.classList.remove("dead");
      cell.classList.add("living");
    }
  }

  setInterval(() => {
    console.log(activeCells.size);
  }, 1000);  
</script>

<main>
  <div class="world">
    {#each cols as c}
      {#each rows as r}
        <div
          class="dead"
          id={getIdForCell()}
          data-x={c}
          data-y={r}
          on:click|stopPropagation={cellClicked} />
      {/each}
    {/each}
  </div>
</main>
