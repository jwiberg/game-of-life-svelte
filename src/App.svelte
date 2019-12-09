<script>
  import World from "./World.svelte"
  import ControlPanel from "./ControlPanel.svelte"
  import * as gol from "./game-of-life"

  let cells = gol.createEmptyGrid(100, 100)
  let cellsCalculated = gol.createEmptyGrid(100, 100)
  let running = true

  setInterval(() => {
    if (running) {
      console.log("Calculating...")
      cellsCalculated = gol.generateNext(cells)
    }
  }, 2000)
</script>

<ControlPanel />
<World bind:cells {cellsCalculated} />
