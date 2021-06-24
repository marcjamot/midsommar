<script lang="ts">
  import Title from "$lib/components/Title.svelte";
  import { USER_STORE } from "$lib/user_store";

  let name = "";

  function login() {
    let cleanName = name.substr(0, 101).trim();
    if (cleanName.length < 3 || 100 < cleanName.length) {
      alert("Name length needs to be between 3 and 100 characters.");
    } else {
      USER_STORE.set(cleanName);
    }
  }
</script>

<header><Title /></header>

<main>
  <div class="login">
    <p>Enter name:</p>
    <input type="text" bind:value={name} />
    <button on:click={login}>🦄</button>
  </div>
</main>

<style>
  header {
    margin: 16px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login {
    margin: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login > * {
    margin: 8px;
  }

  button {
    font-size: 4rem;
  }
</style>
