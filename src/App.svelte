<script>
  import World from "./World.svelte"
  import ControlPanel from "./ControlPanel.svelte"
  import * as gol from "./game-of-life"

  export let running = false

  const width = 100
  const height = 100

  let previous = gol.createEmptyGrid(width, height)
  let next = gol.createEmptyGrid(width, height)

  setInterval(() => {
    if (running) {
      next = gol.generateNext(previous)
    }
  }, 1000)
</script>

<ControlPanel bind:running />
<World bind:previous {next} {width} {height} />
