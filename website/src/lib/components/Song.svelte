<script lang="ts">
  import type { Song } from "$lib/models";

  export let song: Song;
</script>

<div class="song">
  <a href="/songs/{song.id}">
    <span class="title">{song.title}</span>
  </a>
  <span class="lang">{song.lang}</span>
</div>

<style>
  a {
    text-decoration: underline;
    text-decoration-style: dashed;
    color: black;
  }
  .song {
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 2rem;
  }
  .lang {
    text-align: end;
  }
</style>
