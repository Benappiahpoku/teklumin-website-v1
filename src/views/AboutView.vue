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
        <span class="text-orange-700 text-xs">About page cached for your convenience</span>
      </div>
    </div>
  </div>

  <!-- ===== ABOUT HERO SECTION ===== -->
  <section class="bg-white py-12 md:py-20">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Design-Led. Detail-Oriented. Developer-Owned.
        </h1>
        <p class="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          We build fast, focused websites for small businesses, consultants, creators, and solo teams.
          Every site is crafted with care — no bloated templates or corporate fluff.
        </p>
        <div class="bg-gray-50 p-6 rounded-lg inline-block">
          <div class="flex items-center gap-2 text-green-700">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" />
            </svg>
            <span class="font-medium">Based in Accra & Kumasi, serving clients globally</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== FOUNDER PROFILE SECTION ===== -->
  <section class="bg-gray-50 py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- Profile Image -->
          <div class="order-2 lg:order-1">
            <div class="flex justify-center lg:justify-start">
              <div class="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                <img v-if="!imageError" src="/benjaminprofilepic.webp" 
                  alt="Benjamin Appiah-Poku - Creative Director, TekLumen"
                  class="w-full h-full object-cover" loading="lazy" @error="imageError = true" />
                <!-- Fallback when image fails to load -->
                <div v-else class="w-full h-full bg-black flex items-center justify-center text-white">
                  <span class="text-4xl">👤</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Profile Content -->
          <div class="order-1 lg:order-2">
            <div class="bg-white p-8 rounded-lg shadow-sm">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Meet Benjamin Appiah-Poku
              </h2>
              <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                Creative Director & Founder of TekLumen
              </p>
              
              <div class="space-y-4 text-gray-700">
                <p>
                  Benjamin brings together business strategy and technical expertise to create websites that actually work for small businesses and entrepreneurs.
                </p>
                
                <p>
                  With a background spanning management, economics, law, and computer science, he understands what businesses need to succeed online — and what they don't.
                </p>
                
                <p>
                  Through TekLumen, he's committed to making professional web design accessible to businesses across Ghana and beyond, without the complexity or ongoing costs.
                </p>
              </div>

              <div class="mt-8 flex flex-col sm:flex-row gap-4">
                <a :href="whatsappLink" target="_blank" rel="noopener noreferrer"
                  class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium min-h-[48px] flex items-center justify-center">
                  📱 WhatsApp Benjamin
                </a>
                <a href="https://www.benappiahpoku.com" target="_blank" rel="noopener noreferrer"
                  class="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium min-h-[48px] flex items-center justify-center">
                  🌐 Personal Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== COMPANY VALUES SECTION ===== -->
  <section class="bg-white py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          What We Stand For
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Our principles guide every project we take on and every client relationship we build.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div v-for="value in companyValues" :key="value.id" class="bg-gray-50 p-6 rounded-lg">
          <div class="text-3xl mb-4">{{ value.icon }}</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ value.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== MISSION SECTION ===== -->
  <section class="bg-gray-50 py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <div class="bg-white p-8 md:p-12 rounded-lg shadow-sm">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p class="text-lg text-gray-700 mb-8 leading-relaxed">
            To make professional websites fast, clean, and accessible to anyone who needs one.
            We believe every business deserves a beautiful online presence that works flawlessly on every device.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div class="text-3xl font-bold text-gray-900 mb-2">Fast</div>
              <p class="text-gray-600">Websites delivered in days, not months</p>
            </div>
            <div>
              <div class="text-3xl font-bold text-gray-900 mb-2">Clean</div>
              <p class="text-gray-600">Simple, focused design that converts</p>
            </div>
            <div>
              <div class="text-3xl font-bold text-gray-900 mb-2">Accessible</div>
              <p class="text-gray-600">No hidden costs, no ongoing fees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== COMPANY STORY SECTION ===== -->
  <section class="bg-white py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why TekLumen Exists
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">The Problem</h3>
              <p class="text-gray-700 leading-relaxed">
                Small businesses in Ghana and across Africa struggle with expensive, complicated web solutions that take months to deliver and cost thousands in ongoing fees.
              </p>
            </div>
            
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Our Approach</h3>
              <p class="text-gray-700 leading-relaxed">
                We focus on what businesses actually need: clean, fast websites that work perfectly on mobile, deliver quickly, and don't break the bank.
              </p>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">The Solution</h3>
              <p class="text-gray-700 leading-relaxed">
                Fixed pricing, fast delivery, free lifetime hosting, and direct communication via WhatsApp. No complicated processes or hidden fees.
              </p>
            </div>
            
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">The Result</h3>
              <p class="text-gray-700 leading-relaxed">
                Professional websites that help businesses grow, without the complexity or ongoing costs that typically come with web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <ContactSection />
</template>

<script setup lang="ts">
import ContactSection from '@/components/common/ContactSection.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'

// ===== Types & Interfaces =====
interface CompanyValue {
  id: string
  icon: string
  title: string
  description: string
}

// ===== Reactive State =====
const isOnline = ref(navigator.onLine)
const imageError = ref<boolean>(false)

// ===== Business Configuration =====
const businessPhone = '+233594093926'
const whatsappLink = computed(() => 
  `https://wa.me/${businessPhone.replace(/\D/g, '')}?text=Hello Benjamin! I'm interested in learning more about TekLumen's web design services. Can we discuss my project?`
)

// ===== Company Values Data =====
const companyValues = ref<CompanyValue[]>([
  {
    id: '1',
    icon: '🎯',
    title: 'Simple is better',
    description: 'We believe in clean, focused design that gets results. No unnecessary complexity or bloated features that slow down your site or confuse your visitors.'
  },
  {
    id: '2',
    icon: '🚀',
    title: 'Launch fast, iterate later',
    description: 'Get online quickly with a solid foundation, then improve and expand based on real user feedback. Speed to market matters for growing businesses.'
  },
  {
    id: '3',
    icon: '📱',
    title: 'Every device matters',
    description: 'Your website works perfectly on every phone, tablet, and computer. We prioritize mobile experience because that\'s how most people browse in Ghana.'
  },
  {
    id: '4',
    icon: '🏠',
    title: 'You own your domain',
    description: 'Complete ownership of your digital presence. We help you set it up and provide guidance, but it\'s always yours to control and move if needed.'
  },
  {
    id: '5',
    icon: '💬',
    title: 'Direct communication',
    description: 'No account managers or complicated ticketing systems. Talk directly with the people building your site via WhatsApp for instant responses.'
  },
  {
    id: '6',
    icon: '💰',
    title: 'Transparent pricing',
    description: 'Fixed prices, no hidden fees, no monthly hosting charges. You pay once, and we handle the rest. Simple, honest pricing for honest work.'
  }
])

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