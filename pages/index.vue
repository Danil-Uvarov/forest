<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import BaseInfoFrame from '../../project/Forest/components/baseComponents/BaseInfoFrame.vue'
  import TheHeader from '../../project/Forest/components/TheHeader.vue'
  import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

  const scrollY = ref(0);
  const wrapper = ref()
  const content = ref()

  onMounted(() => {
    window.addEventListener('scroll', () => {
      scrollY.value = window.scrollY;
      document.body.style.cssText += `--scrollTop: ${scrollY.value}px`;
    });
      ScrollSmoother.create({ wrapper: wrapper.value, content:content.value  }).scrollTo(wrapper.value, true, 'center center')
  })
</script>

<template>
  <div ref="wrapper" class="wrapper w-full relative h-full">
    <TheHeader />
    <div id="content" ref="content">
      <div ref="block" :style="{'will-change': 'transform'}"  class=" relative w-full flex items-center justify-center -z-10 h-[1080px]">
        <div
          class="-z-30 bg-no-repeat bg-center bg-cover absolute top-0 left-0 w-full h-[660px] bg-gradient-to-t from-transparent to-[#142904] via-white-80" />
        <div
          id="free"
          class="-z-5 absolute  -bottom-10 bg-center bg-no-repeat bg-cover left-0 w-full h-[617px] bg-gradient-to-t from-[#0F2206]" />
        <div
          id="test"
          class="-z-50  absolute  bg-center bg-no-repeat  bg-cover top-0 left-0  bg-bgPage w-full h-full" />
        <div
          class="-z-10  absolute  bg-center bg-no-repeat  bg-cover top-0 left-0 bg-bgMainPage w-full h-full" />
        <div
          id="bgForest"
          class="relative  -z-20   text-[200px] font-black text-nowrap">
          PLANETA TREE
        </div>
      </div>
      <div ref="block" class="h-[1080px] -z-10 w-full relative">
        <div   id="ss" class="z-690 absolute w-full h-full bg-no-repeat  bg-cover left-0 top-0 bg-bgAboutUs" />
        <div
          class="z-60 absolute  top-0 bg-center bg-no-repeat bg-cover left-0 w-full h-1/2 bg-gradient-to-t from-transparent to-[#0F2206] via-white-80" />
        <div
          class="z-60 absolute  bottom-0 bg-center bg-no-repeat bg-cover left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#000000] opacity-80  0 via-white-20" />

      </div>
      <div ref="block" class="h-[1080px] -z-10 w-full relative">
        <div class="bg-bgForestProblem z-60 absolute w-full h-full bg-no-repeat  bg-cover left-0 top-0" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  #bgForest {
    transform: translate3d(0, calc(var(--scrollTop) / 2), 0);
    transition: var(--transition);
  }
  #test{
    transition: var(--transition);
  }
  #free{
    transition: var(--transition);
  }
  #ss {
    transform: translate3d(0, calc(var(--scrollTop) / 10), 0);
    transition: var(--transition);
  }
</style>
