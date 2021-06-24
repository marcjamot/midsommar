<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  import type { Drink } from "$lib/models";
  import DrinkC from "$lib/components/Drink.svelte";

  export const load: Load = async ({ fetch }) => {
    const drinks: Drink[] = await (await fetch("/drinks.json")).json();
    drinks.sort((a, b) => a.title.localeCompare(b.title));

    return {
      props: {
        drinks: drinks,
      },
    };
  };
</script>

<script lang="ts">
  export let drinks: Drink[];
</script>

<div class="drinks">
  <div>
    {#each drinks as drink}
      <div class="drink">
        <DrinkC {drink} />
      </div>
    {/each}
  </div>
</div>

<style>
  .drinks {
    display: flex;
    justify-content: center;
  }
  .drinks > div {
    display: block;
  }
  .drink {
    margin-top: 32px;
  }
</style>
