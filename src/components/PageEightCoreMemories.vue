<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import SectionBottomBorder from './SectionBottomBorder.vue'

const { targetRef: leftRef, isVisible: leftVisible } = useScrollReveal(0.08)
const { targetRef: rightRef, isVisible: rightVisible } = useScrollReveal(0.08)
</script>

<template>
  <section
    id="page-08"
    class="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between bg-[#7b0b0c]"
  >
    <!-- Right Half Red Gingham Background (Full Section Base) -->
    <img
      src="/page-08/background.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
    />

    <!-- Left Half Solid Deep Red Book Page (Desktop) -->
    <div
      aria-hidden="true"
      class="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-[#8d090a] bg-cover bg-center pointer-events-none select-none"
      style="background-image: url('/page-08/background-sebelah-kiri.png')"
    ></div>

    <!-- Top-Left Flowing Ribbon -->
    <img
      src="/page-08/pita-kanan-atas.png"
      alt=""
      aria-hidden="true"
      class="absolute top-0 left-0 z-30 w-40 sm:w-56 md:w-72 lg:w-88 xl:w-[34vw] max-w-[680px] h-auto pointer-events-none select-none animate-float-slow"
    />

    <!-- Main Two-Page Book Spread -->
    <div class="relative z-10 flex-1 w-full grid grid-cols-1 lg:grid-cols-2">
      <!-- Center Spiral Binder Rings (Desktop Vertical, Full Height to Bottom Border) -->
      <div
        aria-hidden="true"
        class="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 xl:w-12 z-20 pointer-events-none select-none"
        style="
          background-image: url('/page-08/tengah-buku.png');
          background-repeat: repeat-y;
          background-size: 100% auto;
          background-position: top center;
        "
      ></div>

      <!-- Left / Top Page: "Core Memories" -->
      <div
        class="relative flex items-center justify-center px-6 sm:px-10 lg:px-16 pt-28 sm:pt-36 lg:pt-16 pb-16 lg:pb-24 bg-[#8d090a] lg:bg-transparent"
      >
        <div
          ref="leftRef"
          :class="[
            'flex flex-col items-center text-center max-w-[520px] reveal-base',
            leftVisible ? 'reveal-visible' : '',
          ]"
        >
          <h2
            class="font-script text-[#f6f1e3] text-[2.9rem] sm:text-[3.9rem] lg:text-[4.3rem] xl:text-[5.2rem] leading-[1.12] font-normal drop-shadow-[0_4px_12px_rgba(0,0,0,0.22)] select-none"
          >
            Core Memories
          </h2>

          <p
            class="font-script text-[#f6f1e3]/95 text-[1.45rem] sm:text-[1.95rem] lg:text-[2.15rem] xl:text-[2.5rem] leading-[1.28] mt-5 sm:mt-7"
          >
            To every laugh, every late night, and every moment that made us.
          </p>
        </div>

        <!-- Mobile/Tablet Horizontal Spiral Binder Seam (Vertical Flip-Book) -->
        <div
          aria-hidden="true"
          class="lg:hidden absolute bottom-0 inset-x-0 translate-y-1/2 h-9 sm:h-10 z-20 overflow-hidden pointer-events-none select-none"
        >
          <div
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 w-9 sm:w-10 h-[1100px]"
            style="
              background-image: url('/page-08/tengah-buku.png');
              background-repeat: repeat-y;
              background-size: 100% auto;
              background-position: top center;
            "
          ></div>
        </div>
      </div>

      <!-- Right / Bottom Page: Scrapbook Photos Collage -->
      <div
        class="relative flex items-center justify-center px-6 sm:px-10 lg:px-14 pt-14 lg:pt-16 pb-16 sm:pb-24"
      >
        <div
          ref="rightRef"
          :class="[
            'relative w-full max-w-[340px] sm:max-w-[460px] md:max-w-[520px] lg:max-w-[540px] xl:max-w-[640px] aspect-[780/680] reveal-base',
            rightVisible ? 'reveal-visible' : '',
          ]"
          style="transition-delay: 180ms"
        >
          <!-- Vintage Handwritten Stamp Paper -->
          <img
            src="/page-08/background-foto-1.png"
            alt=""
            aria-hidden="true"
            class="absolute left-[1%] top-[10%] w-[52%] h-auto z-10 pointer-events-none select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.28)]"
          />

          <!-- Crumpled Lined Notebook Paper -->
          <img
            src="/page-08/background-foto-2.png"
            alt=""
            aria-hidden="true"
            class="absolute right-[9%] bottom-[8%] w-[44%] h-auto z-10 pointer-events-none select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.28)]"
          />

          <!-- Wide Polaroid with Red Bow -->
          <div
            class="absolute left-[9%] top-[19%] w-[75%] z-20 transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.03] hover:z-40 active:-translate-y-2 active:-rotate-1 active:scale-[1.03] active:z-40 cursor-pointer"
          >
            <img
              src="/page-08/foto-1.png"
              alt="Core memory bersama Syafira"
              class="w-full h-auto select-none drop-shadow-[0_14px_26px_rgba(0,0,0,0.36)]"
            />
          </div>

          <!-- Red-Framed Photobooth Strip -->
          <div
            class="absolute right-[1%] top-[1%] w-[31%] z-30 transition-transform duration-300 hover:-translate-y-2 hover:rotate-2 hover:scale-[1.04] hover:z-40 active:-translate-y-2 active:rotate-2 active:scale-[1.04] active:z-40 cursor-pointer"
          >
            <img
              src="/page-08/foto-2.png"
              alt="Photobooth strip core memories"
              class="w-full h-auto select-none drop-shadow-[0_14px_26px_rgba(0,0,0,0.38)]"
            />
          </div>
        </div>
      </div>
    </div>

    <SectionBottomBorder
      lace-src="/page-08/dekorasi-bawah.png"
      plaid-src="/page-08/dekorasi-bawah-2.png"
      class="z-30"
    />
  </section>
</template>
