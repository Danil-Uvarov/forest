<script setup lang="ts">
  import IconNine from '~/assets/icons/icon-nine.svg'
  import IconOne from '~/assets/icons/icon-one.svg'
  import IconFlagRussia from '~/assets/icons/icon-flag-russia.svg'

</script>

<template>
  <div
      class="text-white z-900 fixed top-[70px] left-1/2 -translate-x-1/2 container  items-center justify-between w-full flex">
    <div class="flex gap-[10px] items-center">
      <h1 class="font-museoModerno text-green font-extrabold text-[41px]">Forest</h1>
      <div class=" w-full flex">
        <IconNine class="max-w-[25px] w-full h-full max-h-[34px]" />
        <IconOne class="max-w-[18px] w-full h-full max-h-[34px]" />
        <IconOne class="max-w-[18px] w-full h-full max-h-[34px]" />
      </div>
    </div>

    <div class="flex items-center gap-[62px]">
      <nav>
        <ul class="flex font-light gap-[72px] text-nowrap text-white">
          <li>О нас</li>
          <li>Зачем?</li>
          <li>Карта</li>
          <li>Отчеты</li>
          <li>Волонтерам</li>
          <li>Мотивация</li>
        </ul>
      </nav>
      <div class="flex gap-[35px] w-full items-center">
        <button class="bg-[#00CC3A] font-semibold rounded-[10px] py-[8px] px-[21px] ">Посадить</button>
        <div class="flex items-center gap-[20px]">
          <p>Личный кабинет</p>
          <IconFlagRussia class="w-[76px] h-[51px]" />
        </div>
      </div>
    </div>


  </div>
</template>