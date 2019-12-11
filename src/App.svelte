<script>
  import World from "./World.svelte"
  import ControlPanel from "./ControlPanel.svelte"
  import * as gol from "./game-of-life"
  import { onMount } from 'svelte';

  export let running = false
  let speed = 0
  let interval;

  const width = 100 //x
  const height = 100 //y

  let previous = gol.createEmptyGrid(width, height)
  let next = gol.createEmptyGrid(width, height)

  onMount(() =>{
    next[7][10] = true;
    next[7][11] = true;
    next[7][12] = true;
  })

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
