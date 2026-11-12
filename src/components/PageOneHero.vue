<script setup>
import SectionBottomBorder from './SectionBottomBorder.vue'

const emit = defineEmits(['cta-click'])

const handleCtaClick = () => {
  emit('cta-click')
  const nextSection = document.getElementById('page-02')
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    id="page-01"
    class="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between bg-[#7b0b0c]"
  >
    <!-- Red Gingham Background -->
    <img
      src="/page-01/background.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
    />

    <!-- Corner Cream Ribbons -->
    <img
      src="/page-01/pita.png"
      alt=""
      aria-hidden="true"
      class="absolute top-[3%] left-[2%] z-20 w-20 sm:w-28 md:w-36 lg:w-48 xl:w-64 max-w-[280px] h-auto -scale-x-100 pointer-events-none select-none"
    />
    <img
      src="/page-01/pita.png"
      alt=""
      aria-hidden="true"
      class="absolute top-[3%] right-[2%] z-20 w-20 sm:w-28 md:w-36 lg:w-48 xl:w-64 max-w-[280px] h-auto pointer-events-none select-none"
    />

    <!-- Main Hero Content -->
    <div
      class="relative z-10 flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-20 sm:pt-24 lg:pt-12 pb-16 sm:pb-24 flex items-center"
    >
      <div class="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-4">
        <!-- Left Column: Title, Subtitle, CTA Button -->
        <div class="lg:col-span-6 flex flex-col items-center text-center">
          <img
            src="/page-01/kata-happy-birthday.png"
            alt="Happy Birthday"
            class="w-[82%] max-w-[330px] sm:max-w-[440px] lg:max-w-[520px] xl:max-w-[590px] h-auto select-none drop-shadow-[0_6px_18px_rgba(0,0,0,0.22)] animate-float-slow"
          />

          <p
            class="font-sans text-[#f6f1e3] text-lg sm:text-xl lg:text-[1.45rem] font-normal tracking-wide mt-4 sm:mt-5"
          >
            For my lovely Girl
          </p>

          <button
            type="button"
            @click="handleCtaClick"
            class="relative z-30 touch-manipulation min-h-[44px] mt-6 sm:mt-8 inline-flex items-center justify-center rounded-full bg-[#f6f1e3] text-[#851011] font-sans font-medium text-sm sm:text-base lg:text-lg tracking-[0.06em] uppercase px-11 sm:px-14 py-3 sm:py-3.5 shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95 cursor-pointer"
          >
            MY LOVE
          </button>
        </div>

        <!-- Right Column: Stamp Photo Collage & Name Note -->
        <div class="lg:col-span-6 flex justify-center items-center">
          <div
            class="relative w-[310px] sm:w-[440px] md:w-[500px] lg:w-[530px] xl:w-[640px] aspect-[660/640]"
          >
            <!-- Big Stamp Frame + Photo 1 -->
            <div
              class="absolute right-[3%] top-[5%] w-[78%] aspect-[557/571] z-10 transition-transform duration-500 hover:scale-[1.015]"
            >
              <div class="absolute inset-[9.5%] rotate-[3.2deg] overflow-hidden bg-[#ebe5d5]">
                <img
                  src="/page-01/IMG-20260625-WA0002.jpg"
                  alt="Foto utama Syafira Ramadhani"
                  class="w-full h-full object-cover object-center"
                />
              </div>
              <img
                src="/page-01/bingkai-foto-besar.png"
                alt=""
                aria-hidden="true"
                class="relative z-10 w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_14px_24px_rgba(0,0,0,0.32)]"
              />
            </div>

            <!-- Red Gingham Bow on Big Frame Top-Left -->
            <img
              src="/page-01/pita-merah.png"
              alt=""
              aria-hidden="true"
              class="absolute z-30 w-[35%] left-[12%] -top-[1%] -rotate-[3deg] pointer-events-none select-none drop-shadow-[0_6px_12px_rgba(0,0,0,0.28)] animate-float-gentle"
            />

            <!-- Small Stamp Frame + Photo 2 + Wax Seal anchored to frame border -->
            <div
              class="absolute left-[1%] bottom-[12%] w-[41%] aspect-[283/289] z-20 transition-transform duration-500 hover:scale-[1.03]"
            >
              <div class="absolute inset-[11.5%] -rotate-[9.4deg] overflow-hidden bg-[#ebe5d5]">
                <img
                  src="/page-01/IMG-20260707-WA0000.jpg"
                  alt="Foto kedua Syafira Ramadhani"
                  class="w-full h-full object-cover object-center"
                />
              </div>
              <img
                src="/page-01/bingkai-foto-kecil.png"
                alt=""
                aria-hidden="true"
                class="relative z-10 w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.32)]"
              />
              <!-- Wax Seal placed on top edge of frame so face & eyes remain clear -->
              <img
                src="/page-01/cap-bunga.png"
                alt=""
                aria-hidden="true"
                class="absolute z-30 w-[34%] left-[44%] -translate-x-1/2 -top-[15%] pointer-events-none select-none drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]"
              />
            </div>

            <!-- Cream Sticky Note with Name -->
            <div
              class="absolute right-[0%] -bottom-[3%] w-[58%] aspect-[461/398] z-30 transition-transform duration-500 hover:-rotate-1"
            >
              <img
                src="/page-01/kertas-nama.png"
                alt=""
                aria-hidden="true"
                class="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_10px_22px_rgba(0,0,0,0.28)]"
              />
              <div
                class="absolute inset-x-[10%] top-[22%] bottom-[16%] flex flex-col items-center justify-center text-center"
              >
                <span
                  class="font-script text-[#851011] text-[2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.3rem] xl:text-[3.9rem] leading-[0.95] select-none"
                >
                  Syafira
                </span>
                <span
                  class="font-script text-[#851011] text-[2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.3rem] xl:text-[3.9rem] leading-[0.95] mt-1 select-none"
                >
                  Ramadhani
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SectionBottomBorder
      lace-src="/page-01/dekorasi-bawah.png"
      plaid-src="/page-01/dekorasi-bawah-2.png"
    />
  </section>
</template>
