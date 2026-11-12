<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import SectionBottomBorder from './SectionBottomBorder.vue'

const { targetRef: leftRef, isVisible: leftVisible } = useScrollReveal(0.08)
const { targetRef: rightRef, isVisible: rightVisible } = useScrollReveal(0.08)
</script>

<template>
  <section
    id="page-02"
    class="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between bg-[#7b0b0c]"
  >
    <!-- Red Gingham Background -->
    <img
      src="/page-02/background.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
    />

    <!-- Top-Left Flowing Ribbon -->
    <img
      src="/page-02/pita-kiri-atas.png"
      alt=""
      aria-hidden="true"
      class="absolute top-0 left-0 z-20 w-36 sm:w-52 md:w-64 lg:w-80 xl:w-[27vw] max-w-[520px] h-auto pointer-events-none select-none animate-float-slow"
    />

    <!-- Main Letter & Scrapbook Content -->
    <div
      class="relative z-10 flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-28 sm:pt-36 lg:pt-16 pb-16 sm:pb-24 flex items-center"
    >
      <div class="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
        <!-- Left Column: Birthday Letter -->
        <div
          ref="leftRef"
          :class="[
            'lg:col-span-6 flex flex-col items-start text-left reveal-base',
            leftVisible ? 'reveal-visible' : '',
          ]"
        >
          <h2
            class="font-script text-[#f6f1e3] text-[2.45rem] sm:text-[3.2rem] lg:text-[3.5rem] xl:text-[4.15rem] leading-[1.15] font-normal drop-shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
          >
            Happy Birthday Syafira
          </h2>

          <p
            class="font-sans text-[#f6f1e3]/95 text-sm sm:text-base lg:text-[1.12rem] xl:text-[1.22rem] leading-[1.65] font-normal mt-5 sm:mt-7 max-w-[640px]"
          >
            Halo sayang, selamat hari ulang tahun ya untuk yang ke 22 ini. Aku bangga sama kamu
            bisa sampai sejauh ini. Semoga hal-hal baik terus berdatangan untuk kamu, semoga kamu
            diberi kesehatan, kemudah, kelancara, rezeki dan selalu berada dalam lindungan Allah Swt.
            Aku seneng sekali ditahun ini kita bertemu dan disatukan kembali semoga aku jadi
            penyemangat hidup kamu ya
          </p>

          <p
            class="font-sans text-[#f6f1e3] text-sm sm:text-base lg:text-[1.12rem] xl:text-[1.22rem] mt-6 sm:mt-8"
          >
            <span>All my love,</span>
            <span class="font-bold ml-6">Daniel Hulio</span>
          </p>
        </div>

        <!-- Right Column: Notebook Scrapbook Collage -->
        <div
          ref="rightRef"
          :class="[
            'lg:col-span-6 flex justify-center items-center reveal-base',
            rightVisible ? 'reveal-visible' : '',
          ]"
          style="transition-delay: 180ms"
        >
          <div
            class="relative w-[310px] sm:w-[440px] md:w-[500px] lg:w-[500px] xl:w-[590px] aspect-[700/810]"
          >
            <!-- Torn Lined Notebook Paper -->
            <img
              src="/page-02/kertas.png"
              alt=""
              aria-hidden="true"
              class="absolute left-0 bottom-0 w-[91%] h-auto z-10 pointer-events-none select-none drop-shadow-[0_14px_28px_rgba(0,0,0,0.32)]"
            />

            <!-- Pink Dotted Ribbon Across Top of Notebook -->
            <img
              src="/page-02/pita.png"
              alt=""
              aria-hidden="true"
              class="absolute left-[6%] top-[9.5%] w-[78%] h-auto z-20 pointer-events-none select-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.18)]"
            />

            <!-- Chapter 22 Sticky Note (Top-Right) -->
            <div
              class="absolute right-0 top-0 w-[41%] aspect-[286/319] z-30 transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-2 hover:scale-[1.04] active:-translate-y-1.5 active:rotate-2 active:scale-[1.04] animate-sway-soft cursor-pointer"
            >
              <img
                src="/page-02/catatan-kecil.png"
                alt=""
                aria-hidden="true"
                class="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.24)]"
              />
              <img
                src="/page-02/catatan-kecil-kata-kata.png"
                alt="Chapter 22 - May this new chapter be your most iconic and golden era yet."
                class="absolute left-1/2 -translate-x-1/2 top-[27%] w-[88%] h-auto pointer-events-none select-none"
              />
            </div>

            <!-- Pink Wavy Postmark Lines -->
            <img
              src="/page-02/elemen-angin.png"
              alt=""
              aria-hidden="true"
              class="absolute right-[7%] top-[42%] w-[31%] h-auto z-20 pointer-events-none select-none opacity-90"
            />

            <!-- Polaroid 1 (Center-Left) -->
            <div
              class="absolute left-[10%] top-[23%] w-[47%] z-20 transition-transform duration-300 hover:-translate-y-2 hover:-rotate-3 hover:scale-[1.05] hover:z-40 active:-translate-y-2 active:-rotate-3 active:scale-[1.05] active:z-40 cursor-pointer"
            >
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#e6d5b8]/95 absolute -top-2 left-1/2 -translate-x-1/2 z-0 shadow-xs"
              ></div>
              <img
                src="/page-02/foto-polaroid.png"
                alt="Foto polaroid Syafira 1"
                class="relative z-10 w-full h-auto select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.22)]"
              />
            </div>

            <!-- Peonies Stamp (Bottom-Left) -->
            <img
              src="/page-02/materai-bunga.png"
              alt="Peonies 20 Stamp"
              class="absolute left-[21%] bottom-[5%] w-[23%] h-auto z-20 pointer-events-none select-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.14)]"
            />

            <!-- Polaroid 2 (Bottom-Right) -->
            <div
              class="absolute right-[5%] bottom-[13%] w-[49%] z-30 transition-transform duration-300 hover:-translate-y-2 hover:rotate-3 hover:scale-[1.05] hover:z-40 active:-translate-y-2 active:rotate-3 active:scale-[1.05] active:z-40 cursor-pointer"
            >
              <img
                src="/page-02/foto-polaroid-2.png"
                alt="Foto polaroid Syafira 2"
                class="w-full h-auto select-none drop-shadow-[0_12px_22px_rgba(0,0,0,0.26)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <SectionBottomBorder
      lace-src="/page-02/dekorasi-bawah.png"
      plaid-src="/page-02/dekorasi-bawah-2.png"
    />
  </section>
</template>
