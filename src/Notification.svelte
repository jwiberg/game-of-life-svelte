<script>
  import { fade } from "svelte/transition"
  export let showNotification = false
  export let notificationText
</script>

<style>
  .centered {
    font-size: 4em;
    font-family: cursive;
    text-align: center;
  }
</style>

{#if showNotification}
  <div out:fade class="centered">{notificationText}</div>
{/if}
