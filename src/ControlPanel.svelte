<script>
  export let running = false
  export let speed = 0

  let showNotification = false
  let notificationText

  function start() {
    running = true
    showNotification = true
    notify("Started")
  }

  function stop() {
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
    text-align: center;
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

  input[type="range"] {
    -webkit-appearance: none;
    margin: 18px 0;
    width: 100%;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -14px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #367ebd;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  input[type="range"]::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type="range"]::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type="range"]::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #3071a9;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #367ebd;
  }
</style>

<div class="button-panel">
  <button class="start" id="start" on:click>Start</button>
  <button class="stop" id="stop" on:click>Stop</button>
  <button class="reset" id="reset" on:click>Reset</button>
  <div>
    <input type="range" bind:value={speed} min="0" max="1900" />
  </div>
  {#if showNotification}
    <div out:fade class="notification">{notificationText}</div>
  {/if}
</div>
