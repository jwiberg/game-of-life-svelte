<script>
  import World from "./World.svelte"
  import ControlPanel from "./ControlPanel.svelte"

  let cells = []
  let cellsCalculated = []

  setInterval(() => {
    cells.push(
      {x: 50, y: 50, id: Math.floor(Math.random() * 9999)}
    )
    cellsCalculated = cells
  }, 500);
</script>

<ControlPanel />
<World bind:cells {cellsCalculated} />
