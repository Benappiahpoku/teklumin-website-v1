<template>
  <!-- ===== TEKLUMEN TOOLS SECTION ===== -->
  <section class="bg-gray-50 py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Simple Tools, Built by TekLumen
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Professional business tools designed for Ghana's entrepreneurs and small businesses.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a
          v-for="tool in tools"
          :key="tool.id"
          :href="tool.link"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 group focus:outline-none focus:ring-2 focus:ring-black"
          style="text-decoration: none;"
        >
          <div class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img
              v-if="tool.image"
              :src="tool.image"
              :alt="tool.name + ' icon'"
              class="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:underline">{{ tool.name }}</h3>
            <p class="text-gray-600 mb-4">{{ tool.description }}</p>
            <span class="text-black hover:text-gray-700 transition-colors font-medium group-hover:underline">
              → Try {{ tool.name }}
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Tool {
  id: string
  name: string
  description: string
  image: string
  link: string
}

const tools = ref<Tool[]>([
  
  {
    id: '2',
    name: 'Invoice Maker',
    description: 'Create professional invoices instantly. Perfect for Ghana businesses with mobile money integration.',
    image: '/invoiceteklumin.png',
    link: 'https://invoicemaker-eosin.vercel.app/'
  },
  {
    id: '2',
    name: 'Receipt Maker',
    description: 'Generate clean, professional receipts for your customers. Mobile-optimized and printer-friendly.',
    image: '/receiptteklumin.png',
    link: 'https://receiptmaker-ten.vercel.app/'
  },
   {
    id: '3',
    name: 'Sales Tracker',
    description: 'Simple sales tracking tool to monitor your business performance and growth over time.',
    image: '/salestrackerteklumin.png',
    link: 'https://salestracker-gamma.vercel.app/'
  },
  {
    id: '4',
    name: 'Income Tracker - Coming Soon',
    description: 'Track your money, even without internet. Record, review, and share your income anytime, anywhere in Ghana.',
    image: '/incometrackerteklumin.png',
    link: '#' // Add the correct link if available
  }
])
</script>