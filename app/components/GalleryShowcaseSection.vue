<template>
  <section class="relative py-12 md:py-20 px-6 max-w-[clamp(20rem,85vw,56rem)] mx-auto">
    <div class="text-center mb-10 md:mb-14" v-reveal>
      <span class="text-2xs font-mono uppercase tracking-widest2 text-mint-dim block mb-3">
        {{ t.gallery.eyebrow }}
      </span>
      <h2 class="font-display text-[clamp(1.85rem,2vw_+_1.4rem,2.35rem)] leading-tight text-ink">
        {{ t.gallery.title }}
      </h2>
    </div>

    <!-- Photos: click any one to open it enlarged in a lightbox -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4" v-reveal="100">
      <button
        v-for="photo in photos"
        :key="photo.src"
        type="button"
        class="group relative rounded-2xl overflow-hidden bg-paper border border-hairline"
        :class="photo.wide ? 'col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[4/5]' : 'aspect-square md:aspect-[4/5]'"
        @click="openPhoto(photo)"
      >
        <img
          :src="photo.src"
          :alt="photo.label"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300 flex items-center justify-center">
          <span class="w-10 h-10 rounded-full bg-bone/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
            <ExpandIcon class="w-4 h-4 text-ink" />
          </span>
        </div>
      </button>
    </div>

    <!-- Videos: clicking actually opens a player. Falls back gracefully until the real .mp4 files exist. -->
    <div class="grid grid-cols-2 gap-3 md:gap-4" v-reveal="160">
      <button
        v-for="video in videos"
        :key="video.poster"
        type="button"
        class="group relative aspect-video rounded-2xl overflow-hidden flex items-center justify-center"
        @click="openVideo(video)"
      >
        <img :src="video.poster" :alt="video.label" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div class="absolute inset-0 bg-ink/45" />
        <div class="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-mint flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <PlayIcon class="w-5 h-5 text-ink ml-0.5" fill="currentColor" />
        </div>
      </button>
    </div>

    <!-- Lightbox: plays the real file once it exists at /gallery/video-N.mp4; shows a clear message otherwise -->
    <Teleport to="body">
      <div v-if="lightboxOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-sm px-4" @click.self="closeVideo">
        <div class="relative w-full max-w-2xl">
          <button
            type="button"
            class="absolute -top-10 right-0 text-bone/70 hover:text-bone text-2xs font-mono uppercase tracking-wider"
            @click="closeVideo"
          >
            {{ t.gallery.close }}
          </button>

          <video
            v-if="activeVideo && videoReady"
            :src="activeVideo.mp4"
            :poster="activeVideo.poster"
            controls
            autoplay
            class="w-full aspect-video rounded-2xl bg-ink"
          />
          <div v-else-if="activeVideo" class="relative aspect-video rounded-2xl overflow-hidden">
            <img :src="activeVideo.poster" :alt="activeVideo.label" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-ink/60 flex items-center justify-center">
              <span class="text-bone/90 text-sm font-medium">{{ t.gallery.comingSoon }}</span>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Photo lightbox: opens any gallery photo at full size -->
    <Teleport to="body">
      <div
        v-if="photoLightboxOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-sm px-4"
        @click.self="closePhoto"
      >
        <div class="relative w-full max-w-3xl">
          <button
            type="button"
            class="absolute -top-10 right-0 text-bone/70 hover:text-bone text-2xs font-mono uppercase tracking-wider"
            @click="closePhoto"
          >
            {{ t.gallery.close }}
          </button>

          <img
            v-if="activePhoto"
            :src="activePhoto.src"
            :alt="activePhoto.label"
            class="w-full max-h-[80vh] object-contain rounded-2xl bg-ink"
          />
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { PlayIcon, Expand as ExpandIcon } from 'lucide-vue-next'

interface VideoItem {
  poster: string
  mp4: string
  label: string
}

interface PhotoItem {
  src: string
  label: string
  wide: boolean
}

const { t } = useLocale()
const card = useCurrentCard()

// Sourced from the current card's gallery — each client's own photos/videos,
// registered in shared/cards/<slug>.ts.
const photos = computed(() =>
  card.value!.gallery.photos.map((photo, i) => ({
    src: photo.src,
    label: `${t.value.gallery.photoLabel} ${i + 1}`,
    wide: Boolean(photo.wide)
  }))
)

const videos = computed(() =>
  card.value!.gallery.videos.map((video, i) => ({
    poster: video.poster,
    mp4: video.mp4,
    label: `${t.value.gallery.videoLabel} ${i + 1}`
  }))
)

const lightboxOpen = ref(false)
const videoReady = ref(false)
const activeVideo = ref<VideoItem | null>(null)

async function openVideo(video: VideoItem) {
  activeVideo.value = video
  lightboxOpen.value = true
  videoReady.value = false

  if (!import.meta.client) return
  try {
    const res = await fetch(video.mp4, { method: 'HEAD' })
    videoReady.value = res.ok
  } catch {
    videoReady.value = false
  }
}

function closeVideo() {
  lightboxOpen.value = false
  activeVideo.value = null
}

const photoLightboxOpen = ref(false)
const activePhoto = ref<PhotoItem | null>(null)

function openPhoto(photo: PhotoItem) {
  activePhoto.value = photo
  photoLightboxOpen.value = true
}

function closePhoto() {
  photoLightboxOpen.value = false
  activePhoto.value = null
}
</script>
