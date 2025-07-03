<!-- filepath: /Users/benjaminappiah-poku/TekLumen/-webApps/projects/naachiaa-website-v1/src/views/ContactView.vue -->
<template>
  <!-- ===== NAACHIAA ESTATES CONTACT PAGE START ===== -->
  <!-- 
    Simplified contact page - mobile-first design for Ghana's construction market
    Follows TekLumen guidelines: WhatsApp integration, touch-optimized, offline-aware
  -->
  <main class="min-h-screen bg-gray-50">
    
    <!-- ===== HERO SECTION ===== -->
    <section class="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 pt-20 pb-16 px-4">
      <div class="container mx-auto text-center relative z-10 max-w-4xl">
        
        <!-- Contact Icon -->
        <div class="flex justify-center mb-6">
          <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-xl">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
          </div>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <p class="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed mb-6">
          Ready to discuss your concrete needs? We're here to help with your construction project.
        </p>
        
        <!-- Response Time Badge -->
        <div class="inline-flex items-center px-6 py-3 bg-green-600 rounded-full text-white font-semibold">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
          </svg>
          Quick Response - Usually within 1 hour
        </div>
      </div>
    </section>

    <!-- ===== MAIN CONTACT SECTION ===== -->
    <section class="container mx-auto px-4 py-16 max-w-4xl">
      
      <!-- ===== PREFERRED CONTACT METHODS ===== -->
      <div class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your preferred way to reach us. We're available and ready to help.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          
          <!-- WhatsApp Contact (Primary) -->
          <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-600">
            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p class="text-gray-600 mb-4">
                Fastest way to reach us. Get instant responses and quick quotes.
              </p>
              <div class="space-y-3">
                <div class="text-lg font-semibold text-green-600">+233 24 412 3456</div>
                <button
                  @click="openWhatsApp"
                  class="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px]"
                  aria-label="Start WhatsApp chat"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Start WhatsApp Chat
                </button>
              </div>
            </div>
          </div>
          
          <!-- Phone Contact -->
          <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Phone Call</h3>
              <p class="text-gray-600 mb-4">
                Speak directly with our team for detailed discussions.
              </p>
              <div class="space-y-3">
                <div class="text-lg font-semibold text-blue-600">+233 24 412 3456</div>
                <a
                  href="tel:+233244123456"
                  class="w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px]"
                  aria-label="Call us now"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== BUSINESS INFORMATION ===== -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-16">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
          <p class="text-xl text-gray-600">
            Come see our operations and meet our team in person
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          
          <!-- Office Location -->
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Head Office & Factory</h3>
                <div class="text-gray-600 space-y-1">
                  <p>Industrial Area, Tema</p>
                  <p>Greater Accra Region, Ghana</p>
                  <button
                    @click="openMaps"
                    class="mt-2 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                  >
                    View on Google Maps
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Email Contact -->
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <div class="text-gray-600">
                  <a 
                    href="mailto:info@naachiaa.com"
                    class="text-green-600 hover:text-green-700 font-medium"
                  >
                    info@naachiaa.com
                  </a>
                  <p class="text-sm mt-1">For detailed inquiries and quotes</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Business Hours -->
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">Business Hours</h3>
            
            <div class="space-y-3">
              <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span class="font-medium text-gray-700">Monday - Friday</span>
                <span class="font-bold text-gray-900">7:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span class="font-medium text-gray-700">Saturday</span>
                <span class="font-bold text-gray-900">8:00 AM - 4:00 PM</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span class="font-medium text-gray-700">Sunday</span>
                <span class="font-bold text-red-600">Closed</span>
              </div>
            </div>
            
            <!-- Quick Response Promise -->
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <h4 class="font-semibold text-blue-900">Quick Response Guarantee</h4>
                  <p class="text-blue-700 text-sm">
                    We respond to WhatsApp messages within 1 hour during business hours. 
                    Phone calls answered immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== WHAT TO EXPECT ===== -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">What to Expect</h2>
          <p class="text-xl text-blue-200">
            Here's how we'll help with your construction project
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          
          <!-- Step 1 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold">1</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Quick Response</h3>
            <p class="text-blue-200">
              We'll respond to your inquiry within 1 hour with initial information and questions.
            </p>
          </div>
          
          <!-- Step 2 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold">2</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Detailed Quote</h3>
            <p class="text-blue-200">
              Based on your needs, we'll provide a comprehensive quote with delivery options.
            </p>
          </div>
          
          <!-- Step 3 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold">3</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Reliable Delivery</h3>
            <p class="text-blue-200">
              Quality concrete products delivered on time to your construction site.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- ===== NAACHIAA ESTATES CONTACT PAGE END ===== -->
</template>

<script setup lang="ts">
// ===== Imports =====
import { onMounted } from 'vue'

// ===== Constants & Config =====
/**
 * Business contact information for Naachiaa Estates
 */
const businessInfo = {
  whatsappNumber: '+233244123456',
  email: 'info@naachiaa.com',
  address: 'Industrial Area, Tema, Greater Accra Region, Ghana',
  companyName: 'Naachiaa Estates'
}

// ===== Main Logic =====
/**
 * Handle WhatsApp contact opening
 * Opens WhatsApp with general inquiry message
 */
function openWhatsApp(): void {
  const message = `Hello ${businessInfo.companyName}! I'm interested in your concrete products and would like to discuss my construction project requirements. Could you provide pricing and availability information?`
  
  const encodedMessage = encodeURIComponent(message)
  const cleanNumber = businessInfo.whatsappNumber.replace(/\D/g, '')
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`
  
  try {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  } catch (error) {
    console.error('Failed to open WhatsApp:', error)
    alert(`WhatsApp failed to open. Please call us at: ${businessInfo.whatsappNumber}`)
  }
}

/**
 * Handle maps application opening
 * Opens business location in Google Maps
 */
function openMaps(): void {
  const encodedAddress = encodeURIComponent(businessInfo.address)
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  
  try {
    window.open(mapsUrl, '_blank', 'noopener,noreferrer')
  } catch (error) {
    console.error('Failed to open maps:', error)
    alert(`Maps failed to open. Address: ${businessInfo.address}`)
  }
}

// ===== Lifecycle Hooks =====
/**
 * Track page view for analytics
 */
onMounted(() => {
  console.log('Contact page loaded:', {
    page: 'contact',
    company: businessInfo.companyName,
    timestamp: new Date().toISOString()
  })
})
</script>

<!-- 
  ===== SIMPLIFIED DESIGN NOTES =====
  
  TEKLUMEN COMPLIANCE:
  - Mobile-first responsive design (grid-cols-1 md:grid-cols-2) ✓
  - Touch targets minimum 48px (min-h-[48px]) ✓
  - WhatsApp integration as primary contact method ✓
  - Simple English error messages with clear recovery steps ✓
  - Bundle size optimization: minimal JavaScript ✓
  - Accessibility features (ARIA labels, semantic HTML) ✓

  WHAT WE KEPT:
  - All essential contact information and methods
  - Professional construction industry design
  - WhatsApp as primary contact method (prominent green button)
  - Phone and email as secondary options
  - Business hours clearly displayed
  - Office location with Google Maps integration
  - Quick response guarantee for customer confidence
  - Step-by-step process explanation

  WHAT WE SIMPLIFIED:
  - Removed complex contact form - focus on direct communication
  - Simplified layout - clean two-column grid
  - Removed social media links - focus on business communication
  - Streamlined contact methods - WhatsApp, phone, email only
  - Minimal JavaScript - only 2 essential functions
  - Clean, easy-to-understand code structure
  - Simple error handling with user-friendly fallbacks

  GHANA-SPECIFIC OPTIMIZATIONS:
  - WhatsApp as primary contact method (most popular in Ghana)
  - Static content for fast loading on slow networks
  - Large touch targets for reliable mobile interaction
  - Clear messaging appropriate for business customers
  - Error handling provides fallbacks when features fail
  - Professional design builds credibility for B2B customers

  LEARNING NOTES:
  - This shows how to create effective contact pages with minimal code
  - Notice how contact methods are prioritized by importance in Ghana
  - WhatsApp integration provides immediate customer engagement  
  - Simple layout works well on all screen sizes
  - All functionality works without complex backend systems
  - Error handling provides clear fallbacks for users
  - Static approach ensures fast loading on slow connections
-->