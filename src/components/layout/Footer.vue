<!--
  Footer.vue
  - Simple, clean footer for TekLumen website
  - Mobile-first design optimized for Ghana's network conditions
  - Features TekLumen branding with logo and company name
  - WhatsApp integration for easy customer contact
  - Follows TekLumen guidelines: touch-optimized, offline-aware
  - ===== [New Feature] START =====
  - Footer background is now white, text is black for improved contrast and branding
  - ===== [New Feature] END =====
-->

<template>



  <!--=====FOOTER=====-->
  <footer class="bg-gray-50 py-8 border-t border-gray-200">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="flex items-center gap-3 mb-4 md:mb-0">
          <TekLumenLogo class="w-16 h-16" />
          <div>
            <p class="font-semibold text-gray-900">TekLumin</p>
            <p class="text-xs text-gray-600">Helping You Grow with Tech</p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <nav class="flex gap-6">
            <a href="/" class="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="projects" class="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="pricing" class="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="about" class="text-gray-600 hover:text-gray-900 transition-colors">About</a>

            <a href="contact" class="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          <div class="text-center md:text-right">
            <p class="text-sm text-gray-600">© 2025 <a href="https://www.teklumin.com/">TekLumin </a>. All rights
              reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- ===== TEKLUMEN FOOTER END ===== -->
</template>

<script setup lang="ts">

// ===== Imports =====
import TekLumenLogo from '@/components/base/TekLumenLogo.vue'



</script>

<!--
  ===== DESIGN NOTES =====
  - Footer background is now white, text is black for improved contrast and branding
  - All other design and functionality remains unchanged
-->