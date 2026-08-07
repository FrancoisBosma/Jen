<script setup lang="ts">
const { tauriDb } = await useTauriDb()
const prog_languages = await tauriDb.select("SELECT * FROM prog_languages;")
</script>

<template>
  <!-- TODO1: use Nuxt's list stuff, instead of ul/li -->
  <!-- TODO2: use Drizzle ? -->
  <!-- TODO3: fix db types -->
  <ul>
    <li v-for="(prog_language, idx) in prog_languages" :key="idx">
      {{ prog_language.name }}
    </li>
  </ul>
</template>
