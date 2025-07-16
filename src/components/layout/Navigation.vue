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
          <RouterLink to="/">
            <TekLumenLogo class="w-16 h-16" />
          </RouterLink>
          <div>
            <RouterLink to="/">
              <h1 class="text-xl font-bold text-gray-900">TekLumin</h1>
              <p class="text-xs text-gray-600">Helping You Grow with Tech</p>
            </RouterLink>
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
          <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" class="nav-link"
            :class="{ 'nav-link--active': isActiveRoute(item.to) }" exact>
            {{ item.label }}
          </RouterLink>
          <a :href="whatsappLink" target="_blank" rel="noopener noreferrer"
            class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
            📱 WhatsApp
          </a>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="showMobileMenu" class="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
        <div class="flex flex-col gap-4">
          <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" @click="closeMobileMenu"
            class="nav-link-mobile" :class="{ 'nav-link--active': isActiveRoute(item.to) }" exact>
            {{ item.label }}
          </RouterLink>
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
import { useRoute, RouterLink } from 'vue-router'
import TekLumenLogo from '../base/TekLumenLogo.vue'

// ===== Navigation Items =====
const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
]

// ===== Reactive State =====
const showMobileMenu = ref(false)

// ===== Business Configuration =====
const businessPhone = '+233594093926'
const whatsappLink = computed(() =>
  `https://wa.me/${businessPhone.replace(/\D/g, '')}?text=Hello! I'm interested in TekLumin's web design services. Can we discuss my project?`
)

// ===== Route Detection =====
const route = useRoute()
function isActiveRoute(path: string) {
  return route.path === path
}

function toggleMobileMenu(): void {
  showMobileMenu.value = !showMobileMenu.value
}

function closeMobileMenu(): void {
  showMobileMenu.value = false
}
</script>

<style scoped>
/* Desktop nav underline effect */
.nav-link {
  position: relative;
  padding-bottom: 4px;
  color: #374151;
  /* Tailwind gray-700 */
  transition: color 0.2s;
  font-weight: 500;
  text-decoration: none;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background: #000;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover,
.nav-link:focus {
  color: #111827;
  /* Tailwind gray-900 */
}

.nav-link:hover::after,
.nav-link:focus::after {
  width: 100%;
}

.nav-link--active {
  color: #111827 !important;
  /* Tailwind gray-900 */
}

.nav-link--active::after {
  width: 100%;
  background: #000;
}

/* Mobile nav underline effect */
.nav-link-mobile {
  position: relative;
  padding-bottom: 4px;
  color: #374151;
  transition: color 0.2s;
  font-weight: 500;
  text-decoration: none;
  padding-top: 8px;
  padding-bottom: 8px;
}

.nav-link-mobile::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background: #000;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link-mobile:hover,
.nav-link-mobile:focus {
  color: #111827;
}

.nav-link-mobile:hover::after,
.nav-link-mobile:focus::after {
  width: 100%;
}

.nav-link-mobile.nav-link--active {
  color: #111827 !important;
}

.nav-link-mobile.nav-link--active::after {
  width: 100%;
  background: #000;
}
</style>