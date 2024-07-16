<template>
  <div :class="['cut-rect']">
    <div class="cut-rect">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .cut-rect {
    clip-path: inset(20px);
  }
</style>
