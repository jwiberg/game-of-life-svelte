<script>
  import { fade } from "svelte/transition"
  export let showNotification = false
  export let notificationText
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

{#if showNotification}
  <div out:fade class="centered">{notificationText}</div>
{/if}
