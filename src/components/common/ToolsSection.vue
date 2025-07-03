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
        <div v-for="tool in tools" :key="tool.id"
          class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span class="text-2xl">{{ tool.icon }}</span>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ tool.name }}</h3>
              <p class="text-gray-600 mb-4">{{ tool.description }}</p>
              <button class="text-black hover:text-gray-700 transition-colors font-medium">
                → Try {{ tool.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from 'vue'

interface Tool {
  id: string
  name: string
  description: string
  icon: string
}


const tools = ref<Tool[]>([
  {
    id: '1',
    name: 'Invoice Generator',
    description: 'Create professional invoices instantly. Perfect for Ghana businesses with mobile money integration.',
    icon: '📄'
  },
  {
    id: '2',
    name: 'Receipt Maker',
    description: 'Generate clean, professional receipts for your customers. Mobile-optimized and printer-friendly.',
    icon: '🧾'
  },
  {
    id: '3',
    name: 'Sales Tracker',
    description: 'Simple sales tracking tool to monitor your business performance and growth over time.',
    icon: '📊'
  },
  {
    id: '4',
    name: 'Invoice Maker',
    description: 'Advanced invoicing tool with recurring billing, payment tracking, and customer management.',
    icon: '💼'
  }
])

</script>