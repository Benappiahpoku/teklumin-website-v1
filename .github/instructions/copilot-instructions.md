# TekLumin Vue.js Copilot Instructions

## Architecture Overview

- **Vue 3 + TypeScript + Composition API** with `<script setup>` syntax
- **Mobile-first PWA** optimized for Ghana's network conditions (3G/4G)
- **Network-aware components** that adapt to connection quality
- **Offline-first strategy** with service worker caching and fallbacks

## Core Patterns

### 1. Network-Aware Development

```typescript
// Always import and use network status in components
import { useNetworkStatus } from '@/composables/useNetworkStatus'

const { networkInfo, isSlowConnection, shouldReduceDataUsage } = useNetworkStatus()

// Adapt behavior based on connection
const imageQuality = computed(() => (isSlowConnection() ? 'low' : 'high'))
```

### 2. Component Structure

```vue
<!-- Base components in src/components/base/ -->
<template>
  <button class="min-h-[48px] px-4" <!-- Always 48px+ touch targets -->
    :class="{ 'opacity-75 cursor-not-allowed': disabled }" >
    <slot />
  </button>
</template>

<script setup lang="ts">
  interface Props {
    disabled?: boolean
  }

  withDefaults(defineProps<Props>(), {
    disabled: false
  })
</script>
```

### 3. Ghana Business Integration

```vue
<!-- WhatsApp integration pattern -->
<template>
  <a
    :href="`https://wa.me/233594093926?text=${encodeURIComponent(message)}`"
    class="bg-green-600 text-white px-6 py-3 rounded-lg"
    target="_blank"
    rel="noopener"
  >
    📱 WhatsApp Us
  </a>
</template>

<script setup lang="ts">
  const message = "Hello! I'm interested in your services."
</script>
```

### 4. Currency & Business Logic

```typescript
// Ghanaian currency formatting
export function formatGhanaianCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS'
  }).format(amount)
}

// Business hours (Ghana time)
const businessHours = {
  weekdays: '8:00 AM - 5:00 PM',
  saturday: '9:00 AM - 1:00 PM',
  sunday: 'Closed'
}
```

### 5. PWA & Offline Patterns

```typescript
// Service worker caching strategy
runtimeCaching: [
  {
    urlPattern: /^https:\/\/api\./i,
    handler: 'NetworkFirst',
    options: {
      networkTimeoutSeconds: 5, // Ghana network timeout
      expiration: {
        maxEntries: 200,
        maxAgeSeconds: 24 * 60 * 60
      }
    }
  }
]
```

## Development Workflow

### Build Commands

```bash
npm run dev          # Development with TypeScript checking
npm run build        # Production build with icon generation
npm run dev:slow     # Test with simulated slow network
npm run lighthouse   # Performance audit for mobile
npm run analyze      # Bundle size analysis
```

### Component Creation

1. **Base components** → `src/components/base/` (buttons, inputs, forms)
2. **Common sections** → `src/components/common/` (testimonials, pricing, contact)
3. **Layout components** → `src/components/layout/` (header, footer, navigation)
4. **Network-aware** → `src/components/network/` (connection-dependent features)

### File Organization

```
src/
├── components/
│   ├── base/         # Reusable UI primitives
│   ├── common/       # Page sections (testimonials, pricing)
│   ├── layout/       # Navigation, footer, headers
│   └── network/      # Connection-aware components
├── composables/      # Shared Vue logic
├── views/           # Page components
└── router/          # Vue Router configuration
```

## Key Conventions

### 1. Touch Targets & Mobile UX

- Minimum 48px height for all interactive elements
- Ripple effects for touch feedback
- Mobile-first responsive design
- `user-scalable=no` in viewport meta

### 2. Error Handling

```vue
<template>
  <div v-if="error" class="text-center p-4">
    <p class="text-red-600 mb-4">{{ error.message }}</p>
    <button @click="retry" class="bg-red-600 text-white px-4 py-2 rounded">Try Again</button>
  </div>
  <div v-else>
    <!-- Main content -->
  </div>
</template>
```

### 3. Loading States

```vue
<template>
  <div v-if="loading" class="flex justify-center p-8">
    <LoadingSpinner />
  </div>
  <div v-else-if="isOnline">
    <!-- Content -->
  </div>
  <div v-else>
    <OfflineIndicator />
  </div>
</template>
```

### 4. Performance Optimization

- Lazy load images with `loading="lazy"`
- Use `IntersectionObserver` for scroll-based loading
- Implement virtual scrolling for large lists
- Bundle splitting for route-based code splitting

## Business Context

- **Target Market**: Ghanaian businesses, startups, consultants
- **Primary Contact**: WhatsApp (+233594093926)
- **Currency**: Ghanaian Cedi (GHS)
- **Delivery**: 2-5 day turnaround for websites
- **Hosting**: Free lifetime hosting included

## Testing Patterns

```typescript
// Component testing with network simulation
describe('ContactForm', () => {
  it('shows offline message when network is down', async () => {
    // Mock offline state
    mockNetworkStatus({ isOnline: false })

    const wrapper = mount(ContactForm)
    expect(wrapper.text()).toContain('You are currently offline')
  })
})
```

## Deployment

- **Platform**: Netlify (optimal for static sites)
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **PWA**: Auto-updates enabled
- **CDN**: Automatic global distribution

Remember: Every component should work offline and adapt to network conditions. Prioritize mobile UX and Ghanaian business patterns.
