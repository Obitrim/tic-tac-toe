<script setup lang="ts">
  import GradientBgLayout from "@/components/layout/GradientBgLayout.vue";
</script>

<template>
  <head>
    <title>Tic Tac Toe</title>
  </head>
  <GradientBgLayout>
    <div>
      <section :class="['grid md:grid-cols-2 h-screen text-white']">
        <div>
          <h1 :class="['text-[100px] font-black text-white font-pinmold']">
            Tic Tac Toe
          </h1>
          <p :class="['font-zekton text-xl']">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            explicabo quisquam id totam dicta? Dicta aliquam error velit
          </p>
          <p>Ready? <RouterLink to="/game">Start</RouterLink></p>
        </div>
        <div :class="[' flex items-center justify-center']">
          <div :class="['w-fit', 'grid grid-cols-3']">
            <div
              class="h-[10vw] flex items-center justify-center w-[10vw] border border-dashed border-gray-300 border-b-0"></div>
            <div
              class="h-[10vw] flex items-center justify-center w-[10vw] border border-dashed border-gray-300 border-b-0 border-l-0"></div>
            <div
              class="h-[10vw] flex items-center justify-center w-[10vw] border border-dashed border-gray-300 border-b-0 border-l-0"></div>
            <div
              class="h-[10vw] flex items-center justify-center w-[10vw] border border-dashed border-gray-300"></div>
            <div
              class="h-[10vw] flex items-center justify-center w-[10vw] border border-dashed border-gray-300 border-l-0"></div>
            <div
              class="h-[10vw] flex items-center justify-center w-[10vw] border border-dashed border-gray-300 border-l-0"></div>
            <div
              class="h-[10vw] flex items-center justify-center w-[10vw] border border-dashed border-gray-300 border-t-0"></div>
            <div
              class="h-[10vw] flex items-center justify-center w-[10vw] border border-dashed border-gray-300 border-t-0 border-l-0"></div>
            <div
              class="h-[10vw] flex items-center justify-center w-[10vw] border border-dashed border-gray-300 border-t-0 border-l-0"></div>
          </div>
        </div>
      </section>
    </div>
  </GradientBgLayout>
</template>
