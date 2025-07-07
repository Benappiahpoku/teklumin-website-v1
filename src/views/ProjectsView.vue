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
        <span class="text-orange-700 text-xs">Projects cached for your convenience</span>
      </div>
    </div>
  </div>

  <!-- ===== PROJECTS HERO SECTION ===== -->
  <section class="bg-white py-12 md:py-20">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Projects We've Shipped
        </h1>
        <p class="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          Here are some of the sites we've built for clients who needed results fast.
          Clean, simple, and effective.
        </p>
        <div class="bg-gray-50 p-6 rounded-lg inline-block">
          <div class="flex items-center gap-2 text-green-700">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" />
            </svg>
            <span class="font-medium">All projects delivered fast with free lifetime hosting</span>
          </div>
        </div>
      </div>
    </div>
  </section>

 <FeaturedProjects />

  <!-- ===== ALL PROJECTS GRID =====
  <section class="bg-white py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          All Projects
        </h2>
        <p class="text-gray-600 text-lg">
          Every project built with our core principles: fast, clean, and mobile-first.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in allProjects" :key="project.id"
          class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div class="aspect-video bg-gray-100 flex items-center justify-center">
            <div class="text-4xl">{{ project.icon }}</div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                {{ project.category }}
              </span>
              <span class="text-gray-500 text-sm">{{ project.deliveryTime }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.name }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex items-center justify-between">
              <span class="text-gray-500 text-sm">{{ project.location }}</span>
              <button @click="contactForProject(project)"
                class="text-black hover:text-gray-700 transition-colors font-medium">
                → Build Similar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <!-- ===== PROJECT CATEGORIES SECTION ===== -->
  <section class="bg-gray-50 py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          What We Build
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          From simple landing pages to complex web applications, we cover all your business needs.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="category in projectCategories" :key="category.id"
          class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="text-3xl mb-4">{{ category.icon }}</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ category.name }}</h3>
          <p class="text-gray-600 mb-4">{{ category.description }}</p>
          <div class="space-y-2">
            <p class="text-sm text-gray-500">Starting from</p>
            <p class="text-2xl font-bold text-gray-900">{{ formatCurrency(category.startingPrice) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== PROCESS SECTION ===== -->
  <section class="bg-white py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Our Simple Process
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          From idea to launch in just a few steps. No complicated processes or endless meetings.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(step, index) in processSteps" :key="step.id" class="text-center">
          <div class="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
            {{ index + 1 }}
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ step.title }}</h3>
          <p class="text-gray-600">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>

 <TestimonialsSection />


  <ContactSection />

</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ContactSection from '@/components/common/ContactSection.vue'
import FeaturedProjects from '@/components/common/FeaturedProjectsSection.vue'
import TestimonialsSection from '@/components/common/TestimonialsSection.vue'


// ===== Types & Interfaces =====
// interface Project {
//   id: string
//   name: string
//   description: string
//   icon: string
//   category: string
//   deliveryTime: string
//   location?: string
//   features?: string[]
// }

interface ProjectCategory {
  id: string
  name: string
  description: string
  icon: string
  startingPrice: number
}

interface ProcessStep {
  id: string
  title: string
  description: string
}


// ===== Reactive State =====
const isOnline = ref(navigator.onLine)

// ===== Business Configuration =====
// const businessPhone = '+233594093926'



// ===== All Projects Data =====
// const allProjects = ref<Project[]>([
//   {
//     id: '3',
//     name: 'Kojo\'s Bakery',
//     description: 'Portfolio site for a local bakery — clean design, custom illustrations.',
//     icon: '🥖',
//     category: 'Portfolio',
//     deliveryTime: '2 days',
//     location: 'Accra, Ghana'
//   },
//   {
//     id: '4',
//     name: 'Dr. Ama Clinic',
//     description: 'Medical practice website with appointment booking and service information.',
//     icon: '🏥',
//     category: 'Healthcare',
//     deliveryTime: '4 days',
//     location: 'Kumasi, Ghana'
//   },
//   {
//     id: '5',
//     name: 'Kwame\'s Auto Shop',
//     description: 'Auto repair business site with service listings and customer reviews.',
//     icon: '🚗',
//     category: 'Service',
//     deliveryTime: '3 days',
//     location: 'Tema, Ghana'
//   },
//   {
//     id: '6',
//     name: 'Afia\'s Restaurant',
//     description: 'Restaurant website with menu, online ordering, and location information.',
//     icon: '🍽️',
//     category: 'Restaurant',
//     deliveryTime: '3 days',
//     location: 'Takoradi, Ghana'
//   },
//   {
//     id: '7',
//     name: 'Tech Solutions Hub',
//     description: 'IT services company website with portfolio and service offerings.',
//     icon: '💻',
//     category: 'Technology',
//     deliveryTime: '6 days',
//     location: 'Accra, Ghana'
//   },
//   {
//     id: '8',
//     name: 'Blessed Events',
//     description: 'Event planning business with gallery and booking information.',
//     icon: '🎉',
//     category: 'Events',
//     deliveryTime: '4 days',
//     location: 'Kumasi, Ghana'
//   }
// ])

// ===== Project Categories Data =====
const projectCategories = ref<ProjectCategory[]>([
  {
    id: '1',
    name: 'Business Websites',
    description: 'Professional websites for small businesses, consultants, and service providers.',
    icon: '🏢',
    startingPrice: 4000
  },
  // {
  //   id: '2',
  //   name: 'E-commerce Stores',
  //   description: 'Online stores with product catalogs, shopping carts, and payment integration.',
  //   icon: '🛒',
  //   startingPrice: 8000
  // },
  // {
  //   id: '3',
  //   name: 'Portfolio Sites',
  //   description: 'Showcase your work with beautiful galleries and project presentations.',
  //   icon: '🎨',
  //   startingPrice: 3000
  // },
  {
    id: '4',
    name: 'Restaurant & Food',
    description: 'Menu displays, online ordering, and reservation systems for food businesses.',
    icon: '🍽️',
    startingPrice: 5000
  },
  {
    id: '5',
    name: 'Healthcare & Medical',
    description: 'Professional medical websites with appointment booking and patient information.',
    icon: '🏥',
    startingPrice: 6000
  },
  // {
  //   id: '6',
  //   name: 'Real Estate',
  //   description: 'Property listings, search functionality, and agent contact systems.',
  //   icon: '🏠',
  //   startingPrice: 7000
  // }
])

// ===== Process Steps Data =====
const processSteps = ref<ProcessStep[]>([
  {
    id: '1',
    title: 'Discovery',
    description: 'We understand your business, goals, and target audience through a brief consultation.'
  },
  {
    id: '2',
    title: 'Design',
    description: 'Create wireframes and visual designs that match your brand and user needs.'
  },
  {
    id: '3',
    title: 'Development',
    description: 'Build your website with clean code, mobile-first approach, and fast loading.'
  },
  {
    id: '4',
    title: 'Launch',
    description: 'Deploy your site, set up hosting, and ensure everything works perfectly.'
  }
])



// ===== Helper Functions =====
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS'
  }).format(amount)
}

// function contactForProject(project: Project): void {
//   const message = `Hello! I'm interested in building a website similar to ${project.name}. Can we discuss my project requirements?`
//   const whatsappUrl = `https://wa.me/${businessPhone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
//   window.open(whatsappUrl, '_blank')
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