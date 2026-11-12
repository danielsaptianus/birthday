<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import SectionBottomBorder from './SectionBottomBorder.vue'

const { targetRef: leftRef, isVisible: leftVisible } = useScrollReveal(0.01)
const { targetRef: rightRef, isVisible: rightVisible } = useScrollReveal(0.01)
</script>

<template>
  <section
    id="page-09"
    class="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between bg-[#7b0b0c]"
  >
    <!-- Left Half Red Gingham Background (Full Section Base) -->
    <img
      src="/page-09/background.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
    />

    <!-- Right Half Solid Deep Red Book Page (Desktop) -->
    <div
      aria-hidden="true"
      class="hidden lg:block absolute inset-y-0 right-0 w-1/2 bg-[#8d090a] bg-cover bg-center pointer-events-none select-none"
      style="background-image: url('/page-09/background-kanan.png')"
    ></div>

    <!-- Top-Right Flowing Ribbon -->
    <img
      src="/page-09/pita-kanan-atas.png"
      alt=""
      aria-hidden="true"
      class="hidden lg:block absolute top-0 right-0 z-30 w-40 sm:w-56 md:w-72 lg:w-88 xl:w-[34vw] max-w-[680px] h-auto pointer-events-none select-none animate-float-slow"
    />

    <!-- Main Two-Page Book Spread -->
    <div class="relative z-10 flex-1 w-full grid grid-cols-1 lg:grid-cols-2">
      <!-- Center Spiral Binder Rings (Desktop Vertical, Full Height to Bottom Border) -->
      <div
        aria-hidden="true"
        class="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 xl:w-12 z-20 pointer-events-none select-none"
        style="
          background-image: url('/page-09/tengah-tengah.png');
          background-repeat: repeat-y;
          background-size: 100% auto;
          background-position: top center;
        "
      ></div>

      <!-- Left / Top Page: Scrapbook Collage -->
      <div
        class="relative flex items-center justify-center px-6 sm:px-10 lg:px-14 pt-16 lg:pt-16 pb-16 lg:pb-24"
      >
        <div
          ref="leftRef"
          :class="[
            'relative w-full max-w-[340px] sm:max-w-[460px] md:max-w-[520px] lg:max-w-[540px] xl:max-w-[650px] aspect-[780/740] reveal-base',
            leftVisible ? 'reveal-visible' : '',
          ]"
        >
          <!-- Vintage Handwritten Stamp Paper -->
          <img
            src="/page-09/background-kecil.png"
            alt=""
            aria-hidden="true"
            class="absolute left-0 top-[9%] w-[42%] h-auto z-10 pointer-events-none select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.28)]"
          />

          <!-- Main Polaroid with Olive Clip -->
          <div
            class="absolute left-[7%] top-[3%] w-[82%] z-20 transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.02] hover:z-40 active:-translate-y-2 active:-rotate-1 active:scale-[1.02] active:z-40 cursor-pointer"
          >
            <img
              src="/page-09/foto-1.png"
              alt="Core memory dengan buket bunga biru"
              class="w-full h-auto select-none drop-shadow-[0_16px_28px_rgba(0,0,0,0.35)]"
            />
          </div>

          <!-- Top-Right Small Stamp Photo -->
          <div
            class="absolute right-[1%] top-[10%] w-[31%] z-30 transition-transform duration-300 hover:-translate-y-2 hover:rotate-3 hover:scale-[1.05] hover:z-40 active:-translate-y-2 active:rotate-3 active:scale-[1.05] active:z-40 cursor-pointer"
          >
            <img
              src="/page-09/foto-3.png"
              alt="Core memory malam hari"
              class="w-full h-auto select-none drop-shadow-[0_12px_20px_rgba(0,0,0,0.34)]"
            />
          </div>

          <!-- Bottom-Left Stamp Photo -->
          <div
            class="absolute left-[2%] bottom-[8%] w-[39%] z-30 transition-transform duration-300 hover:-translate-y-2 hover:-rotate-3 hover:scale-[1.05] hover:z-40 active:-translate-y-2 active:-rotate-3 active:scale-[1.05] active:z-40 cursor-pointer"
          >
            <img
              src="/page-09/foto-2.png"
              alt="Core memory berpose lucu"
              class="w-full h-auto select-none drop-shadow-[0_12px_22px_rgba(0,0,0,0.34)]"
            />
          </div>

          <!-- Red Gingham Bow -->
          <img
            src="/page-01/pita-merah.png"
            alt=""
            aria-hidden="true"
            class="absolute left-[28%] bottom-[3%] w-[26%] h-auto z-40 pointer-events-none select-none drop-shadow-[0_8px_14px_rgba(0,0,0,0.32)] animate-float-gentle"
          />
        </div>

        <!-- Mobile/Tablet Horizontal Spiral Binder Seam -->
        <div
          aria-hidden="true"
          class="lg:hidden absolute bottom-0 inset-x-0 translate-y-1/2 h-9 sm:h-10 z-20 overflow-hidden pointer-events-none select-none"
        >
          <div
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 w-9 sm:w-10 h-[1100px]"
            style="
              background-image: url('/page-09/tengah-tengah.png');
              background-repeat: repeat-y;
              background-size: 100% auto;
              background-position: top center;
            "
          ></div>
        </div>
      </div>

      <!-- Right / Bottom Page: "Core Memories" -->
      <div
        class="relative flex items-center justify-center px-6 sm:px-10 lg:px-16 pt-20 sm:pt-24 lg:pt-16 pb-20 lg:pb-24 bg-[#8d090a] lg:bg-transparent overflow-hidden"
      >
        <!-- Mobile Top-Right Ribbon inside Solid Red Block -->
        <img
          src="/page-09/pita-kanan-atas.png"
          alt=""
          aria-hidden="true"
          class="lg:hidden absolute top-0 right-0 z-20 w-36 sm:w-52 h-auto pointer-events-none select-none animate-float-slow"
        />

        <div
          ref="rightRef"
          :class="[
            'relative z-10 flex flex-col items-center text-center max-w-[540px] reveal-base',
            rightVisible ? 'reveal-visible' : '',
          ]"
          style="transition-delay: 150ms"
        >
          <h2
            class="font-script text-[#f6f1e3] text-[2.9rem] sm:text-[3.9rem] lg:text-[4.3rem] xl:text-[5.2rem] leading-[1.12] font-normal drop-shadow-[0_4px_12px_rgba(0,0,0,0.22)] select-none"
          >
            Core Memories
          </h2>

          <p
            class="font-script text-[#f6f1e3]/95 text-[1.45rem] sm:text-[1.95rem] lg:text-[2.15rem] xl:text-[2.5rem] leading-[1.28] mt-5 sm:mt-7"
          >
            A curated collection of the days that turned into our favorite stories.
          </p>
        </div>
      </div>
    </div>

    <SectionBottomBorder
      lace-src="/page-09/dekorasi-bawah.png"
      plaid-src="/page-09/dekorasi-bawah-2.png"
      class="z-30"
    />
  </section>
</template>
