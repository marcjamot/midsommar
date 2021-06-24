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
  import SongC from "$lib/components/Song.svelte";

  export let songs: Song[];
</script>

<div class="songs">
  <div>
    {#each songs as song}
      <div class="song">
        <SongC {song} />
      </div>
    {/each}
  </div>
</div>

<style>
  .songs {
    display: flex;
    justify-content: center;
  }
  .songs > div {
    display: block;
  }
  .song {
    margin-top: 32px;
  }
</style>
