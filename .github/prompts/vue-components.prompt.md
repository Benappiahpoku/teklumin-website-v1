---
mode: agent
---

# Vue.js Component Development Best Practices - TekLumin

## 🎯 Task Definition

Create Vue.js components following TekLumin's mobile-first, Ghana-focused development standards. Components must be performant, accessible, and optimized for intermittent connectivity.

## 📋 Requirements & Constraints

### Core Architecture

- **Vue 3 Composition API** with `<script setup>` syntax
- **TypeScript** for type safety and better DX
- **Mobile-first responsive design** (320px minimum width)
- **Network-aware behavior** using `useNetworkStatus` composable
- **Offline-first strategy** with graceful degradation

### Component Categories

- **Base Components** (`src/components/base/`): Reusable UI primitives (buttons, inputs, forms)
- **Common Components** (`src/components/common/`): Page sections (testimonials, pricing, contact)
- **Layout Components** (`src/components/layout/`): Navigation, footer, headers
- **Network Components** (`src/components/network/`): Connection-dependent features

### Ghana Business Context

- **WhatsApp Integration**: Primary contact method (+233594093926)
- **Currency**: Ghanaian Cedi (GHS) formatting
- **Business Hours**: Mon-Fri 8AM-5PM, Sat 9AM-1PM
- **Mobile Money**: MTN, Vodafone, AirtelTigo support
- **Local SEO**: Structured data for Ghanaian businesses

## 🏗️ Implementation Standards

### 1. Component Structure Template

```vue
<template>
  <!-- Mobile-first responsive design -->
  <div class="component-wrapper">
    <!-- Critical content loads first -->
    <div v-if="loading" class="flex justify-center p-4">
      <LoadingSpinner />
    </div>

    <div v-else-if="!isOnline" class="text-center p-4">
      <OfflineIndicator />
      <p class="text-gray-600">You're currently offline</p>
    </div>

    <div v-else>
      <!-- Main component content -->
    </div>
  </div>
</template>

<script setup lang="ts">
  // ===== Imports =====
  import { ref, computed, onMounted } from 'vue'
  import { useNetworkStatus } from '@/composables/useNetworkStatus'

  // ===== Props =====
  interface Props {
    variant?: 'primary' | 'secondary'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    disabled: false
  })

  // ===== Emits =====
  const emit = defineEmits<{
    (e: 'action', payload: any): void
  }>()

  // ===== Network Awareness =====
  const { isOnline, isSlowConnection, shouldReduceDataUsage } = useNetworkStatus()

  // ===== Reactive State =====
  const loading = ref(false)
  const error = ref<string | null>(null)

  // ===== Computed Properties =====
  const componentClasses = computed(() => ({
    'min-h-[48px]': true, // Touch target minimum
    'opacity-75 cursor-not-allowed': props.disabled,
    'bg-primary': props.variant === 'primary',
    'bg-gray-100': props.variant === 'secondary'
  }))

  // ===== Methods =====
  const handleAction = async () => {
    if (!isOnline.value) {
      emit('action', { type: 'offline', message: 'Action queued for when online' })
      return
    }

    try {
      loading.value = true
      // Perform action
      emit('action', { type: 'success', data: result })
    } catch (err) {
      error.value = err.message
      emit('action', { type: 'error', error: err })
    } finally {
      loading.value = false
    }
  }

  // ===== Lifecycle =====
  onMounted(() => {
    // Initialize component
  })
</script>

<style scoped>
  /* Mobile-first responsive styles */
  @media (max-width: 640px) {
    .component-wrapper {
      padding: 1rem;
    }
  }

  /* Touch feedback styles */
  @media (hover: none) {
    .interactive-element:active {
      transform: scale(0.98);
    }
  }
</style>
```

### 2. Network-Aware Patterns

```typescript
// Always check network status before API calls
const fetchData = async () => {
  if (!isOnline.value) {
    // Show offline message or cached data
    return showOfflineState()
  }

  if (isSlowConnection.value) {
    // Reduce data usage on slow connections
    return fetchMinimalData()
  }

  // Normal data fetching
  return fetchFullData()
}

// Handle offline scenarios
const showOfflineState = () => {
  // Show cached data or offline message
  // Queue actions for when online
}
```

### 3. Touch & Mobile Optimization

```vue
<!-- Touch targets minimum 48px -->
<button
  class="min-h-[48px] min-w-[48px] px-4 py-2"
  @touchstart="handleTouchStart"
  @touchend="handleTouchEnd"
>
  <!-- Ripple effect for touch feedback -->
  <span
    v-if="showRipple"
    class="absolute rounded-full bg-white/20"
    :style="rippleStyle"
  />
</button>
```

### 4. Error Handling & Recovery

```vue
<template>
  <div v-if="error" class="error-state p-4 text-center">
    <div class="text-red-600 mb-2">
      {{ error.message || 'Something went wrong' }}
    </div>
    <button @click="retry" class="bg-red-600 text-white px-4 py-2 rounded">Try Again</button>
    <button @click="contactSupport" class="ml-2 border border-gray-300 px-4 py-2 rounded">
      Contact Support
    </button>
  </div>
</template>

<script setup lang="ts">
  const contactSupport = () => {
    const message = `Hi! I'm having trouble with ${componentName}. Can you help?`
    const whatsappUrl = `https://wa.me/233594093926?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }
</script>
```

### 5. Performance Optimization

```vue
<!-- Lazy loading for images -->
<img
  v-if="isOnline"
  :src="imageSrc"
  loading="lazy"
  @error="handleImageError"
  class="w-full h-auto"
/>

<!-- Virtual scrolling for large lists -->
<div
  v-if="items.length > 50"
  class="virtual-list"
  @scroll="handleScroll"
>
  <div
    v-for="item in visibleItems"
    :key="item.id"
    class="list-item"
  >
    {{ item.name }}
  </div>
</div>
```

## 🧪 Testing Requirements

### Component Testing Pattern

```typescript
// ComponentName.test.ts
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ComponentName from './ComponentName.vue'

describe('ComponentName', () => {
  it('renders correctly', () => {
    const wrapper = mount(ComponentName)
    expect(wrapper.exists()).toBe(true)
  })

  it('handles offline state', () => {
    // Mock offline network status
    vi.mocked(useNetworkStatus).mockReturnValue({
      isOnline: ref(false),
      isSlowConnection: ref(false)
    })

    const wrapper = mount(ComponentName)
    expect(wrapper.text()).toContain('offline')
  })

  it('adapts to slow connections', () => {
    // Mock slow connection
    vi.mocked(useNetworkStatus).mockReturnValue({
      isOnline: ref(true),
      isSlowConnection: ref(true)
    })

    const wrapper = mount(ComponentName)
    // Test reduced data usage behavior
  })
})
```

## 📱 Mobile-First Checklist

### Before Implementation

- [ ] Design works on 320px width minimum
- [ ] Touch targets are 48px minimum
- [ ] Content loads in logical order (critical first)
- [ ] Offline functionality considered
- [ ] Network status monitoring included

### During Implementation

- [ ] Network-aware error handling
- [ ] Loading states for all async operations
- [ ] Touch feedback (ripple effects)
- [ ] Responsive breakpoints (sm/md/lg/xl)
- [ ] Accessibility attributes (aria-labels, roles)

### After Implementation

- [ ] Test on actual mobile devices
- [ ] Verify offline functionality
- [ ] Check performance on slow 3G
- [ ] Validate WhatsApp integration
- [ ] Test with screen readers

## 🎯 Success Criteria

### Functional Requirements

- ✅ Component works offline with cached data
- ✅ Adapts behavior based on network conditions
- ✅ Touch interactions provide visual feedback
- ✅ Error states offer clear recovery options
- ✅ Loading states prevent user confusion

### Performance Requirements

- ✅ First Contentful Paint < 2s on 3G
- ✅ Time to Interactive < 5s on 3G
- ✅ Bundle size impact < 50KB (additional)
- ✅ Lighthouse score > 90 mobile
- ✅ Core Web Vitals pass

### Business Requirements

- ✅ WhatsApp integration for contact actions
- ✅ Ghanaian Cedi (GHS) currency formatting
- ✅ Local business hours and contact methods
- ✅ Mobile money payment considerations
- ✅ Ghana-specific SEO and structured data

## 🚀 Quick Implementation Guide

1. **Start with mobile layout** (320px first)
2. **Add network awareness** using `useNetworkStatus`
3. **Implement offline fallbacks** for critical features
4. **Add touch feedback** (48px minimum targets)
5. **Test on slow connections** (`npm run dev:slow`)
6. **Verify WhatsApp integration** works correctly
7. **Add comprehensive error handling** with recovery options

Remember: Every component should work seamlessly whether users are on fast 4G in Accra or slow 3G in rural areas. Prioritize mobile UX and Ghanaian business patterns above all else.
