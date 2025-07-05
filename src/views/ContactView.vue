<template>
  <!-- ===== OFFLINE INDICATOR ===== -->
  <div v-if="!isOnline" class="bg-orange-50 border-b border-orange-200 p-3">
    <div class="container mx-auto px-4">
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd" />
        </svg>
        <span class="text-orange-800 text-sm font-medium">You're offline</span>
        <span class="text-orange-700 text-xs">Contact info cached for your convenience</span>
      </div>
    </div>
  </div>

  <!-- ===== CONTACT HERO SECTION ===== -->
  <section class="bg-white py-12 md:py-20">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Let's Get to Work
        </h1>
        <p class="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          Whether you're ready to build or just exploring options, we're here to help.
          Fast responses, honest advice, and clear communication.
        </p>
        <div class="bg-gray-50 p-6 rounded-lg inline-block">
          <div class="flex items-center gap-2 text-green-700">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" />
            </svg>
            <span class="font-medium">Average response time: Under 2 hours</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== CONTACT METHODS SECTION ===== -->
  <section class="bg-gray-50 py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Choose the way that works best for you. We're responsive across all channels.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- WhatsApp Contact -->
        <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-6">📱</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">WhatsApp (Preferred)</h3>
          <p class="text-gray-600 mb-6">
            Get instant responses to your questions. Perfect for quick discussions about your project.
          </p>
          <div class="space-y-4">
            <p class="text-gray-700 font-medium">{{ businessPhone }}</p>
            <a :href="whatsappLink" target="_blank" rel="noopener noreferrer"
              class="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium min-h-[48px] flex items-center justify-center">
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

        <!-- Email Contact -->
        <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-6">✉️</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Email</h3>
          <p class="text-gray-600 mb-6">
            For detailed project discussions or formal inquiries. We'll get back to you within 24 hours.
          </p>
          <div class="space-y-4">
            <p class="text-gray-700 font-medium">hello@teklumen.com</p>
            <a href="mailto:hello@teklumen.com"
              class="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium min-h-[48px] flex items-center justify-center">
              📧 Send Email
            </a>
          </div>
        </div>

        <!-- Phone Contact -->
        <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-6">📞</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Phone Call</h3>
          <p class="text-gray-600 mb-6">
            For urgent matters or if you prefer talking through your project requirements.
          </p>
          <div class="space-y-4">
            <p class="text-gray-700 font-medium">{{ businessPhone }}</p>
            <a :href="`tel:${businessPhone.replace(/\D/g, '')}`"
              class="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium min-h-[48px] flex items-center justify-center">
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== OFFICE INFORMATION SECTION ===== -->
  <section class="bg-white py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Office
          </h2>
          <p class="text-gray-600 text-lg">
            Located in the heart of Accra. We're a remote-first team, but always happy to meet in person.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">📍 Location</h3>
            <p class="text-gray-700">
              {{ officeAddress }}
            </p>
            <p class="text-gray-600 text-sm mt-2">
              (Remote-first team - we meet clients by appointment)
            </p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">🕒 Business Hours</h3>
            <div class="space-y-1 text-gray-700">
              <p><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</p>
              <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
            <p class="text-gray-600 text-sm mt-2">
              WhatsApp messages answered 24/7
            </p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">🌍 Service Areas</h3>
            <p class="text-gray-700 mb-2">
              <strong>Primary:</strong> Ghana (Accra, Kumasi, all regions)
            </p>
            <p class="text-gray-700">
              <strong>Also serving:</strong> Nigeria, worldwide (remote)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== MAP SECTION ===== -->
  <section class="bg-gray-50 py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Find Us
        </h2>
        <p class="text-gray-600 text-lg">
          Located in the heart of Accra. Drop by for a coffee and project discussion.
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <div class="relative h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0126766543274!2d-0.1794844!3d5.5603666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9082a141400f%3A0x3b31d8a77909a7e9!2s29%20Labone%20Crescent%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2s!4v1621234567890!5m2!1sen!2s"
              class="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="TekLumen Office Location"
            ></iframe>
            <div v-if="!isOnline" class="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div class="text-center p-4">
                <div class="text-4xl mb-4">📍</div>
                <p class="text-gray-600">
                  Map unavailable offline<br />
                  <strong>{{ officeAddress }}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== QUICK ACTIONS SECTION ===== -->
  <section class="bg-black py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p class="text-gray-300 text-lg mb-8">
          Don't wait. The sooner we start, the sooner you'll have your professional website live and working for your business.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="whatsappLink" target="_blank" rel="noopener noreferrer"
            class="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-medium min-h-[48px] flex items-center justify-center">
            📱 WhatsApp Now
          </a>
          <a href="mailto:hello@teklumen.com"
            class="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium min-h-[48px] flex items-center justify-center">
            ✉️ Email Us
          </a>
        </div>

        <div class="mt-8 text-gray-400 text-center">
          <p>Questions? We're here to help.</p>
          <p class="mt-2">No pressure, just honest advice about your project.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// ===== Reactive State =====
const isOnline = ref(navigator.onLine)

// ===== Business Configuration =====
const businessPhone = '+233594093926'
const officeAddress = '29 Labone Crescent, Accra, Ghana'

const whatsappLink = computed(() => 
  `https://wa.me/${businessPhone.replace(/\D/g, '')}?text=Hello! I'm interested in TekLumen's web design services. Can we discuss my project?`
)

// ===== Network Status Monitoring =====
function updateOnlineStatus(): void {
  isOnline.value = navigator.onLine
}

onMounted(() => {
  window.addEventListener('online', updateOnlineStatus)
  window.addEventListener('offline', updateOnlineStatus)
})

onUnmounted(() => {
  window.removeEventListener('online', updateOnlineStatus)
  window.removeEventListener('offline', updateOnlineStatus)
})
</script>