// Superseded by app/plugins/reveal.ts (universal plugin, SSR-safe).
// Kept as a harmless no-op because this sandbox's mounted filesystem does not
// permit deleting pre-existing files. Do not register the `reveal` directive here.
export default defineNuxtPlugin(() => {})
