<script setup lang="ts">
  import gsap from 'gsap-trial';
  import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
  import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

  if (typeof window !== 'undefined') {
    gsap.config({
      trialWarn: false,
    });
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  }
</script>
<template>
  <div>
    <NuxtPage />
  </div>
</template>
