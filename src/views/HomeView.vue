<!--
  HomeView.vue - TekLumen Business Website Homepage
  - Mobile-first design optimized for Ghana's network conditions
  - Clean, minimal design following TekLumen branding
  - Fast loading with optimized images and minimal JavaScript
  - WhatsApp integration for immediate business contact
  - Offline-aware functionality with local storage
  - Follows TekLumen guidelines: clear messaging, simple English
-->

<template>
  <!-- ===== OFFLINE INDICATOR ===== -->
  <div v-if="!isOnline" class="bg-orange-50 border-b border-orange-200 p-3">
    <div class="container mx-auto px-4">
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd" />
        </svg>
        <span class="text-orange-800 text-sm font-medium">You're offline</span>
        <span class="text-orange-700 text-xs">Content cached for your convenience</span>
      </div>
    </div>
  </div>

  <!-- ===== HERO SECTION ===== -->
  <section class="bg-white py-12 md:py-20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Hero Text -->
        <div class="order-2 lg:order-1">
          <h1 class="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Fast, Clean Websites for Founders and Small Teams
          </h1>
          <p class="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Mobile-ready. Easy to manage. Delivered in days—not months
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
      
            <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="bg-black text-white px-8 py-4
              rounded-lg hover:bg-gray-800 transition-colors font-medium min-h-[48px] text-center">
              → Let's Build Yours
            </a>
           
          </div>
        </div>


        <!-- Hero Video -->
        <div class="order-1 lg:order-2">
          <div class="relative">
            <video class="w-full h-auto rounded-lg shadow-lg" autoplay muted loop playsinline preload="metadata"
              @error="handleVideoError">
              <source src="/teklumenvid2.mp4" type="video/mp4">
              <!-- Fallback image for browsers that don't support video -->
              <img src="/heropicteklumen.webp" alt="TekLumen web design showcase"
                class="w-full h-auto rounded-lg shadow-lg" loading="eager" />
            </video>
            <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg pointer-events-none">
            </div>
          </div>
        </div>
        <!-- Hero Image
        <div class="order-2 lg:order-2">
          <div class="relative">
            <img src="/heropicteklumen.webp" alt="TekLumen web design showcase"
              class="w-full h-auto rounded-lg shadow-lg" loading="eager" @error="handleImageError" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
          </div>
        </div> -->
      </div>
    </div>
  </section>

  <!-- ===== KEY FEATURES SECTION ===== -->
  <section class="bg-gray-50 py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Built to Work. Designed to Impress.
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Everything you need for a professional online presence, without the complexity or ongoing costs.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="feature in features" :key="feature.id"
          class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="text-3xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <FeaturedProjectsSection />

  <ToolsSection />

  <TestimonialsSection />
<PricingSection />

  <!-- ===== ABOUT SECTION ===== -->
  <section id="about" class="bg-white py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Design-Led. Detail-Oriented. Developer-Owned.
        </h2>
        <p class="text-lg text-gray-700 mb-12 leading-relaxed">
          We build fast, focused websites for small businesses, consultants, creators, and solo teams.
          Every site is crafted with care — no bloated templates or corporate fluff.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div v-for="value in values" :key="value.id" class="text-left">
            <div class="text-2xl mb-3">{{ value.icon }}</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>

        <div class="bg-gray-50 p-8 rounded-lg">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p class="text-lg text-gray-700 leading-relaxed">
            To make professional websites fast, clean, and accessible to anyone who needs one.
            We believe every business deserves a beautiful online presence that works flawlessly on every device.
          </p>
        </div>
      </div>
    </div>
  </section>

 <ContactSection />


</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ContactSection from '@/components/common/ContactSection.vue'
import ToolsSection from '@/components/common/ToolsSection.vue'
import PricingSection from '@/components/common/PricingSectionArea.vue'
import FeaturedProjectsSection from '@/components/common/FeaturedProjectsSection.vue'
import TestimonialsSection from '@/components/common/TestimonialsSection.vue'



function handleVideoError(): void {
  console.warn('Hero video failed to load, fallback image should be displayed')
}

// ===== Types & Interfaces =====
interface Feature {
  id: string
  icon: string
  title: string
  description: string
}


interface Value {
  id: string
  icon: string
  title: string
  description: string
}

// ===== Reactive State =====
const isOnline = ref(navigator.onLine)

// ===== Business Configuration =====
const businessPhone = '+233594093926'
const whatsappLink = computed(() => 
  `https://wa.me/${businessPhone.replace(/\D/g, '')}?text=Hello! I'm interested in TekLumin's web design services. Can we discuss my project?`
)

// ===== Data =====
const features = ref<Feature[]>([
  {
    id: '1',
    icon: '⚡',
    title: 'Fast turnaround',
    description: 'Get your website live in days, not months. We work efficiently without compromising quality.'
  },
  {
    id: '2',
    icon: '📱',
    title: 'Mobile-friendly by default',
    description: 'Every site we build works perfectly on phones, tablets, and desktops. Mobile-first approach always.'
  },
  {
    id: '3',
    icon: '🏠',
    title: 'Free lifetime hosting',
    description: 'We host your site for free, forever. No hidden costs, no surprise bills. Just reliable hosting.'
  },
  {
    id: '4',
    icon: '✨',
    title: 'Clean, minimal design',
    description: 'Beautiful, professional designs that focus on your content and convert visitors to customers.'
  },
  {
    id: '5',
    icon: '🌐',
    title: 'Easy domain setup support',
    description: 'We help you register and connect your domain in minutes. Simple process, no technical hassle.'
  },
  {
    id: '6',
    icon: '🛠️',
    title: 'Easy to manage',
    description: 'Simple content management that you can handle yourself. No coding required for updates.'
  }
])








const values = ref<Value[]>([
  {
    id: '1',
    icon: '🎯',
    title: 'Simple is better',
    description: 'We believe in clean, focused design that gets results. No unnecessary complexity or bloated features.'
  },
  {
    id: '2',
    icon: '🚀',
    title: 'Launch fast, iterate later',
    description: 'Get online quickly with a solid foundation, then improve and expand based on real user feedback.'
  },
  {
    id: '3',
    icon: '📱',
    title: 'Every device matters',
    description: 'Your website works perfectly on every phone, tablet, and computer. No compromise on mobile experience.'
  },
  {
    id: '4',
    icon: '🔑',
    title: 'You own your domain',
    description: 'Complete ownership of your digital presence. We help you set it up, but it\'s always yours to control.'
  }
])


// function scrollToSection(sectionId: string): void {
//   const element = document.getElementById(sectionId)
//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth' })
//   }
// }

// function handleImageError(): void {
//   console.warn('Hero image failed to load, using fallback')
// }

// ===== Network Status Monitoring =====
function updateOnlineStatus(): void {
  isOnline.value = navigator.onLine
}

onMounted(() => {
  window.addEventListener('online', updateOnlineStatus)
  window.addEventListener('offline', updateOnlineStatus)
})

onUnmounted(() => {
  window.removeEventListener('online', updateOnlineStatus)
  window.removeEventListener('offline', updateOnlineStatus)
})
</script>