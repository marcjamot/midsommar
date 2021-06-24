<script lang="ts">
  import { goto } from "$app/navigation";
  import { USER_STORE } from "$lib/user_store";

  function logout() {
    if (window) {
      window.localStorage.removeItem("user");
      USER_STORE.set(null);
      goto("/");
    }
  }
</script>

<nav class="menu">
  <a href="/chat">Chat</a>
  <a href="/drinks">Drinks</a>
  <a href="/songs">Songs</a>
  <span on:click={logout}>Log out</span>
</nav>

<style>
  .menu {
    margin-top: 16px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
</style>
