<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import SectionBottomBorder from './SectionBottomBorder.vue'

const { targetRef: leftRef, isVisible: leftVisible } = useScrollReveal(0.08)
const { targetRef: rightRef, isVisible: rightVisible } = useScrollReveal(0.08)
</script>

<template>
  <section
    id="page-05"
    class="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between bg-[#7b0b0c]"
  >
    <!-- Red Gingham Background -->
    <img
      src="/page-05/background.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
    />

    <!-- Top-Left Flowing Ribbon -->
    <img
      src="/page-05/pita-kiri-atas.png"
      alt=""
      aria-hidden="true"
      class="absolute top-0 left-0 z-20 w-40 sm:w-56 md:w-72 lg:w-96 xl:w-[34vw] max-w-[680px] h-auto pointer-events-none select-none animate-float-slow"
    />

    <!-- Main Content -->
    <div
      class="relative z-10 flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-28 sm:pt-36 lg:pt-20 pb-16 sm:pb-24 flex items-center"
    >
      <div class="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
        <!-- Left Column: Title, Compilation Subtitle & Text -->
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
            Fun Moment
          </h2>

          <h3
            class="font-sans font-bold uppercase tracking-[0.04em] text-[#f6f1e3] text-lg sm:text-xl lg:text-[1.45rem] mt-5 sm:mt-8"
          >
            COMPILATION
          </h3>

          <p
            class="font-sans text-[#f6f1e3]/95 text-sm sm:text-base lg:text-[1.14rem] xl:text-[1.24rem] leading-[1.68] font-normal mt-3 sm:mt-4 max-w-[640px]"
          >
            Ini adalah foto beberapa momen yang telah kita lalui bersama, mungkin kita sudah lupa
            tapi foto jadi buktinya. Banyak momen lain yang lebih menyenangkan dan tidak sempat
            terabadikan. Paling penting adalah kita tetap bersama dan mencintai dikala senang dan
            bahagia.
          </p>
        </div>

        <!-- Right Column: Stamp Photos, Sticky Note & Four-Leaf Clover -->
        <div
          ref="rightRef"
          :class="[
            'lg:col-span-6 flex justify-center items-center reveal-base',
            rightVisible ? 'reveal-visible' : '',
          ]"
          style="transition-delay: 180ms"
        >
          <div
            class="relative w-full max-w-[340px] sm:max-w-[460px] md:max-w-[520px] lg:max-w-[530px] xl:max-w-[640px] aspect-[760/740]"
          >
            <!-- Top-Left Stamp Photo -->
            <div
              class="absolute left-[1%] top-[3%] w-[64%] z-10 transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.03] hover:z-30 active:-translate-y-2 active:-rotate-1 active:scale-[1.03] active:z-30 cursor-pointer"
            >
              <img
                src="/page-05/foto-1.png"
                alt="Momen bersama di kebun teh"
                class="w-full h-auto select-none drop-shadow-[0_14px_24px_rgba(0,0,0,0.34)]"
              />
            </div>

            <!-- Top-Right "Did You Know ?" Sticky Note -->
            <div
              class="absolute right-[1%] top-[7%] w-[31%] z-20 transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-2 hover:scale-[1.05] active:-translate-y-1.5 active:rotate-2 active:scale-[1.05] animate-sway-soft cursor-pointer"
            >
              <img
                src="/page-05/catatan-kecil.png"
                alt="Did You Know? 22 years of being the person who always knows the best songs and the best vibes."
                class="w-full h-auto select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.28)]"
              />
            </div>

            <!-- Bottom-Right Stamp Photo -->
            <div
              class="absolute right-[4%] bottom-[7%] w-[54%] z-20 transition-transform duration-300 hover:-translate-y-2 hover:rotate-2 hover:scale-[1.03] hover:z-30 active:-translate-y-2 active:rotate-2 active:scale-[1.03] active:z-30 cursor-pointer"
            >
              <img
                src="/page-05/foto-2.png"
                alt="Momen lucu bersama Syafira"
                class="w-full h-auto select-none drop-shadow-[0_14px_26px_rgba(0,0,0,0.36)]"
              />
            </div>

            <!-- Decorative Four-Leaf Clover (SVG matching desain-halaman.png) -->
            <svg
              viewBox="0 0 260 340"
              aria-hidden="true"
              class="absolute left-[13%] -bottom-[5%] w-[37%] h-auto z-30 pointer-events-none select-none drop-shadow-[0_12px_20px_rgba(0,0,0,0.38)] animate-float-gentle"
            >
              <defs>
                <radialGradient id="cloverLeafGrad" cx="45%" cy="40%" r="65%">
                  <stop offset="0%" stop-color="#3b7a1a" />
                  <stop offset="65%" stop-color="#22570d" />
                  <stop offset="100%" stop-color="#133806" />
                </radialGradient>
                <linearGradient id="cloverStemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#7fa336" />
                  <stop offset="100%" stop-color="#d7c95c" />
                </linearGradient>
              </defs>
              <!-- Stem -->
              <path
                d="M126 142 C136 205, 134 268, 120 336"
                fill="none"
                stroke="url(#cloverStemGrad)"
                stroke-width="7.5"
                stroke-linecap="round"
              />
              <!-- Top-Left Leaf -->
              <path
                d="M125 138 C100 120, 62 110, 64 72 C65 44, 96 42, 114 68 C122 36, 152 38, 154 68 C156 96, 138 118, 125 138 Z"
                fill="url(#cloverLeafGrad)"
                transform="rotate(-26 125 138)"
              />
              <!-- Top-Right Leaf -->
              <path
                d="M125 138 C102 120, 66 108, 68 72 C70 46, 98 44, 115 69 C124 38, 154 40, 156 70 C158 98, 138 120, 125 138 Z"
                fill="url(#cloverLeafGrad)"
                transform="rotate(42 125 138)"
              />
              <!-- Bottom-Left Leaf -->
              <path
                d="M125 138 C98 120, 62 108, 64 70 C66 44, 96 44, 114 68 C124 38, 154 40, 156 70 C158 98, 138 118, 125 138 Z"
                fill="url(#cloverLeafGrad)"
                transform="rotate(-108 125 138)"
              />
              <!-- Bottom-Right Leaf -->
              <path
                d="M125 138 C100 120, 64 108, 66 72 C68 46, 96 44, 114 68 C124 38, 154 40, 156 70 C158 98, 138 118, 125 138 Z"
                fill="url(#cloverLeafGrad)"
                transform="rotate(138 125 138)"
              />
              <!-- Subtle Vein Highlights -->
              <g stroke="#508c2b" stroke-width="1.5" stroke-linecap="round" opacity="0.55">
                <line x1="125" y1="136" x2="88" y2="78" />
                <line x1="125" y1="136" x2="178" y2="92" />
                <line x1="125" y1="136" x2="68" y2="165" />
                <line x1="125" y1="136" x2="165" y2="188" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <SectionBottomBorder
      lace-src="/page-05/dekorasi-bawah.png"
      plaid-src="/page-05/dekorasi-bawah-2.png"
    />
  </section>
</template>

