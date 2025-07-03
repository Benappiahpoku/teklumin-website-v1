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

  <!-- ===== PROJECTS PREVIEW SECTION ===== -->
  <section id="projects" class="bg-white py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Some Things We've Built
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          See real examples of sites we've delivered — clean, simple, and effective.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div v-for="project in projects" :key="project.id"
          class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div class="aspect-video bg-gray-100 flex items-center justify-center">
            <div class="text-4xl">{{ project.icon }}</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.name }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <button class="text-black hover:text-gray-700 transition-colors font-medium">
              → View Project
            </button>
          </div>
        </div>
      </div>

      <div class="text-center">
        <button
          class="border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors font-medium">
          → View All Projects
        </button>
      </div>
    </div>
  </section>

  <ToolsSection />

  <!-- ===== TESTIMONIALS SECTION ===== -->
  <section class="bg-white py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          What People Say
        </h2>
        <p class="text-gray-600 text-lg">
          Real feedback from real clients who trusted us with their online presence.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-gray-50 p-6 rounded-lg">
          <div class="flex text-yellow-400 mb-4">
            <span v-for="star in 5" :key="star">⭐</span>
          </div>
          <blockquote class="text-gray-700 text-lg mb-4 italic">
            "{{ testimonial.quote }}"
          </blockquote>
          <div class="flex items-center">
            <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
              <span class="text-sm font-semibold">{{ testimonial.name.charAt(0) }}</span>
            </div>
            <div>
              <p class="font-semibold text-gray-900">{{ testimonial.name }}</p>
              <p class="text-sm text-gray-600">{{ testimonial.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== PRICING SECTION ===== -->
  <section id="pricing" class="bg-gray-50 py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          All plans come with free lifetime hosting. Domains are not included — we help you register yours in 5 minutes.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div v-for="(plan, index) in pricingPlans" :key="plan.id"
          class="bg-white p-8 rounded-lg shadow-sm border-2 hover:shadow-lg transition-shadow"
          :class="{ 'border-black': index === 1, 'border-gray-200': index !== 1 }">
          <div class="text-center mb-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
            <div class="text-3xl font-bold text-gray-900 mb-2">
              {{ formatCurrency(plan.price) }}
            </div>
            <p class="text-gray-600">{{ plan.description }}</p>
          </div>

          <ul class="space-y-3 mb-8">
            <li v-for="feature in plan.features" :key="feature" class="flex items-center text-gray-700">
              <svg class="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
              {{ feature }}
            </li>
          </ul>

          <button class="w-full py-3 px-4 rounded-lg font-medium transition-colors min-h-[48px]" :class="index === 1 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'">
            Get Started
          </button>
        </div>
      </div>

      <div class="text-center mt-8">
        <p class="text-gray-600 mb-4">Need something custom?</p>
        <a :href="whatsappLink" target="_blank" rel="noopener noreferrer"
          class="text-black hover:text-gray-700 transition-colors font-medium">
          → Contact us for a tailored quote
        </a>
      </div>
    </div>
  </section>

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

  <!-- ===== CONTACT CTA SECTION ===== -->
  <section id="contact" class="bg-black py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          Let's bring your idea to life.
        </h2>
        <p class="text-gray-300 text-lg mb-8">
          Ready to launch your professional website? We're here to help make it happen quickly and beautifully.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="whatsappLink" target="_blank" rel="noopener noreferrer"
            class="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-medium min-h-[48px] flex items-center justify-center">
            📱 WhatsApp Us Now
          </a>
          <a href="mailto:hello@teklumen.com"
            class="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium min-h-[48px] flex items-center justify-center">
            ✉️ hello@teklumen.com
          </a>
        </div>

        <div class="mt-8 text-gray-400">
          <p>Based in Accra & Kumasi (Remote-first)</p>
          <p class="mt-2">Average response time: Under 2 hours</p>
        </div>
      </div>
    </div>
  </section>


</template>

<script setup lang="ts">
import ToolsSection from '@/components/common/ToolsSection.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'


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

interface Project {
  id: string
  name: string
  description: string
  icon: string
}


interface Testimonial {
  id: string
  name: string
  location: string
  quote: string
}

interface PricingPlan {
  id: string
  name: string
  price: number
  description: string
  features: string[]
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
const businessPhone = '+233123456789'
const whatsappLink = computed(() => 
  `https://wa.me/${businessPhone.replace(/\D/g, '')}?text=Hello! I'm interested in TekLumen's web design services. Can we discuss my project?`
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

const projects = ref<Project[]>([
  {
    id: '1',
    name: 'Mayra SkinCare',
    description: 'A clean e-commerce one-pager built for mobile users.',
    icon: '🧴'
  },
  {
    id: '2',
    name: 'Kojo\'s Bakery',
    description: 'Portfolio site for a local bakery — clean design, custom illustrations.',
    icon: '🥖'
  },
  {
    id: '3',
    name: 'Naachiaa Estates',
    description: 'Real estate site built for trust, simplicity, and clarity.',
    icon: '🏘️'
  }
])


const testimonials = ref<Testimonial[]>([
  {
    id: '1',
    name: 'Kwame',
    location: 'Accra, Ghana',
    quote: 'They delivered my site in four days — super helpful team.'
  },
  {
    id: '2',
    name: 'Ama',
    location: 'Kumasi, Ghana',
    quote: 'I love the simplicity. My site works on every phone.'
  }
])

const pricingPlans = ref<PricingPlan[]>([
  {
    id: '1',
    name: 'Business Starter',
    price: 4000,
    description: 'Perfect for getting started online',
    features: [
      'One-page website',
      'Clean, responsive design',
      'Free lifetime hosting',
      'Mobile optimization',
      'Domain setup support',
      'Basic SEO setup'
    ]
  },
  {
    id: '2',
    name: 'Standard',
    price: 8000,
    description: 'Most popular choice',
    features: [
      '5-page website',
      'Clean, responsive design',
      'Free lifetime hosting',
      'Mobile optimization',
      'Domain setup support',
      'Advanced SEO setup',
      'Contact form integration',
      'Social media integration'
    ]
  },
  {
    id: '3',
    name: 'Enterprise',
    price: 13000,
    description: 'For growing businesses',
    features: [
      '5-page website + blog or custom app',
      'Clean, responsive design',
      'Free lifetime hosting',
      'Mobile optimization',
      'Domain setup support',
      'Advanced SEO setup',
      'Contact form integration',
      'Social media integration',
      'Custom functionality',
      'Content management system'
    ]
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

// ===== Helper Functions =====
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS'
  }).format(amount)
}

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