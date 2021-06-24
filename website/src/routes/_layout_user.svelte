<script lang="ts">
  import Menu from "$lib/components/Menu.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<header>
  <div class="menu">
    <Menu />
  </div>
  <div class="title">
    <Title />
  </div>
</header>

<main>
  <slot />
</main>

<style>
  header {
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
  main {
    padding-bottom: 64px;
    background-color: #ddd28a;
  }

  .menu {
    padding-bottom: 32px;
    background: radial-gradient(circle, #d5f0d3 0%, #84dc9f 100%);
  }
  .title {
    padding-top: 32px;
    padding-bottom: 32px;
    box-shadow: 0px -6px 4px 1px #429c8d;
    background: linear-gradient(180deg, #429c8d 0%, #429c8d 5%, #87d385 20%, #ddd28a 100%);
  }
</style>
