<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import SectionBottomBorder from './SectionBottomBorder.vue'

const { targetRef: leftRef, isVisible: leftVisible } = useScrollReveal(0.08)
const { targetRef: rightRef, isVisible: rightVisible } = useScrollReveal(0.08)
</script>

<template>
  <section
    id="page-04"
    class="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between bg-[#7b0b0c]"
  >
    <!-- Red Gingham Background -->
    <img
      src="/page-04/background.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
    />

    <!-- Top-Left Pink Lily -->
    <img
      src="/page-04/bunga-kiri-atas.png"
      alt=""
      aria-hidden="true"
      class="absolute -top-[4%] -left-[7%] sm:-top-[4%] sm:-left-[3%] z-20 w-32 sm:w-44 md:w-52 lg:w-60 xl:w-72 h-auto rotate-[24deg] pointer-events-none select-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.28)]"
    />

    <!-- Top-Right Flowing Ribbon -->
    <img
      src="/page-04/pita-kanan-atas.png"
      alt=""
      aria-hidden="true"
      class="absolute top-[1%] right-[1%] z-20 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-[27vw] max-w-[520px] h-auto pointer-events-none select-none animate-float-slow"
    />

    <!-- Bottom-Right Large Pink Lily Overlapping Border -->
    <img
      src="/page-04/bunga-kiri-atas.png"
      alt=""
      aria-hidden="true"
      class="absolute -bottom-[4%] -right-[5%] sm:-bottom-[6%] sm:-right-[2%] z-30 w-44 sm:w-64 md:w-80 lg:w-96 xl:w-[28vw] max-w-[540px] h-auto -rotate-[32deg] pointer-events-none select-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.34)]"
    />

    <!-- Main Content -->
    <div
      class="relative z-10 flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-28 lg:pt-16 pb-20 sm:pb-28 flex items-center"
    >
      <div class="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
        <!-- Left Column: Binder-Clipped Stamp Photo, Polaroid & Photobooth Strip -->
        <div
          ref="leftRef"
          :class="[
            'lg:col-span-5 flex justify-center items-center reveal-base',
            leftVisible ? 'reveal-visible' : '',
          ]"
        >
          <div
            class="relative w-full max-w-[330px] sm:max-w-[430px] md:max-w-[470px] lg:max-w-[480px] xl:max-w-[560px] aspect-[560/620]"
          >
            <!-- Main Stamp Photo + Black Binder Clip -->
            <div
              class="absolute left-[2%] top-[12%] w-[64%] z-10 transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.03] hover:z-30 active:-translate-y-2 active:-rotate-1 active:scale-[1.03] active:z-30 cursor-pointer"
            >
              <img
                src="/page-04/foto-1.png"
                alt="Foto bersama Syafira dengan buket bunga"
                class="w-full h-auto select-none drop-shadow-[0_14px_24px_rgba(0,0,0,0.32)]"
              />
              <img
                src="/page-04/penjempit-kertas.png"
                alt=""
                aria-hidden="true"
                class="absolute left-1/2 -translate-x-1/2 -top-[16%] w-[28%] h-auto z-20 pointer-events-none select-none drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)]"
              />
            </div>

            <!-- Bottom-Left Polaroid Photo -->
            <div
              class="absolute left-[5%] bottom-[2%] w-[52%] z-10 transition-transform duration-300 hover:-translate-y-2 hover:rotate-2 hover:scale-[1.04] hover:z-30 active:-translate-y-2 active:rotate-2 active:scale-[1.04] active:z-30 cursor-pointer"
            >
              <div
                class="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#db4d69] absolute -top-2 left-[47%] -translate-x-1/2 z-0 shadow-xs"
              ></div>
              <img
                src="/page-04/foto-2.png"
                alt="Foto polaroid Syafira tersenyum"
                class="relative z-10 w-full h-auto select-none drop-shadow-[0_12px_22px_rgba(0,0,0,0.3)]"
              />
            </div>

            <!-- Right Vertical Photobooth Strip -->
            <div
              class="absolute right-[3%] top-[13%] w-[33%] z-20 transition-transform duration-300 hover:-translate-y-2 hover:rotate-2 hover:scale-[1.04] hover:z-30 active:-translate-y-2 active:rotate-2 active:scale-[1.04] active:z-30 cursor-pointer"
            >
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#db4d69] absolute -top-2.5 left-[58%] -translate-x-1/2 z-0 shadow-xs"
              ></div>
              <img
                src="/page-04/foto-3.png"
                alt="Photobooth strip Syafira"
                class="relative z-10 w-full h-auto select-none drop-shadow-[0_14px_24px_rgba(0,0,0,0.34)]"
              />
            </div>
          </div>
        </div>

        <!-- Right Column: "Leveling Up" Heading & Message -->
        <div
          ref="rightRef"
          :class="[
            'lg:col-span-7 flex flex-col items-center lg:items-start reveal-base',
            rightVisible ? 'reveal-visible' : '',
          ]"
          style="transition-delay: 180ms"
        >
          <div class="w-full max-w-[680px]">
            <h2
              class="font-script text-[#f6f1e3] text-[2.9rem] sm:text-[4rem] lg:text-[4.4rem] xl:text-[5.2rem] leading-[1.15] font-normal text-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.22)] select-none"
            >
              Leveling Up
            </h2>

            <p
              class="font-sans text-[#f6f1e3]/95 text-sm sm:text-base lg:text-[1.16rem] xl:text-[1.28rem] leading-[1.68] font-normal mt-5 sm:mt-8 text-left"
            >
              Aku sangat bangga sama kamu, selama ini kamu telah melalui banyak hal, banyak
              perkembangan dan ilmu yang kamu dapat. Semoga apa yang kamu pelajari dan perbuatan
              kamu hari ini menjadi fondasi untuk kamu menjadi apa yang kamu mau kedepannya. Aku
              akan selalu support kamu dan jadi orang yang selalu ada disisi kamu.
            </p>
          </div>
        </div>
      </div>
    </div>

    <SectionBottomBorder
      lace-src="/page-04/dekorasi-bawah.png"
      plaid-src="/page-04/dekorasi-bawah-2.png"
    />
  </section>
</template>

