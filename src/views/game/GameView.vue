<template>
  <GradientBgLayout>
    <Container>
      <header class="grid grid-cols-4 gap-6">
        <DashItem>
          <template #text>Username</template>
        </DashItem>
        <DashItem>
          <template #text>Rating: 90% success</template>
        </DashItem>
        <DashItem>
          <template #text>History</template>
        </DashItem>
        <DashItem>
          <template #text>Exit</template>
        </DashItem>
      </header>
      <router-view />
    </Container>
  </GradientBgLayout>
</template>

<script setup lang="ts">
  import DashItem from "@/components/buttons/DashItem.vue";
</script>
