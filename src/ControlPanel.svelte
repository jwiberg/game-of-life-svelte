<script>
  import { fade } from "svelte/transition"

  export let running = false
  let showNotification = false
  let notificationText

  function start() {
    running = true
    showNotification = true
    notify("Started")
  }

  function stop() {
    console.log("stop")
    running = false
    notify("Stopped")
  }

  function reset() {
    notify("Reset")
  }

  function notify(text) {
    showNotification = true
    notificationText = text
    setTimeout(() => {
      showNotification = false
    }, 2000)
  }
</script>

<style>
  .button-panel {
    position: fixed;
    top: 1em;
    left: 1em;
  }

  .notification {
    padding: 0.5em;
    font-size: 2em;
    font-family: cursive;
    text-align: center;
  }

  button {
    font-family: cursive;
    font-size: 2em;
    border: 1px solid;
    border-radius: 12px;
    outline: none;
    box-shadow: 0 9px #999;
  }

  button:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }

  .start {
    background-color: lightseagreen;
  }

  .stop {
    background-color: lightcoral;
  }

  .reset {
    background-color: lightslategray;
  }
</style>

<div class="button-panel">
  <button class="start" on:click={start}>Start</button>
  <button class="stop" on:click={stop}>Stop</button>
  <!-- button class="reset" on:click={reset}>Reset</button -->
  {#if showNotification}
    <div out:fade class="notification">{notificationText}</div>
  {/if}
</div>
