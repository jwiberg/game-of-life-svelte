<script>
  import World from "./World.svelte"
  import ControlPanel from "./ControlPanel.svelte"
  import Notification from "./Notification.svelte"
  import * as gol from "./game-of-life"
  import { onMount } from "svelte"

  const width = 100
  const height = 100

  export let running = false
  let speed = 0
  let interval
  let showNotification = false
  let notificationText
  let previous = gol.createEmptyGrid(width, height)
  let next = gol.createEmptyGrid(width, height)

  onMount(() => {
    next[7][10] = true
    next[7][11] = true
    next[7][12] = true
  })

  function notify(text) {
    showNotification = true
    notificationText = text
    setTimeout(() => {
      showNotification = false
    }, 2000)
  }

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
  .control-panel {
    position: fixed;
    top: 1em;
    left: 1em;
    text-align: center;
  }
</style>

<div class="control-panel">
  <ControlPanel bind:speed on:click={handleClick} />
  <Notification {showNotification} {notificationText} />
</div>
<World bind:previous {next} {width} {height} />
