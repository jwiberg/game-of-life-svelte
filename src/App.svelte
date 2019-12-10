<script>
  import World from "./World.svelte"
  import ControlPanel from "./ControlPanel.svelte"
  import * as gol from "./game-of-life"

  export let running = false
  let speed = 0
  let intervalTime = 2000

  //TODO: remove this
  let interval = setInterval(() => {
    if (running) {
      next = gol.generateNext(previous)
    }
  }, intervalTime)

  $: {
    intervalTime = 2000 - speed

    console.log(intervalTime)

    clearInterval(interval)

    interval = setInterval(() => {
      if (running) {
        next = gol.generateNext(previous)
      }
    }, intervalTime)
  }

  const width = 100
  const height = 100

  let previous = gol.createEmptyGrid(width, height)
  let next = gol.createEmptyGrid(width, height)
</script>

<ControlPanel bind:running bind:speed />
<World bind:previous {next} {width} {height} />
