<script setup>
import { computed, ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import SectionBottomBorder from './SectionBottomBorder.vue'

const props = defineProps({
  videoSrc: {
    type: String,
    default: '/page-07/video.mp4',
  },
})

const emit = defineEmits(['video-play'])

const { targetRef: titleRef, isVisible: titleVisible } = useScrollReveal(0.01)
const videoUnavailable = ref(false)
const resolvedVideoSrc = computed(() =>
  props.videoSrc.includes('#') ? props.videoSrc : `${props.videoSrc}#t=0.1`
)

const handleVideoError = () => {
  videoUnavailable.value = true
}

const handleVideoPlay = () => {
  emit('video-play')
}
</script>

<template>
  <section
    id="page-07"
    class="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between bg-[#7b0b0c]"
  >
    <!-- Red Gingham Background -->
    <img
      src="/page-07/background.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
    />

    <!-- Corner Ribbons -->
    <img
      src="/page-07/pita-kiri-atas.png"
      alt=""
      aria-hidden="true"
      class="absolute top-[3%] left-[2%] z-20 w-20 sm:w-28 md:w-36 lg:w-48 xl:w-64 max-w-[280px] h-auto pointer-events-none select-none"
    />
    <img
      src="/page-07/pita-kanan-atas.png"
      alt=""
      aria-hidden="true"
      class="absolute top-[3%] right-[2%] z-20 w-20 sm:w-28 md:w-36 lg:w-48 xl:w-64 max-w-[280px] h-auto pointer-events-none select-none"
    />

    <!-- Main Content -->
    <div
      class="relative z-10 flex-1 w-full max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-16 pt-20 sm:pt-24 lg:pt-12 pb-16 sm:pb-24 flex flex-col items-center justify-center"
    >
      <h2
        ref="titleRef"
        :class="[
          'font-script text-[#f6f1e3] text-[2.8rem] sm:text-[3.8rem] lg:text-[4.4rem] xl:text-[5rem] leading-[1.1] font-normal text-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.22)] select-none mb-3 sm:mb-4 reveal-base',
          titleVisible ? 'reveal-visible' : '',
        ]"
      >
        Video
      </h2>

      <!-- Vintage Paperclip Frame + Video Slot -->
      <div
        class="relative w-full max-w-[350px] sm:max-w-[540px] md:max-w-[680px] lg:max-w-[780px] xl:max-w-[880px] aspect-[1178/805] sm:-translate-x-[3%]"
      >
        <img
          src="/page-07/bingkai-video.png"
          alt=""
          aria-hidden="true"
          class="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_16px_28px_rgba(0,0,0,0.34)]"
        />

        <!-- Inner Video Container aligned inside scalloped cream paper -->
        <div
          class="absolute left-[14.5%] right-[5.5%] top-[17%] bottom-[5.5%] z-10 rounded-lg overflow-hidden bg-[#2a0708]/90 shadow-inner flex items-center justify-center"
        >
          <video
            v-if="!videoUnavailable"
            :src="resolvedVideoSrc"
            controls
            playsinline
            webkit-playsinline="true"
            preload="metadata"
            class="w-full h-full object-contain bg-black"
            @error="handleVideoError"
            @play="handleVideoPlay"
          />

          <!-- Fallback Placeholder when video file is not yet added -->
          <div
            v-else
            class="w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-8 bg-gradient-to-br from-[#7b0b0c]/95 via-[#5d0809]/95 to-[#3d0506]/95 border border-[#f6f1e3]/20"
          >
            <div
              class="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#f6f1e3]/15 border border-[#f6f1e3]/40 flex items-center justify-center mb-3 sm:mb-4 shadow-md"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 sm:w-8 sm:h-8 text-[#f6f1e3] translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
            </div>
            <p class="font-script text-[#f6f1e3] text-2xl sm:text-4xl leading-tight">
              Special Video
            </p>
            <p class="font-sans text-[#f6f1e3]/80 text-[11px] sm:text-sm mt-1.5 max-w-xs">
              Video kenangan spesial akan tampil di sini (letakkan file di
              <code class="px-1.5 py-0.5 rounded bg-black/30 text-[#f6f1e3]">public/page-07/video.mp4</code>)
            </p>
          </div>
        </div>
      </div>
    </div>

    <SectionBottomBorder
      lace-src="/page-07/dekorasi-bawah.png"
      plaid-src="/page-07/dekorasi-bawah-2.png"
    />
  </section>
</template>

