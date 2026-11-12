<script setup>
import { ref, onUnmounted } from 'vue'
import PageOneHero from './components/PageOneHero.vue'
import PageTwoLetter from './components/PageTwoLetter.vue'
import PageThreeMemo from './components/PageThreeMemo.vue'
import PageFourLevelingUp from './components/PageFourLevelingUp.vue'
import PageFiveFunMoment from './components/PageFiveFunMoment.vue'
import PageSixGift from './components/PageSixGift.vue'
import PageSevenVideo from './components/PageSevenVideo.vue'
import PageEightCoreMemories from './components/PageEightCoreMemories.vue'
import PageNineCoreMemories from './components/PageNineCoreMemories.vue'
import PageTenBestWishes from './components/PageTenBestWishes.vue'

const audioRef = ref(null)
const isPlaying = ref(false)
const hasStartedMusic = ref(false)

const startMusic = async () => {
  if (!audioRef.value) return
  try {
    if (audioRef.value.paused) {
      await audioRef.value.play()
      isPlaying.value = true
      hasStartedMusic.value = true
    }
  } catch {
    // Ignore autoplay restriction errors; user can use floating toggle
  }
}

const pauseMusic = () => {
  if (audioRef.value && !audioRef.value.paused) {
    audioRef.value.pause()
    isPlaying.value = false
  }
}

const toggleMusic = async () => {
  if (!audioRef.value) return
  if (audioRef.value.paused) {
    await startMusic()
  } else {
    audioRef.value.pause()
    isPlaying.value = false
  }
}

onUnmounted(() => {
  audioRef.value?.pause()
})
</script>

<template>
  <main class="w-full min-h-screen overflow-x-hidden">
    <!-- Halaman 1: Hero -->
    <PageOneHero @cta-click="startMusic" />

    <!-- Halaman 2: Ucapan & Scrapbook Chapter 22 -->
    <PageTwoLetter />

    <!-- Halaman 3: Our Story & Our Memo -->
    <PageThreeMemo />

    <!-- Halaman 4: Leveling Up -->
    <PageFourLevelingUp />

    <!-- Halaman 5: Fun Moment -->
    <PageFiveFunMoment />

    <!-- Halaman 6: Birthday Gift -->
    <PageSixGift />

    <!-- Halaman 7: Video -->
    <PageSevenVideo @video-play="pauseMusic" />

    <!-- Halaman 8: Core Memories -->
    <PageEightCoreMemories />

    <!-- Halaman 9: Core Memories (Collection) -->
    <PageNineCoreMemories />

    <!-- Halaman 10: Best Wishes -->
    <PageTenBestWishes />

    <!-- Halaman 11 akan dilanjutkan di bawah ini -->

    <!-- Background Music -->
    <audio
      ref="audioRef"
      src="/Tiara Andini - Tulang dan Nadi (Official Visualizer).mp3"
      loop
      preload="metadata"
      @ended="isPlaying = false"
    />

    <!-- Floating Music Toggle -->
    <button
      type="button"
      @click="toggleMusic"
      :aria-label="isPlaying ? 'Jeda musik' : 'Putar musik'"
      class="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[#f6f1e3]/95 text-[#851011] px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.3)] backdrop-blur-sm border border-[#851011]/15 font-sans text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
    >
      <span class="relative flex h-2.5 w-2.5">
        <span
          v-if="isPlaying"
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#851011] opacity-75"
        ></span>
        <span
          class="relative inline-flex rounded-full h-2.5 w-2.5"
          :class="isPlaying ? 'bg-[#851011]' : 'bg-[#851011]/45'"
        ></span>
      </span>
      <span>{{ isPlaying ? 'Music On' : hasStartedMusic ? 'Paused' : 'Play Song' }}</span>
    </button>
  </main>
</template>
