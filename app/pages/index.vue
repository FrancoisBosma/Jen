<script setup lang="ts">
const { tauriDb } = await useTauriDb()
// TODO: check how to handle loading nicely, (<Suspense> ?)
tauriDb.select("SELECT * FROM prog_languages;")
</script>
<template>
  <div>Page /index</div>
</template>
