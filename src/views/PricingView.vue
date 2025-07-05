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
        <span class="text-orange-700 text-xs">Pricing information cached for your convenience</span>
      </div>
    </div>
  </div>

  <!-- ===== PRICING HERO SECTION ===== -->
  <section class="bg-white py-12 md:py-20">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Simple, Transparent Pricing
        </h1>
        <p class="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          All plans come with free lifetime hosting. Domains are not included — we help you register yours in 5 minutes.
        </p>
        <div class="bg-gray-50 p-6 rounded-lg inline-block">
          <div class="flex items-center gap-2 text-green-700">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" />
            </svg>
            <span class="font-medium">No hidden fees. No monthly charges. Just one payment.</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== PRICING PLANS SECTION ===== -->
  <section class="bg-gray-50 py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div v-for="(plan, index) in pricingPlans" :key="plan.id"
          class="bg-white p-8 rounded-lg shadow-sm border-2 hover:shadow-lg transition-shadow relative"
          :class="{ 'border-black': index === 1, 'border-gray-200': index !== 1 }">
          
          <!-- Popular Badge -->
          <div v-if="index === 1" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
              Most Popular
            </span>
          </div>

          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
            <div class="text-4xl font-bold text-gray-900 mb-2">
              {{ formatCurrency(plan.price) }}
            </div>
            <p class="text-gray-600 text-lg">{{ plan.description }}</p>
          </div>

          <ul class="space-y-4 mb-8">
            <li v-for="feature in plan.features" :key="feature" class="flex items-start text-gray-700">
              <svg class="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <div class="space-y-3">
            <button @click="contactForPlan(plan)" 
              class="w-full py-4 px-4 rounded-lg font-medium transition-colors min-h-[48px]" 
              :class="index === 1 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'">
              Get Started
            </button>
            
            <a :href="whatsappLink" target="_blank" rel="noopener noreferrer"
              class="w-full py-3 px-4 rounded-lg font-medium transition-colors min-h-[48px] flex items-center justify-center border border-green-600 text-green-600 hover:bg-green-50">
              📱 WhatsApp Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== PRICING FEATURES COMPARISON ===== -->
  <section class="bg-white py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          What's Included in Every Plan
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          No matter which plan you choose, you get our full commitment to quality and support.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="feature in includedFeatures" :key="feature.id"
          class="bg-gray-50 p-6 rounded-lg">
          <div class="text-3xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>

  

  <!-- ===== PAYMENT METHODS SECTION ===== -->
  <section class="bg-white py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Easy Payment Options
        </h2>
        <p class="text-gray-600 text-lg">
          Pay with your preferred method. We accept all major Ghana payment options.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div v-for="method in paymentMethods" :key="method.name"
          class="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
          <div class="text-3xl mb-2">{{ method.icon }}</div>
          <h3 class="font-semibold text-gray-900 text-sm">{{ method.name }}</h3>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== FAQ SECTION ===== -->
  <section class="bg-gray-50 py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p class="text-gray-600 text-lg">
          Everything you need to know about our pricing and services.
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="space-y-6">
          <div v-for="faq in faqs" :key="faq.id" class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ faq.question }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== CUSTOM PROJECTS SECTION ===== -->
  <section class="bg-white py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Need Something Custom?
        </h2>
        <p class="text-lg text-gray-700 mb-8 leading-relaxed">
          Have a unique project in mind? We love building custom solutions for businesses with specific needs.
          Let's discuss your vision and create something amazing together.
        </p>

        <div class="bg-gray-50 p-8 rounded-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Custom Project Examples</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div v-for="example in customExamples" :key="example.id" class="text-left">
              <div class="text-2xl mb-2">{{ example.icon }}</div>
              <h4 class="font-semibold text-gray-900 mb-2">{{ example.title }}</h4>
              <p class="text-gray-600 text-sm">{{ example.description }}</p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="whatsappLink" target="_blank" rel="noopener noreferrer"
              class="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium min-h-[48px] flex items-center justify-center">
              📱 Discuss Custom Project
            </a>
            <a href="mailto:hello@teklumen.com"
              class="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium min-h-[48px] flex items-center justify-center">
              ✉️ Email Us
            </a>
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
interface PricingPlan {
  id: string
  name: string
  price: number
  description: string
  features: string[]
}

interface IncludedFeature {
  id: string
  icon: string
  title: string
  description: string
}



interface PaymentMethod {
  name: string
  icon: string
}

interface FAQ {
  id: string
  question: string
  answer: string
}

interface CustomExample {
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
  `https://wa.me/${businessPhone.replace(/\D/g, '')}?text=Hello! I'm interested in TekLumen's web design services. Can we discuss pricing and my project requirements?`
)

// ===== Pricing Plans Data =====
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
      'Basic SEO setup',
      'SSL certificate included',
      'Fast loading speed'
    ]
  },
  {
    id: '2',
    name: 'Standard',
    price: 8000,
    description: 'Most popular choice for businesses',
    features: [
      '5-page website',
      'Clean, responsive design',
      'Free lifetime hosting',
      'Mobile optimization',
      'Domain setup support',
      'Advanced SEO setup',
      'Social media integration',
      'SSL certificate included',
      'Fast loading speed',
      'Basic analytics setup'
    ]
  },
  {
    id: '3',
    name: 'Enterprise',
    price: 13000,
    description: 'For growing businesses with advanced needs',
    features: [
      '5-page website + blog or custom app',
      'Clean, responsive design',
      'Free lifetime hosting',
      'Mobile optimization',
      'Domain setup support',
      'Advanced SEO setup',
      'Social media integration',
      'SSL certificate included',
      'Fast loading speed',
      'Advanced analytics setup',
      'Content management system',
      'Custom functionality',
      'Priority support'
    ]
  }
])

// ===== Included Features Data =====
const includedFeatures = ref<IncludedFeature[]>([
  {
    id: '1',
    icon: '🏠',
    title: 'Free Lifetime Hosting',
    description: 'We host your website for free, forever. No monthly fees, no hidden costs.'
  },
  {
    id: '2',
    icon: '📱',
    title: 'Mobile-First Design',
    description: 'Every website is built mobile-first and tested on real devices.'
  },
  {
    id: '3',
    icon: '🚀',
    title: 'Fast Loading Speed',
    description: 'Optimized for Ghana\'s network conditions. Loads quickly on 3G.'
  },
  {
    id: '4',
    icon: '🔒',
    title: 'SSL Certificate',
    description: 'Secure HTTPS connection included with every website.'
  },
  {
    id: '5',
    icon: '🛠️',
    title: 'Setup Support',
    description: 'We help you with domain registration and DNS configuration.'
  },
  {
    id: '6',
    icon: '💬',
    title: 'WhatsApp Support',
    description: 'Direct support via WhatsApp for quick responses to your questions.'
  }
])


// ===== Payment Methods Data =====
const paymentMethods = ref<PaymentMethod[]>([
  { name: 'MTN Mobile Money', icon: '📱' },
  { name: 'Vodafone Cash', icon: '💳' },
  { name: 'Bank Transfer', icon: '🏦' },
  { name: 'Cash Payment', icon: '💵' }
])

// ===== FAQ Data =====
const faqs = ref<FAQ[]>([
  {
    id: '1',
    question: 'Is hosting really free forever?',
    answer: 'Yes! We provide free lifetime hosting for all our websites. This is our commitment to supporting local businesses. No monthly fees, no surprise bills.'
  },
  {
    id: '2',
    question: 'How long does it take to build my website?',
    answer: 'Business Starter: 2-3 days. Standard: 4-7 days. Enterprise: 1-2 weeks. We work fast without compromising quality.'
  },
  {
    id: '3',
    question: 'Do I need to buy a domain separately?',
    answer: 'Yes, domain registration is separate and typically costs GHS 120-180 per year. We help you register and set it up at no extra charge.'
  },
  {
    id: '4',
    question: 'Can I update my website myself?',
    answer: 'Yes! We provide simple content management tools where needed, or we can make updates for you via WhatsApp.'
  },
  {
    id: '5',
    question: 'What if I need changes after launch?',
    answer: 'Minor updates are free for the first month. After that, we offer affordable maintenance packages or per-request updates.'
  },
  {
    id: '6',
    question: 'Do you provide content writing?',
    answer: 'We can help refine your existing content, but you provide the main content. We focus on making it work well on your website.'
  }
])

// ===== Custom Examples Data =====
const customExamples = ref<CustomExample[]>([
  {
    id: '1',
    icon: '🛒',
    title: 'E-commerce Store',
    description: 'Online shop with payment integration and inventory management'
  },
  {
    id: '2',
    icon: '📚',
    title: 'Learning Platform',
    description: 'Course website with video lessons and student progress tracking'
  },
  {
    id: '3',
    icon: '🏨',
    title: 'Booking System',
    description: 'Appointment scheduling for services or room reservations'
  },
  {
    id: '4',
    icon: '📊',
    title: 'Business Dashboard',
    description: 'Custom admin panel for managing your business operations'
  }
])

// ===== Helper Functions =====
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS'
  }).format(amount)
}

function contactForPlan(plan: PricingPlan): void {
  const message = `Hello! I'm interested in the ${plan.name} plan (${formatCurrency(plan.price)}). Can we discuss my website project?`
  const whatsappUrl = `https://wa.me/${businessPhone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

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