<template>
  <NConfigProvider inline-theme-disabled>
    <Suspense>
      <router-view />

    </Suspense>
  </NConfigProvider>
</template>

<script setup>
import { NConfigProvider } from 'naive-ui';
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gentium+Plus:wght@400;700&family=Inter:wght@400;500;700&family=Montserrat:wght@400;500;600;700&display=swap');

#app {
  font-family: "Inter";
  font-size: 16px;
  box-sizing: border-box;
}
</style>
