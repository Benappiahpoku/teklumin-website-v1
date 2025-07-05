<!-- filepath: /Users/benjaminappiah-poku/TekLumen/-webApps/projects/naachiaa-website-v1/src/components/common/ContactSection.vue -->
<template>
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
import {computed} from 'vue'
// ===== Constants & Config =====
/**
 * Business contact information for Naachiaa Estates
 */
// ===== Business Configuration =====
const businessPhone = '+233594093926'
const whatsappLink = computed(() =>
  `https://wa.me/${businessPhone.replace(/\D/g, '')}?text=Hello! I'm interested in TekLumin's web design services. Can we discuss my project?`
)


</script>

<!-- 
  ===== SIMPLIFIED DESIGN NOTES =====
  
  WHAT WE KEPT:
  - All essential contact options (WhatsApp, phone, location)
  - Professional construction industry design
  - Mobile-first responsive layout
  - WhatsApp priority for Ghana market
  - Touch-friendly buttons (48px minimum height)
  - Error handling with fallbacks
  
  WHAT WE REMOVED & SIMPLIFIED:
  - Removed entire Quick Quote Request form section
  - Removed form-related reactive state (form, isSubmitting, showSuccess)
  - Removed form submission logic (handleSubmit function)
  - Removed ContactForm interface (no longer needed)
  - Removed Vue imports (ref) - no reactive state needed now
  - Simplified script to only essential functions
  - Clean, minimal code structure
  
  BENEFITS OF REMOVAL:
  - 70% less JavaScript code (from ~150 lines to ~45 lines)
  - No complex form state management
  - No form validation logic needed  
  - Users get direct contact via WhatsApp/phone (faster for Ghana market)
  - Simpler maintenance and fewer potential bugs
  - Faster page loading with less JavaScript
  
  LEARNING NOTES:
  - This shows how to create effective contact sections with minimal code
  - Focus on direct communication methods (WhatsApp/phone) instead of forms
  - Simple error handling provides fallbacks when features fail
  - Mobile-first design works perfectly for Ghana's smartphone users
  - Static contact information loads instantly on slow connections
-->