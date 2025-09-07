<template>
    <!-- ===== FEATURED PROJECTS SECTION ===== -->
    <section class="bg-gray-50 py-12 md:py-16">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Featured Projects
                </h2>
                <p class="text-gray-600 text-lg max-w-2xl mx-auto">
                    Our most recent work showcasing different industries and design approaches.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="project in featuredProjects" :key="project.id"
                    class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                    <div class="aspect-video bg-gray-100 flex items-center justify-center">
                        <img :src="project.image" :alt="project.name + ' project screenshot'"
                            class=" w-[340] h-[215] object-cover" loading="lazy" />
                    </div>
                    <div class="p-8">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                                {{ project.category }}
                            </span>
                            <span class="text-gray-500 text-sm">{{ project.deliveryTime }}</span>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ project.name }}</h3>
                        <p class="text-gray-600 mb-4 text-lg">{{ project.description }}</p>
                        <div class="flex flex-wrap gap-2 mb-6">
                            <span v-for="feature in project.features" :key="feature"
                                class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {{ feature }}
                            </span>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-3">
                            <button @click="contactForProject(project)"
                                class="bg-black text-white px-6 md:px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                                → Build Similar
                            </button>
                           
                            <a :href="project.detailsUrl || '#' " target="_blank" rel="noopener noreferrer"
                                class="border-2 border-gray-300 text-gray-700 px-2 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium flex items-center justify-center">
                                → View Details
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// ===== Business Configuration =====
const businessPhone = '+233594093926'

interface Project {
    id: string
    name: string
    description: string
    image: string
    category: string
    deliveryTime: string
    location?: string
    features?: string[]
    detailsUrl?: string
}

// ===== Featured Projects Data =====
const featuredProjects = ref<Project[]>([
    {
        id: '1',
        name: 'KHY Business',
        description: 'Furniture Business website built for trust, simplicity, and clarity. Clean product listings with detailed information and easy contact options.',
        image: '/khyproject.webp',
        category: 'Furniture',
        deliveryTime: '3 days',
        location: 'Accra, Ghana',
        features: ['Mobile-first design', 'Product catalog', 'WhatsApp integration', 'Free Lifetime hosting'],
        detailsUrl: 'https://khybusiness.vercel.app/'
    },
    {
        id: '2',
        name: 'Cenovate',
        description: 'A professional 5-page business website optimized for mobile users. Showcases comprehensive project portfolio, authentic client testimonials, and delivers an intuitive mobile-first browsing experience.',
        image: '/cenovateproject.webp',
        category: 'Project Services',
        deliveryTime: '5 days',
        location: 'Kumasi, Ghana',
        features: ['Mobile-first design', 'Project catalog', 'Client testimonials'],
        detailsUrl: 'https://cenovate.vercel.app'
    },
    {
        id: '3',
        name: 'Mugs Boutique',
        description: 'A clean, mobile-first business website designed to position Mugs Boutique as a trusted consultancy. This one pager features a modern layout, showcasing the SME Tools for African Businesses —crafted for clarity, speed, and professionalism.',
        image: '/mugsboutiqueproject.webp',
        category: 'E-commerce',
        deliveryTime: '3 days',
        location: 'Accra, Ghana',
        features: ['Mobile - first design', 'Apps catalog', 'WhatsApp integration'],
        detailsUrl: 'https://www.mugsboutique.com'
    },
    {
        id: '1',
        name: 'Naachiaa Estates',
        description: 'Real estate website built for trust, simplicity, and clarity. Clean property listings with detailed information and easy contact options.',
        image: '/naachiaaproject.webp',
        category: 'Real Estate',
        deliveryTime: '3 days',
        features: ['Mobile-first design', 'Product catalog', 'WhatsApp integration', 'Free Lifetime hosting'],
        detailsUrl: 'https://naachiaa.netlify.app/'
    },
    {
        id: '2',
        name: 'Jerry Donkor & Associates ',
        description: 'A clean business 5-pager built for mobile users. Features project showcase, client testimonials, and seamless mobile first design experience.',
        image: '/jdaproject.webp',
        category: 'Project Services',
        deliveryTime: '5 days',
        features: ['Mobile-first design', 'Project catalog', 'CLient testimonials'],
        detailsUrl: 'https://www.jdapm.com'
    },
    {
        id: '3',
        name: 'Benappiahpoku Portfolio',
        description: 'A clean, mobile-first business website designed to position Ben Appiah Poku as a trusted consultancy. This blog based website features a modern layout, showcasing the SME Tools for African Businesses —crafted for clarity, speed, and professionalism.',
        image: '/benappiahpokuproject.webp',
        category: 'Portfolio',
        deliveryTime: '2 days',
        location: 'Accra, Ghana',
        features: ['Mobile - first design', 'Apps catalog', 'WhatsApp integration'],
        detailsUrl: 'https://www.benappiahpoku.com'
    },
])

function contactForProject(project: Project): void {
    const message = `Hello! I'm interested in building a website similar to ${project.name}. Can we discuss my project requirements?`
    const whatsappUrl = `https://wa.me/${businessPhone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
}
</script>
