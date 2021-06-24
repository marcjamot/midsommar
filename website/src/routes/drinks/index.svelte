<script context="module" lang="ts">
  interface Drink {
    title: string;
    booze: string;
  }

  import type { Load } from "@sveltejs/kit";

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

{#each drinks as drink}
  <h3>{drink.title}</h3>
  <p>{drink.booze}</p>
{/each}
