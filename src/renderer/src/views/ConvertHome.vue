<script setup lang="ts">
import CeilButtons from '@renderer/components/CeilButtons.vue'
import BasicSettings from '@renderer/components/BasicSettings.vue'
import FloorButtons from '@renderer/components/FloorButtons.vue'
import VideoList from '@renderer/components/VideoList.vue'
</script>

<template>
  <main>
    <BasicSettings class="mt-5" /> <CeilButtons class="mt-5" /> <FloorButtons class="mt-3" />
    <VideoList class="mt-5" />
  </main>
</template>

<style scoped lang="css"></style>
