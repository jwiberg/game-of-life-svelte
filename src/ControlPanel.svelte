<script>
  function start() {
    console.log("start")
  }

  function stop() {
    console.log("stop")
  }

  function reset() {
    console.log("reset")
  }
</script>

<style>
  .button-panel {
    position: fixed;
    top: 5%;
    left: 2.5%;
  }

  button {
    font-size: 2em;
    border: 1px solid;
    border-radius: 12px;
    font-family: cursive;
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
  <button class="reset" on:click={reset}>Reset</button>
</div>
