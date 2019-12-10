<script>
  import World from "./World.svelte"
  import ControlPanel from "./ControlPanel.svelte"
  import * as gol from "./game-of-life"

  export let running = false
  let speed = 0
  let interval;

  const width = 100
  const height = 100

  let previous = gol.createEmptyGrid(width, height)
  let next = gol.createEmptyGrid(width, height)


  $: {
    clearInterval(interval)

    interval = setInterval(() => {
      if (running) {
        next = gol.generateNext(previous)
      }
    }, 2000 - speed)
  }
</script>

<ControlPanel bind:running bind:speed />
<World bind:previous {next} {width} {height} />
