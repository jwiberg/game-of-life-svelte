<script>
  export let living;
  export let x;
  export let y;
  export let id;
</script>

<style>
  .dead {
    width: 1em;
    height: 1em;
    border: 1px solid #f1f5da;
    background-color: #c5d6c6;
    border-radius: 3px;
  }

  .living {
    min-width: 1em;
    min-height: 1em;
    background-color: #cc4774;
    border-radius: 10px;
  }
</style>

<div
  class={living[id] ? 'living' : 'dead'}
  data-x={x}
  data-y={y}
  on:click|stopPropagation={() => (living[id] = !living[id])} />
