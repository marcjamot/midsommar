<script lang="ts">
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

Enter name:
<input type="text" bind:value={name} />
<button on:click={login}>🦄</button>
