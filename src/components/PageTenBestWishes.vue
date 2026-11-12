<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import SectionBottomBorder from './SectionBottomBorder.vue'

const { targetRef: leftRef, isVisible: leftVisible } = useScrollReveal(0.01)
const { targetRef: rightRef, isVisible: rightVisible } = useScrollReveal(0.01)
</script>

<template>
  <section
    id="page-10"
    class="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between bg-[#7b0b0c]"
  >
    <!-- Red Gingham Background -->
    <img
      src="/page-10/background.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
    />

    <!-- Top-Left Floral Sprig -->
    <img
      src="/page-10/bunga-kiri-atas.png"
      alt=""
      aria-hidden="true"
      class="absolute top-[2%] -left-[5%] sm:-left-[2%] z-20 w-24 sm:w-36 md:w-44 lg:w-52 xl:w-64 h-auto pointer-events-none select-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.28)]"
    />

    <!-- Bottom-Right Floral Sprig Overlapping Border -->
    <img
      src="/page-10/bunga-kiri-atas.png"
      alt=""
      aria-hidden="true"
      class="absolute bottom-[1%] -right-[4%] sm:-right-[1%] z-30 w-24 sm:w-36 md:w-44 lg:w-52 xl:w-64 h-auto -rotate-[12deg] pointer-events-none select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.32)]"
    />

    <!-- Main Two-Page Book Spread -->
    <div class="relative z-10 flex-1 w-full grid grid-cols-1 lg:grid-cols-2">
      <!-- Center Spiral Binder Rings (Desktop Vertical, Full Height to Bottom Border) -->
      <div
        aria-hidden="true"
        class="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 xl:w-12 z-20 pointer-events-none select-none"
        style="
          background-image: url('/page-10/tengah.png');
          background-repeat: repeat-y;
          background-size: 100% auto;
          background-position: top center;
        "
      ></div>

      <!-- Left / Top Page: "Best Wishes" & Scalloped Card -->
      <div
        class="relative flex items-center justify-center px-6 sm:px-10 lg:px-14 pt-20 sm:pt-24 lg:pt-16 pb-16 lg:pb-24"
      >
        <div
          ref="leftRef"
          :class="[
            'flex flex-col items-center w-full max-w-[360px] sm:max-w-[500px] md:max-w-[560px] lg:max-w-[450px] xl:max-w-[590px] reveal-base',
            leftVisible ? 'reveal-visible' : '',
          ]"
        >
          <h2
            class="font-script text-[#f6f1e3] text-[2.9rem] sm:text-[3.9rem] lg:text-[4.2rem] xl:text-[5rem] leading-[1.12] font-normal text-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.22)] select-none mb-4 sm:mb-6"
          >
            Best Wishes
          </h2>

          <div
            class="@container relative w-full aspect-[757/548] transition-transform duration-300 hover:-translate-y-1.5"
          >
            <img
              src="/page-10/background-catatan.png"
              alt=""
              aria-hidden="true"
              class="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_14px_26px_rgba(0,0,0,0.3)]"
            />
            <div class="absolute inset-0 px-[7.5%] py-[7%] flex items-center">
              <p class="font-sans text-[#6e1516] text-[3.35cqw] leading-[1.48] text-left">
                Selamat ulang tahun, Syafira sayang. Terima kasih sudah selalu memberi perhatian dan
                usaha tulus buat aku, aku bersyukur banget punya kamu. Semoga di usia yang baru ini,
                semua urusan kuliah dan impianmu dimudahkan, serta hatimu selalu dikuatkan saat
                hari terasa berat. Jangan pernah merasa sendirian lagi ya, karena aku akan selalu
                ada di sini menggenggam tanganmu dan jadi rumah paling aman buat kamu pulang.
                Selamat bertambah usia, cintaku, mari kita lewati tahun-tahun berikutnya sama-sama.
              </p>
            </div>
          </div>
        </div>

        <!-- Mobile/Tablet Horizontal Spiral Binder Seam -->
        <div
          aria-hidden="true"
          class="lg:hidden absolute bottom-0 inset-x-0 translate-y-1/2 h-9 sm:h-10 z-20 overflow-hidden pointer-events-none select-none"
        >
          <div
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 w-9 sm:w-10 h-[1100px]"
            style="
              background-image: url('/page-10/tengah.png');
              background-repeat: repeat-y;
              background-size: 100% auto;
              background-position: top center;
            "
          ></div>
        </div>
      </div>

      <!-- Right / Bottom Page: Polaroids, Handwritten Paper & Rose Collage -->
      <div
        class="relative flex items-center justify-center px-6 sm:px-10 lg:px-14 pt-14 lg:pt-16 pb-16 sm:pb-24"
      >
        <div
          ref="rightRef"
          :class="[
            'relative w-full max-w-[340px] sm:max-w-[460px] md:max-w-[520px] lg:max-w-[490px] xl:max-w-[600px] aspect-[680/680] reveal-base',
            rightVisible ? 'reveal-visible' : '',
          ]"
          style="transition-delay: 160ms"
        >
          <!-- Top-Center Polaroid -->
          <div
            class="absolute left-[11%] top-[2%] w-[56%] z-10 transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.03] hover:z-40 active:-translate-y-2 active:-rotate-1 active:scale-[1.03] active:z-40 cursor-pointer"
          >
            <img
              src="/page-10/foto-1.png"
              alt="Foto polaroid Syafira tersenyum"
              class="w-full h-auto select-none drop-shadow-[0_14px_24px_rgba(0,0,0,0.34)]"
            />
          </div>

          <!-- Cream Wavy Postmark Lines -->
          <img
            src="/page-10/elemen-angin.png"
            alt=""
            aria-hidden="true"
            class="absolute right-[5%] top-[21%] w-[30%] h-auto z-10 pointer-events-none select-none opacity-90"
          />

          <!-- Vintage Handwritten Stamp Paper -->
          <img
            src="/page-10/background-foto.png"
            alt=""
            aria-hidden="true"
            class="absolute left-[11%] bottom-[8%] w-[45%] h-auto z-20 pointer-events-none select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.28)]"
          />

          <!-- Red Rose -->
          <img
            src="/page-10/bunga-foto.png"
            alt="Mawar Merah"
            class="absolute left-[9%] bottom-[6%] w-[44%] h-auto z-30 pointer-events-none select-none drop-shadow-[0_10px_18px_rgba(0,0,0,0.3)] animate-float-gentle"
          />

          <!-- Bottom-Right Polaroid -->
          <div
            class="absolute right-[5%] bottom-[13%] w-[58%] z-30 transition-transform duration-300 hover:-translate-y-2 hover:rotate-2 hover:scale-[1.03] hover:z-40 active:-translate-y-2 active:rotate-2 active:scale-[1.03] active:z-40 cursor-pointer"
          >
            <img
              src="/page-10/foto-2.png"
              alt="Foto polaroid Syafira melambai"
              class="w-full h-auto select-none drop-shadow-[0_14px_26px_rgba(0,0,0,0.36)]"
            />
          </div>
        </div>
      </div>
    </div>

    <SectionBottomBorder
      lace-src="/page-10/dekorasi-bawah.png"
      plaid-src="/page-10/dekorasi-bawah-2.png"
      class="z-30"
    />
  </section>
</template>
