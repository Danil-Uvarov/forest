<script setup lang="ts">
  withDefaults(defineProps<{
    opacity: number
    maxWidth: number
    backgroundColor: string
  }>(), {
    opacity: 72,
    backgroundColor: '#000000'
  })


</script>

<template>
  <div class="w-full" :style="{maxWidth:`${maxWidth}px`}">
    <div class="h-[19px] w-full bg-green" />
    <div

      class="w-full">
      <div class="relative">
        <div class="z-20 relative">
        <slot  />
        </div>
        <div
          class="absolute left-0 z-10 top-0 w-full h-full"
          :style="{backgroundColor :backgroundColor, opacity: `${opacity}%`}" />
      </div>
    </div>


  </div>
</template>