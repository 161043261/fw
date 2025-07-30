<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
import CopyrightInfo from '@renderer/components/CopyrightInfo.vue'
//! IPC 测试
// window.electron.ipcRenderer.on('desktop-path', (_event, desktopPath: string) => {
//   outputDir.value = desktopPath
// })
</script>

<template>
  <main>
    <NavigationBar></NavigationBar> <RouterView></RouterView> <CopyrightInfo class="mt-2" />
  </main>
</template>

<style lang="scss" scoped></style>
