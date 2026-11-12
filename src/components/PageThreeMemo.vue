<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import SectionBottomBorder from './SectionBottomBorder.vue'

const { targetRef: leftRef, isVisible: leftVisible } = useScrollReveal(0.08)
const { targetRef: rightRef, isVisible: rightVisible } = useScrollReveal(0.08)
</script>

<template>
  <section
    id="page-03"
    class="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between bg-[#7b0b0c]"
  >
    <!-- Red Gingham Background -->
    <img
      src="/page-03/background.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
    />

    <!-- Top Corner Ribbons -->
    <img
      src="/page-03/pita-kiri-atas.png"
      alt=""
      aria-hidden="true"
      class="absolute top-[3%] left-[2%] z-20 w-20 sm:w-28 md:w-36 lg:w-48 xl:w-64 max-w-[280px] h-auto pointer-events-none select-none"
    />
    <img
      src="/page-03/pita-kanan-atas.png"
      alt=""
      aria-hidden="true"
      class="absolute top-[3%] right-[2%] z-20 w-20 sm:w-28 md:w-36 lg:w-48 xl:w-64 max-w-[280px] h-auto pointer-events-none select-none"
    />

    <!-- Main Content -->
    <div
      class="relative z-10 flex-1 w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 pt-20 sm:pt-24 lg:pt-14 pb-16 sm:pb-24 flex items-center"
    >
      <div class="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-6">
        <!-- Left Column: Envelope, Rose, Wax Seal & "Our Story" Card -->
        <div
          ref="leftRef"
          :class="[
            'lg:col-span-6 flex justify-center items-center reveal-base',
            leftVisible ? 'reveal-visible' : '',
          ]"
        >
          <div
            class="relative w-full max-w-[350px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[540px] xl:max-w-[660px] aspect-[780/680]"
          >
            <!-- Craft Paper Envelope -->
            <img
              src="/page-03/amplop.png"
              alt=""
              aria-hidden="true"
              class="absolute left-0 top-[2%] w-[64%] h-auto z-10 pointer-events-none select-none drop-shadow-[0_14px_24px_rgba(0,0,0,0.34)]"
            />

            <!-- Red Rose -->
            <img
              src="/page-03/bunga.png"
              alt="Mawar Merah"
              class="absolute right-[9%] top-[7%] w-[38%] h-auto z-20 pointer-events-none select-none drop-shadow-[0_10px_18px_rgba(0,0,0,0.3)] animate-float-gentle"
            />

            <!-- Scalloped Cream Story Note (Container Query for Crisp Scaling) -->
            <div
              class="@container absolute right-[1%] bottom-[2%] w-[78%] aspect-[574/416] z-30 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <img
                src="/page-03/background-catatan.png"
                alt=""
                aria-hidden="true"
                class="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_14px_26px_rgba(0,0,0,0.3)]"
              />

              <!-- Wax Seal anchored outside text padding on top-left corner of note -->
              <img
                src="/page-03/cap-bunga.png"
                alt=""
                aria-hidden="true"
                class="absolute -left-[12%] -top-[12%] w-[23%] h-auto z-40 pointer-events-none select-none drop-shadow-[0_8px_14px_rgba(0,0,0,0.38)]"
              />

              <div
                class="absolute inset-0 pl-[13%] pr-[8.5%] pt-[9%] pb-[8%] flex flex-col justify-center"
              >
                <h3
                  class="font-script text-[#851011] text-[8.8cqw] leading-none text-center mb-[2.4cqw] select-none"
                >
                  Our Story
                </h3>
                <p
                  class="font-sans text-[#6e1516] text-[3.35cqw] leading-[1.38] text-left"
                >
                  Jujur aku seneng banget bisa ketemu perempuan, cantik, baik, nurut, pinter,
                  pinter masak dan sepengertian kamu. Semoga kamu juga merasa bahagia ya bersama
                  aku. Hari hari yang dilewatin bareng kamu terasa cepat karna kita terlalu
                  bahagia, rasanya semua waktu yang ada masih kurang untuk kita terus bersama. Aku
                  Sayang dan Cinta kamuu...
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: "Our Memo", Wide Polaroid & Photobooth Strip -->
        <div
          ref="rightRef"
          :class="[
            'lg:col-span-6 flex flex-col items-center justify-center reveal-base',
            rightVisible ? 'reveal-visible' : '',
          ]"
          style="transition-delay: 180ms"
        >
          <div
            class="relative w-full max-w-[340px] sm:max-w-[460px] md:max-w-[510px] lg:max-w-[510px] xl:max-w-[610px] aspect-[740/650]"
          >
            <!-- "Our Memo" Title Positioned Cleanly Left of Photobooth Strip -->
            <h2
              class="font-script text-[#f6f1e3] text-[2.6rem] sm:text-[3.7rem] md:text-[4.2rem] lg:text-[4.1rem] xl:text-[4.9rem] leading-[1.1] text-center pr-[19%] pt-[3%] drop-shadow-[0_4px_12px_rgba(0,0,0,0.22)] select-none"
            >
              Our Memo
            </h2>

            <!-- Wide Polaroid Photo -->
            <div
              class="absolute left-0 bottom-[6%] w-[78%] z-10 transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.03] hover:z-30 active:-translate-y-2 active:-rotate-1 active:scale-[1.03] active:z-30 cursor-pointer"
            >
              <img
                src="/page-03/foto-1.png"
                alt="Kenangan bersama Syafira"
                class="w-full h-auto select-none drop-shadow-[0_14px_26px_rgba(0,0,0,0.35)]"
              />
            </div>

            <!-- Vertical Photobooth Strip -->
            <div
              class="absolute right-[1%] top-[2%] w-[31%] z-20 transition-transform duration-300 hover:-translate-y-2 hover:rotate-2 hover:scale-[1.04] hover:z-30 active:-translate-y-2 active:rotate-2 active:scale-[1.04] active:z-30 cursor-pointer"
            >
              <img
                src="/page-03/foto-2.png"
                alt="Photobooth strip kenangan bersama Syafira"
                class="w-full h-auto select-none drop-shadow-[0_14px_26px_rgba(0,0,0,0.38)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <SectionBottomBorder
      lace-src="/page-03/dekorasi-bawah.png"
      plaid-src="/page-03/dekorasi-bawah-2.png"
    />
  </section>
</template>
