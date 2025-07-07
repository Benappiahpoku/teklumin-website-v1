<template>

    <!-- ===== CLIENT TESTIMONIALS SECTION ===== -->
    <section class="bg-gray-50 py-12 md:py-16">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    What People Say
                </h2>
                <p class="text-gray-600 text-lg">
                    Real feedback from real clients who trusted us with their projects.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="testimonial in projectTestimonials" :key="testimonial.id"
                    class="bg-white p-6 rounded-lg shadow-sm">
                    <div class="flex text-yellow-400 mb-4">
                        <span v-for="star in 5" :key="star">⭐</span>
                    </div>
                    <blockquote class="text-gray-700 text-lg mb-4 italic">
                        "{{ testimonial.quote }}"
                    </blockquote>
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="font-semibold text-gray-900">{{ testimonial.name }}</p>
                            <p class="text-sm text-gray-600">{{ testimonial.project }}</p>
                        </div>
                        <div class="text-right">
                            <p class="text-sm text-gray-500">{{ testimonial.location }}</p>
                            <p class="text-sm text-gray-500">{{ testimonial.deliveryTime }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

import {ref} from 'vue'


interface Testimonial {
    id: string
    name: string
    project: string
    location: string
    quote: string
    deliveryTime: string
}

// ===== Testimonials Data =====
const projectTestimonials = ref<Testimonial[]>([
    {
        id: '1',
        name: 'Jerry Donkor',
        project: 'Jerry Donkor & Associates',
        location: 'Accra, Ghana',
        quote: 'They delivered my site in 2 days — super helpful team. The design is clean and my customers love it.',
        deliveryTime: '2 days'
    },
    {
        id: '2',
        name: 'Naachiaa Estates',
        project: 'Naachiaa Estates Ltd',
        location: 'Kumasi, Ghana',
        quote: 'I love the simplicity. My site works on every phone and its fast',
        deliveryTime: '4 days'
    },
    {
        id: '3',
        name: 'Cenovate',
        project: 'Consultancy Hub',
        location: 'Accra, Ghana',
        quote: 'Professional work and great communication. They understood exactly what we needed.',
        deliveryTime: '2 days'
    }
])



</script>