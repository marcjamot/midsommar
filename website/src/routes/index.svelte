<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch, page }) => {
    return {
      status: 307,
      redirect: "/songs",
    };
  };
</script>
