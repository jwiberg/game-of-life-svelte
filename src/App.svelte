<script>
  import { fade } from "svelte/transition"
  import World from "./World.svelte"
  import ControlPanel from "./ControlPanel.svelte"
  import * as gol from "./game-of-life"
  import { onMount } from "svelte"

  export let running = false
  let speed = 0
  let interval
  let showNotification = false
  let notificationText

  const width = 100
  const height = 100

  let previous = gol.createEmptyGrid(width, height)
  let next = gol.createEmptyGrid(width, height)

  function notify(text) {
    showNotification = true
    notificationText = text
    setTimeout(() => {
      showNotification = false
    }, 2000)
  }

  onMount(() => {
    next[7][10] = true
    next[7][11] = true
    next[7][12] = true
  })

  $: {
    clearInterval(interval)
    interval = setInterval(() => {
      if (running) {
        next = gol.generateNext(previous)
      }
    }, 2000 - speed)
  }

  /*$: {
    notify("Speed: " + Math.round((speed + 100) / 100))
  }*/

  function handleClick(event) {
    const buttonPressed = event.target.id
    switch (buttonPressed) {
      case "start":
        running = true
        notify("Started")
        break
      case "stop":
        running = false
        notify("Stopped")
        break
      case "reset":
        next = gol.createEmptyGrid(width, height)
        running = false
        notify("Reset")
        break
    }
  }
</script>

<style>
  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
    font-size: 4em;
    font-family: cursive;
    text-align: center;
  }
</style>

<ControlPanel bind:speed on:click={handleClick} />
{#if showNotification}
  <div out:fade class="centered">{notificationText}</div>
{/if}
<World bind:previous {next} {width} {height} />
