<template>


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
                            <svg class="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>{{ feature }}</span>
                        </li>
                    </ul>

                    <div class="space-y-3">
                        <button @click="contactForPlan(plan)"
                            class="w-full py-4 px-4 rounded-lg font-medium transition-colors min-h-[48px]" :class="index === 1
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

</template>

<script setup lang="ts">

import { ref, computed } from 'vue'


interface PricingPlan {
    id: string
    name: string
    price: number
    description: string
    features: string[]
}


// ===== Business Configuration =====
const businessPhone = '+233594093926'
const whatsappLink = computed(() =>
    `https://wa.me/${businessPhone.replace(/\D/g, '')}?text=Hello! I'm interested in TekLumin's web design services. Can we discuss my project?`
)

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
        price: 9000,
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
            '5-page website + blog',
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


</script>