<script lang="ts">
  import type { Drink } from "$lib/models";

  export let drink: Drink;
</script>

<div class="drink">
  <span class="title">{drink.title}</span>
  <span class="booze">{drink.booze}</span>
</div>

<style>
  .drink {
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 2rem;
  }
  .booze {
    text-align: end;
  }
</style>
