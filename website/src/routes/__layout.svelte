<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { USER_STORE } from "$lib/user_store";
  import LayoutAnonymous from "./_layout_anonymous.svelte";
  import LayoutUser from "./_layout_user.svelte";

  // $: user = $USER_STORE;

  // onMount(() => {
  //   if (!user) {
  //     USER_STORE.set(window.localStorage.getItem("user"));
  //   }

  //   if (user && $page.path === "/") {
  //     goto("/chat");
  //   }
  //   if (!user && $page.path !== "/") {
  //     goto("/");
  //   }
  // });
</script>

<!-- {#if user} -->
<LayoutUser><slot /></LayoutUser>
<!-- {:else}
  <LayoutAnonymous />
{/if} -->
