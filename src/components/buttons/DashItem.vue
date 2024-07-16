<template>
  <button :class="['relative rounded-tl-2xl rounded-br-2xl', ,]">
    <div
      :class="[
        'm-4 p-4 relative z-10',
        'flex items-center justify-center gap-x-3',
        ' bg-black bg-opacity-50',
      ]">
      <slot name="icon" />
      <div class="font-zekton text-lg font-black text-center text-white">
        <slot name="text" />
      </div>
    </div>

    <!-- left bottom art -->
    <!-- <div :class="['absolute -bottom-4 -left-4 bg-red-500 h-1/2 w-1/2']"></div> -->
  </button>
</template>

<script setup lang="ts">
  type DashItemProps = {
    icon: any;
    text: string;
  };

  const props = defineProps<DashItemProps>();
</script>

<style scoped></style>
