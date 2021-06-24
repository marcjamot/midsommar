<script context="module" lang="ts">
  interface Song {
    id: string;
    title: string;
    melody: string;
    lang: string;
    text: string[];
  }

  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch, page }) => {
    const songs: Song[] = await (await fetch("/songs.json")).json();
    songs.sort((a, b) => a.title.localeCompare(b.title));

    return {
      props: {
        songs: songs,
        songId: page.params.song,
      },
    };
  };
</script>

<script lang="ts">
  export let songs: Song[];
  export let songId: string;

  let song = songs.find((s) => s.id === songId);
</script>

<div class="title">
  <h3>{song.title}</h3>
</div>

<div class="metadata">
  Melody: <p>{song.melody}</p>
  Language:
  <p>{song.lang}</p>
</div>

<div class="text">
  {#each song.text as line}
    <p>{line}</p>
  {/each}
</div>
