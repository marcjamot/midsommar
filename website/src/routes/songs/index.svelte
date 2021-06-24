<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  import type { Song } from "$lib/models";

  export const load: Load = async ({ fetch }) => {
    const songs: Song[] = await (await fetch("/songs.json")).json();
    songs.sort((a, b) => a.title.localeCompare(b.title));

    return {
      props: {
        songs: songs,
      },
    };
  };
</script>

<script lang="ts">
  export let songs: Song[];
</script>

{#each songs as song}
  <a href="/songs/{song.id}"><p>{song.title}</p></a>
{/each}
