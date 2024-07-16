<template>
  <title>Welcome back!!</title>
  <GradientBorder>
    <section :class="['text-center py-56 mt-24']">
      <h1 :class="['text-6xl font-electrom tracking-widest text-[#fa00ff]']">
        Welcome back, <span class="text-[#25b1e0]">username</span>
      </h1>
      <p :class="['text-2xl mt-4']">Start playing and strike again</p>
      <div class="flex items-center justify-center gap-x-8 mt-16">
        <button>Multi-Player</button>
        <button>Single Player</button>
      </div>
    </section>
  </GradientBorder>
</template>

<script setup lang="ts">
  import GradientBorder from "/components/shared/GradientBorder.vue";
</script>
