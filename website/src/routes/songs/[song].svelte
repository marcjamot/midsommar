<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  import type { Song } from "$lib/models";

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

<div class="song">
  <div>
    <div class="title">
      <h3>{song.title}</h3>
    </div>

    <div class="metadata">
      Melody: <span>{song.melody}</span><br />
      Language: <span>{song.lang}</span>
    </div>

    <div class="text">
      <div>
        {#each song.text as line}
          {#if line === ""}
            <br />
          {:else}
            <p>{line}</p>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .song {
    margin: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    font-size: 1.5rem;
  }
  .text {
    margin-top: 16px;
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
  .text > div {
    display: block;
  }
</style>
