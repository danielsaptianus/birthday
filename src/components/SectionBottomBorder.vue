<script setup>
defineProps({
  laceSrc: {
    type: String,
    default: '/page-01/dekorasi-bawah.png',
  },
  plaidSrc: {
    type: String,
    default: '/page-01/dekorasi-bawah-2.png',
  },
})
</script>

<template>
  <div class="relative z-20 w-full pointer-events-none select-none flex flex-col">
    <img
      :src="laceSrc"
      alt=""
      aria-hidden="true"
      class="w-full h-8 sm:h-11 md:h-12 lg:h-14 object-cover object-center"
    />
    <img
      :src="plaidSrc"
      alt=""
      aria-hidden="true"
      class="w-full h-8 sm:h-11 md:h-12 lg:h-14 object-cover object-center"
    />
  </div>
</template>

