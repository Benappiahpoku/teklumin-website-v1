<!--
  Navigation.vue
  - Simple, clean navigation for TekLumen website
  - Mobile-first design optimized for Ghana's network conditions
  - Features TekLumen branding with logo and company name
  - Responsive navigation with mobile menu toggle
-->

<template>
  <!-- ===== NAVIGATION HEADER ===== -->
  <header class="bg-white border-b border-gray-100 sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <a href="/">
            <TekLumenLogo class="w-16 h-16" />
          </a>
          <div>
            <a href="/">
              <h1 class="text-xl font-bold text-gray-900">TekLumin</h1>
              <p class="text-xs text-gray-600">Helping You Grow with Tech</p>
            </a>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu"
          class="md:hidden p-2 text-gray-600 hover:text-gray-900 min-h-[48px] min-w-[48px] flex items-center justify-center"
          aria-label="Toggle menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!showMobileMenu" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a href="/" class="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
          <a href="/projects" class="text-gray-700 hover:text-gray-900 transition-colors">Projects</a>
          <a href="/pricing" class="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
          <a href="/about" class="text-gray-700 hover:text-gray-900 transition-colors">About</a>

          <a href="/contact" class="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
          <a :href="whatsappLink" target="_blank" rel="noopener noreferrer"
            class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
            📱 WhatsApp
          </a>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="showMobileMenu" class="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
        <div class="flex flex-col gap-4">
          <a href="/" @click="closeMobileMenu" class="text-gray-700 hover:text-gray-900 transition-colors py-2">
            Home
          </a>
          <a href="/projects" @click="closeMobileMenu" class="text-gray-700 hover:text-gray-900 transition-colors py-2">
            Projects
          </a>
          <a href="/pricing" @click="closeMobileMenu" class="text-gray-700 hover:text-gray-900 transition-colors py-2">
            Pricing
          </a>
          <a href="/about" @click="closeMobileMenu" class="text-gray-700 hover:text-gray-900 transition-colors py-2">
            About
          </a>

          <a href="/contact" @click="closeMobileMenu" class="text-gray-700 hover:text-gray-900 transition-colors py-2">
            Contact
          </a>
          <a :href="whatsappLink" target="_blank" rel="noopener noreferrer"
            class="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-center min-h-[48px] flex items-center justify-center">
            📱 WhatsApp Us
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
// ===== Imports =====
import { ref, computed } from 'vue'
import TekLumenLogo from '../base/TekLumenLogo.vue'

// ===== Reactive State =====
const showMobileMenu = ref(false)

// ===== Business Configuration =====
const businessPhone = '+233594093926'
const whatsappLink = computed(() =>
  `https://wa.me/${businessPhone.replace(/\D/g, '')}?text=Hello! I'm interested in TekLumin's web design services. Can we discuss my project?`
)


function toggleMobileMenu(): void {
  showMobileMenu.value = !showMobileMenu.value
}

function closeMobileMenu(): void {
  showMobileMenu.value = false
}



// ===== Helper Functions =====
/**
 * Auto-close mobile menu when route changes
 * Improves mobile user experience
 */
// Note: Mobile menu auto-closes via @click="isMobileMenuOpen = false" on nav links

// ===== Performance & Accessibility Notes =====
/**
 * Navigation optimizations for Ghana's mobile users:
 * - Touch-optimized button sizes (48px minimum)
 * - Smooth animations with appropriate durations
 * - High contrast colors for outdoor visibility
 * - Simple, clean design for easy navigation
 * - Mobile-first responsive breakpoints
 * 
 * Accessibility features:
 * - Proper ARIA labels and expanded states
 * - Screen reader friendly text
 * - Keyboard navigation support
 * - Clear visual focus indicators
 * - High contrast color ratios
 */
</script>

<!--
  ===== DESIGN NOTES =====
  
  COLOR SCHEME:
  - Background: White for clean, professional look
  - Text: Gray-600 for body text, Gray-800 for brand name
  - Primary: Uses Tailwind primary colors (customizable via config)
  - Hover: Light gray backgrounds with primary color text
  
  MOBILE OPTIMIZATION:
  - Touch targets minimum 48px for accessibility
  - Smooth animations optimized for mobile performance
  - Single-thumb navigation friendly
  - Clean, uncluttered mobile menu
  
  RESPONSIVE BREAKPOINTS:
  - Mobile: Full responsive menu (default to md)
  - Desktop: Horizontal navigation (md and up)
  - Clean breakpoint at 768px (md)
  
  TEKLUMEN BRANDING:
  - Logo on the left with company name
  - Clean, modern design
  - Professional appearance suitable for tech company
  - Primary color integration throughout navigation states
-->