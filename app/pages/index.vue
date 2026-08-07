<template>
  <div>Page /index</div>
  <Suspense>
    <ProgLanguages />
    <template #fallback> <p>Not yet...</p> </template>
  </Suspense>
</template>
