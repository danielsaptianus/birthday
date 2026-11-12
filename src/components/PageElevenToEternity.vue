<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import SectionBottomBorder from './SectionBottomBorder.vue'

const { targetRef: cardRef, isVisible: cardVisible } = useScrollReveal(0.01)
</script>

<template>
  <section
    id="page-11"
    class="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between bg-[#7b0b0c]"
  >
    <!-- Red Gingham Background -->
    <img
      src="/page-11/background.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
    />

    <!-- Corner Ribbons -->
    <img
      src="/page-11/pita-kiri-atas.png"
      alt=""
      aria-hidden="true"
      class="absolute top-[3%] left-[2%] z-20 w-20 sm:w-28 md:w-36 lg:w-48 xl:w-64 max-w-[280px] h-auto pointer-events-none select-none"
    />
    <img
      src="/page-11/pita-kanan-atas.png"
      alt=""
      aria-hidden="true"
      class="absolute top-[3%] right-[2%] z-20 w-20 sm:w-28 md:w-36 lg:w-48 xl:w-64 max-w-[280px] h-auto pointer-events-none select-none"
    />

    <!-- Main Centered Paperclip Letter -->
    <div
      class="relative z-10 flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-10 lg:px-16 pt-20 sm:pt-24 lg:pt-14 pb-16 sm:pb-24 flex items-center justify-center"
    >
      <div
        ref="cardRef"
        :class="[
          '@container relative w-full max-w-[360px] sm:max-w-[560px] md:max-w-[700px] lg:max-w-[820px] xl:max-w-[940px] aspect-[1055/796] sm:-translate-x-[2.5%] reveal-base transition-transform duration-300 hover:-translate-y-1.5',
          cardVisible ? 'reveal-visible' : '',
        ]"
      >
        <img
          src="/page-11/background-catatan.png"
          alt=""
          aria-hidden="true"
          class="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_16px_28px_rgba(0,0,0,0.34)]"
        />

        <div
          class="absolute inset-0 pl-[14%] pr-[8%] pt-[14%] pb-[7%] flex flex-col justify-center"
        >
          <h2
            class="font-script text-[#851011] text-[8.8cqw] leading-none text-center mb-[3cqw] select-none"
          >
            To Eternity
          </h2>

          <p class="font-sans text-[#6e1516] text-[2.45cqw] leading-[1.52] text-left">
            Di momen ulang tahunmu ini, harapanku sederhana: aku nggak cuma mau ada di sampingmu
            hari ini atau tahun ini saja, tapi seterusnya sampai nanti. Apa pun fase dan tantangan
            yang bakal kita hadapi ke depan, aku mau kita terus belajar, tumbuh, dan menua bersama
            sambil saling menggenggam tangan. Terima kasih sudah menjadi rumah sekaligus bagian
            terindah dalam hidupku, Syafira ke mana pun langkah kita pergi nanti, aku cuma mau
            ujungnya tetap aku dan kamu, dari sekarang sampai selamanya.
          </p>

          <p class="font-sans font-bold text-[#6e1516] text-[2.45cqw] text-center mt-[2.6cqw]">
            Daniel
          </p>
        </div>
      </div>
    </div>

    <SectionBottomBorder
      lace-src="/page-11/dekorasi-bawah.png"
      plaid-src="/page-11/dekorasi-bawah-2.png"
    />
  </section>
</template>
