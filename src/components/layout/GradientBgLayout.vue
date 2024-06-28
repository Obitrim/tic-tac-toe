<template>
  <main class="h-screen w-screen">
    <div class="absolute inset-0 gradient-pattern-bg z-10 opacity-85"></div>
    <div class="absolute inset-0 contour-lines"></div>
    <div class="overflow-y-auto relative z-20"><slot /></div>
  </main>
</template>

<script>
  export default {
    setup() {
      return {};
    },
  };
</script>
