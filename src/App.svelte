<script>
  import World from "./World.svelte"
  import ControlPanel from "./ControlPanel.svelte"
  import * as gol from "./game-of-life"

  export let running = false

  let previous = gol.createEmptyGrid(100, 100)
  let cellsCalculated = gol.createEmptyGrid(100, 100)

  setInterval(() => {
    if (running) {
      cellsCalculated = gol.generateNext(previous)
    }
  }, 1000)
</script>

<ControlPanel bind:running />
<World bind:previous {cellsCalculated} />
