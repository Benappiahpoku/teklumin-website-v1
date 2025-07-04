
<template>
  <!-- ===== ESTATES HERO SECTION START ===== -->
  <!-- 
    Simplified hero section - mobile-first design for Ghana's market
    Follows TekLumen guidelines: 48px touch targets, WhatsApp integration, offline-aware
  -->
  <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 px-4 py-20">
    
    <!-- ===== BACKGROUND OVERLAY ===== -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    
    <!-- ===== MAIN HERO CONTENT ===== -->
    <div class="relative z-10 max-w-4xl mx-auto text-center text-white">
      
      <!-- ===== MAIN HEADLINE ===== -->
      <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
        {{ heroTitle }}
      </h1>
      
      <!-- ===== SUBHEADLINE ===== -->
      <p class="text-xl md:text-2xl font-medium mb-8 text-blue-100 max-w-2xl mx-auto drop-shadow-md">
        {{ heroSubtitle }}
      </p>
      
      <!-- ===== CALL-TO-ACTION BUTTONS ===== -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none mb-12">
        
        <!-- Primary CTA: WhatsApp Quote (Ghana Priority) -->
        <button
          @click="handleRequestQuote"
          class="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg min-h-[48px] min-w-[200px] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300"
          aria-label="Request a quote via WhatsApp"
        >
          � Get Quote via WhatsApp
        </button>
        
        <!-- Secondary CTA: Call Now -->
        <button
          @click="handleCallNow"
          class="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-lg min-h-[48px] min-w-[200px] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          aria-label="Call Naachiaa Estates now"
        >
          📞 Call Us Now
        </button>
      </div>
      
      <!-- ===== TRUST INDICATORS ===== -->
      <div class="mt-12 pt-8 border-t border-blue-300 border-opacity-30 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-blue-100">
        <div class="text-center">
          <div class="text-2xl font-bold text-white">30+</div>
          <div class="text-sm uppercase tracking-wide">Years Experience</div>
        </div>
        <div class="text-center">
          <div class="text-2xl font-bold text-white">5,000+</div>
          <div class="text-sm uppercase tracking-wide">Projects Completed</div>
        </div>
        <div class="text-center">
          <div class="text-2xl font-bold text-white">16</div>
          <div class="text-sm uppercase tracking-wide">Regions Served</div>
        </div>
      </div>
    </div>
    
    <!-- ===== SCROLL INDICATOR ===== -->
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
    
    <!-- ===== OFFLINE INDICATOR ===== -->
    <div
      v-if="!isOnline"
      class="fixed top-4 left-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-xl z-50"
      role="alert"
      aria-live="polite"
    >
      <div class="flex items-center gap-2 text-sm">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>
        <span>Working offline - Contact options still available</span>
      </div>
    </div>
  </section>
  <!-- ===== NAACHIAA ESTATES HERO SECTION END ===== -->
</template>

<script setup lang="ts">
// ===== Imports =====
import { ref, onMounted } from 'vue'

// ===== Constants & Config =====
/**
 * Hero content for Naachiaa Estates
 * Simple, clear messaging for Ghana's construction market
 */
const heroTitle = "Ghana's Trusted Concrete Partner"
const heroSubtitle = "High-quality concrete products since 1991"

/**
 * Business contact information
 * Following TekLumen guidelines: WhatsApp integration required
 */
const businessInfo = {
  phone: '+233244123456',
  whatsappNumber: '+233244123456',
  companyName: 'Naachiaa Estates'
}

// ===== Reactive State =====
/**
 * Network status monitoring for offline-first functionality
 * Required by TekLumen guidelines for Ghana's intermittent connectivity
 */
const isOnline = ref(navigator.onLine)

// ===== Main Logic =====
/**
 * Handle quote request via WhatsApp
 * Primary contact method for Ghana's mobile-first users
 * WhatsApp integration required by TekLumen guidelines
 */
function handleRequestQuote(): void {
  const message = `Hello ${businessInfo.companyName}! I'm interested in your concrete products for my construction project. Could you provide me with quotes and product information?`
  
  const encodedMessage = encodeURIComponent(message)
  const cleanNumber = businessInfo.whatsappNumber.replace(/\D/g, '')
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`
  
  // Open WhatsApp with error handling
  try {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  } catch (error) {
    console.error('Failed to open WhatsApp:', error)
    // Fallback: Show phone number
    alert(`WhatsApp failed to open. Please call us at: ${businessInfo.phone}`)
  }
}

/**
 * Handle call now action
 * Opens phone dialer on mobile devices - popular in Ghana
 */
function handleCallNow(): void {
  const phoneLink = `tel:${businessInfo.phone}`
  
  try {
    window.location.href = phoneLink
  } catch (error) {
    console.error('Failed to initiate call:', error)
    // Fallback: Copy number to clipboard
    navigator.clipboard?.writeText(businessInfo.phone)
    alert(`Call failed to open. Our number is: ${businessInfo.phone}`)
  }
}

// ===== Lifecycle Hooks =====
/**
 * Component initialization
 * Set up network status monitoring for offline-aware functionality
 */
onMounted(() => {
  // Monitor network status changes for offline indicator
  window.addEventListener('online', () => {
    isOnline.value = true
  })
  
  window.addEventListener('offline', () => {
    isOnline.value = false
  })
  
  // Track hero section view for analytics
  console.log('Hero section loaded:', {
    page: 'home-hero',
    company: businessInfo.companyName,
    isOnline: isOnline.value,
    timestamp: new Date().toISOString()
  })
})
</script>

<!-- 
  ===== SIMPLIFIED DESIGN NOTES =====
  
  TEKLUMEN COMPLIANCE:
  - Mobile-first responsive design ✓
  - Touch targets minimum 48px (min-h-[48px]) ✓
  - WhatsApp integration as primary CTA ✓
  - Offline support with network status indicator ✓
  - Simple English error messages with clear recovery steps ✓
  - Bundle size optimization: minimal JavaScript ✓

  WHAT WE KEPT:
  - Professional construction industry hero design
  - Mobile-first responsive layout with proper touch targets
  - WhatsApp priority (green primary CTA button)
  - Company branding and credibility (30+ years, 5,000+ projects)
  - Trust indicators and social proof
  - Accessibility features (ARIA labels, semantic HTML)
  - Visual appeal with gradients and animations

  WHAT WE SIMPLIFIED:
  - Removed complex animations - just basic hover effects
  - Simple network status monitoring - online/offline only
  - Basic WhatsApp/phone functions with error handling
  - Static content - no dynamic data loading
  - Minimal JavaScript - only essential functionality
  - Clean, easy-to-understand code structure

  GHANA-SPECIFIC OPTIMIZATIONS:
  - WhatsApp as primary contact method (green button, prominent)
  - Phone number integration for direct calling
  - Offline indicator for intermittent connectivity
  - Mobile-first design for Ghana's mobile usage patterns
  - Large touch targets for reliable mobile interaction
  - Clear messaging appropriate for varying digital literacy

  LEARNING NOTES:
  - This shows how to create compelling hero sections with minimal code
  - WhatsApp integration provides immediate customer engagement
  - Offline awareness improves UX in low-connectivity areas
  - All styling uses Tailwind utility classes for maintainability
  - Error handling provides fallbacks when features fail
  - Trust indicators build credibility without complex functionality
-->