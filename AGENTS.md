# AGENTS.md - TekLumin Website Development Guide

## Dev Environment Setup

### Initial Setup

```bash
# Clone and setup the project
git clone [repository-url]
cd teklumin-website-v1

# Run the setup script to configure project name
node setup.js

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Scripts

- `npm run dev` - Start development server with hot reload and TypeScript checking
- `npm run build` - Build for production (includes icon generation)
- `npm run preview` - Preview production build locally
- `npm run test` - Run unit tests with Vitest
- `npm run coverage` - Generate test coverage report
- `npm run dev:slow` - Simulate slow network conditions for testing
- `npm run lighthouse` - Run Lighthouse performance audit
- `npm run analyze` - Analyze bundle size and dependencies

### Key Development Tools

- **Vue 3** with Composition API and `<script setup>` syntax
- **TypeScript** for type safety
- **Tailwind CSS** for styling (mobile-first approach)
- **Vite** for fast development and building
- **Vitest** for unit testing
- **Vue Router** for client-side routing
- **Pinia** for state management
- **PWA** capabilities with service workers

## Testing Instructions

### Running Tests

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run coverage

# Run specific test file
npm run test -- src/components/base/AppButton.test.ts

# Run tests in watch mode
npm run test -- --watch
```

### Testing Guidelines

- Write tests for all new components and composables
- Focus on user interactions and component behavior
- Test mobile responsiveness and offline functionality
- Use Vue Testing Library for component testing
- Mock network requests and external dependencies
- Test error states and loading conditions
- Ensure tests pass on both desktop and mobile viewports

### Performance Testing

```bash
# Test with slow network simulation
npm run dev:slow

# Run Lighthouse audit
npm run lighthouse

# Analyze bundle size
npm run analyze
```

## PR Instructions

### Branch Naming

- `feature/[description]` - New features
- `fix/[description]` - Bug fixes
- `docs/[description]` - Documentation updates
- `refactor/[description]` - Code refactoring

### Commit Message Format

```bash
[TekLumin] <type>: <description>

Examples:
[TekLumin] feat: add mobile-first navigation component
[TekLumin] fix: resolve offline indicator positioning
[TekLumin] docs: update component usage examples
```

### Pre-commit Checklist

- [ ] Run `npm run build` to ensure production build passes
- [ ] Run `npm run test` to ensure all tests pass
- [ ] Test on mobile devices and slow networks
- [ ] Verify PWA functionality and offline capabilities
- [ ] Check for TypeScript errors
- [ ] Validate responsive design across breakpoints
- [ ] Test contact forms and WhatsApp integration

### Code Review Requirements

- Mobile-first design principles followed
- Ghana-specific optimizations included
- Performance considerations addressed
- Accessibility standards met
- SEO best practices implemented
- Component reusability maintained

## Project-Specific Guidelines

### Mobile-First Development

- Design for mobile devices first (320px minimum width)
- Use responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Test on actual mobile devices, not just browser dev tools
- Consider touch interactions and gesture support
- Optimize for Ghana's mobile network conditions

### Component Development

- Use Vue 3 Composition API with `<script setup>`
- Follow the established component structure:

```bash
src/components/
├── base/          # Basic UI components (buttons, inputs, etc.)
├── common/        # Shared sections (testimonials, pricing, etc.)
├── layout/        # Layout components (header, footer, navigation)
├── enhanced/      # Advanced components with complex logic
└── network/       # Network-aware components
```

- Implement proper TypeScript interfaces
- Add loading states and error handling
- Include offline fallbacks where appropriate

### Ghana-Specific Optimizations

- Optimize for intermittent connectivity
- Include offline indicators and fallbacks
- Support mobile money payment flows
- Consider local hosting and CDN options
- Use appropriate currency formatting (GHS)
- Include local contact methods (WhatsApp, local phone numbers)

### SEO and Performance

- Implement proper meta tags and Open Graph data
- Optimize images for mobile networks
- Use lazy loading for images and components
- Minimize bundle size and loading times
- Include structured data for local business
- Generate and maintain sitemap.xml and robots.txt

### Business Logic

- Business phone: `+233594093926`
- WhatsApp integration for contact forms
- Email: `bappiahpoku@gmail.com`
- Support Ghanaian businesses and local market
- Maintain pricing in GHS currency
- Focus on fast delivery (2-5 day turnaround)

### File Organization

- Keep components modular and reusable
- Use composables for shared logic (`src/composables/`)
- Store business configuration in `src/config.ts`
- Maintain consistent naming conventions
- Document component props and usage

### Deployment

- Deploy to Netlify for optimal performance
- Configure proper build settings
- Set up custom domain handling
- Enable PWA service worker
- Configure proper caching strategies
- Monitor Core Web Vitals

## Common Issues & Solutions

### Network-Related Issues

- Test with `npm run dev:slow` to simulate poor connections
- Implement proper loading states
- Use offline storage for critical data
- Handle network errors gracefully

### Mobile Testing

- Use browser dev tools device emulation
- Test on actual mobile devices when possible
- Verify touch interactions work correctly
- Check font sizes and button sizes for mobile

### Build Issues

- Clear node_modules and reinstall if build fails
- Check TypeScript errors with `npm run dev:typecheck`
- Verify all imports are correct
- Ensure Tailwind classes are properly configured

## Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [PRD Document](./prd/prd.md) - Project requirements and specifications
