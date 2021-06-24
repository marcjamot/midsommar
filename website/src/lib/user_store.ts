import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

const USER_STORE: Writable<string> = writable(null);

export { USER_STORE };
