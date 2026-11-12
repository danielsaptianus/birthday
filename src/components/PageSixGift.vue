<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import SectionBottomBorder from './SectionBottomBorder.vue'

const { targetRef: leftRef, isVisible: leftVisible } = useScrollReveal(0.08)
const { targetRef: rightRef, isVisible: rightVisible } = useScrollReveal(0.08)
</script>

<template>
  <section
    id="page-06"
    class="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between bg-[#7b0b0c]"
  >
    <!-- Red Gingham Background -->
    <img
      src="/page-06/background.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
    />

    <!-- Top-Left Flowing Ribbon -->
    <img
      src="/page-06/pita-kiri-atas.png"
      alt=""
      aria-hidden="true"
      class="absolute top-0 left-0 z-20 w-40 sm:w-56 md:w-72 lg:w-96 xl:w-[34vw] max-w-[680px] h-auto pointer-events-none select-none animate-float-slow"
    />

    <!-- Main Content -->
    <div
      class="relative z-10 flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-28 sm:pt-36 lg:pt-20 pb-16 sm:pb-24 flex items-center"
    >
      <div class="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-6">
        <!-- Left Column: Birthday Gift Title & Message -->
        <div
          ref="leftRef"
          :class="[
            'lg:col-span-6 flex flex-col items-start text-left reveal-base',
            leftVisible ? 'reveal-visible' : '',
          ]"
        >
          <h2
            class="font-script text-[#f6f1e3] text-[2.8rem] sm:text-[3.9rem] lg:text-[4.5rem] xl:text-[5.4rem] leading-[1.12] font-normal drop-shadow-[0_4px_12px_rgba(0,0,0,0.22)] select-none"
          >
            Birthday Gift
          </h2>

          <p
            class="font-sans font-bold uppercase tracking-[0.03em] text-[#f6f1e3] text-sm sm:text-base lg:text-[1.12rem] xl:text-[1.22rem] leading-[1.48] mt-6 sm:mt-8 max-w-[620px]"
          >
            BECAUSE YOU DESERVE EVERY BEAUTIFUL THING THIS WORLD HAS TO OFFER. ENJOY!
          </p>

          <p
            class="font-sans text-[#f6f1e3]/95 text-sm sm:text-base lg:text-[1.14rem] xl:text-[1.24rem] leading-[1.68] font-normal mt-5 sm:mt-6 max-w-[620px]"
          >
            Kamu perempuan hebat baik dan cantik, Kamu pantas mendapatkan beberapa hadiah dari
            orang tersayang. Mungkin ini belum cukup tapi semoga hadiah kecil dari aku bisa
            membuat kamu bahagia.
          </p>
        </div>

        <!-- Right Column: Teddy Bear, Gift Box & "A Little Something" Note -->
        <div
          ref="rightRef"
          :class="[
            'lg:col-span-6 flex justify-center items-center reveal-base',
            rightVisible ? 'reveal-visible' : '',
          ]"
          style="transition-delay: 180ms"
        >
          <div
            class="relative w-full max-w-[340px] sm:max-w-[470px] md:max-w-[530px] lg:max-w-[540px] xl:max-w-[660px] aspect-[800/720]"
          >
            <!-- Gift Box (Top-Right) -->
            <div
              class="absolute right-[1%] top-[2%] w-[54%] z-10 transition-transform duration-300 hover:-translate-y-2 hover:rotate-2 hover:scale-[1.04] active:-translate-y-2 active:rotate-2 active:scale-[1.04] cursor-pointer"
            >
              <img
                src="/page-06/kado.png"
                alt="Kotak kado berpita merah"
                class="w-full h-auto select-none drop-shadow-[0_14px_24px_rgba(0,0,0,0.34)]"
              />
            </div>

            <!-- Plush Teddy Bear (Center-Left) -->
            <div
              class="absolute left-0 top-[4%] w-[68%] z-20 transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.03] active:-translate-y-2 active:-rotate-1 active:scale-[1.03] cursor-pointer"
            >
              <img
                src="/page-06/boneka.png"
                alt="Boneka beruang cokelat"
                class="w-full h-auto select-none drop-shadow-[0_16px_28px_rgba(0,0,0,0.38)]"
              />
            </div>

            <!-- "A Little Something" Sticky Note (Bottom-Right) -->
            <div
              class="absolute right-[4%] bottom-[2%] w-[44%] z-30 transition-transform duration-300 hover:-translate-y-2 hover:rotate-2 hover:scale-[1.05] active:-translate-y-2 active:rotate-2 active:scale-[1.05] animate-sway-soft cursor-pointer"
            >
              <img
                src="/page-06/catatan-kecil.png"
                alt="A Little Something - Wrapped in love and picked with you in mind. I hope it makes you smile."
                class="w-full h-auto select-none drop-shadow-[0_12px_22px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <SectionBottomBorder
      lace-src="/page-06/dekorasi-bawah.png"
      plaid-src="/page-06/dekorasi-bawah-2.png"
    />
  </section>
</template>

