<script lang="ts">
  import Menu from "$lib/components/Menu.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<header>
  <Title />
  <Menu />
</header>

<slot />

<style>
  header {
    margin: 16px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
