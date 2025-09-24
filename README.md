# Luxe Studio - Premium Luxury Website

A sophisticated, timeless luxury website featuring a minimalist dark theme with elegant typography and smooth animations.

## Design Philosophy

This website embodies sophisticated elegance through:

- **Timeless Aesthetic**: Deep charcoal (#1a1a1a) and soft off-white (#fafafa) color palette
- **Premium Accents**: Champagne gold (#D4AF37) highlights for sophisticated contrast
- **Editorial Typography**: Playfair Display serif headlines paired with Inter sans-serif body text
- **Minimalist Layout**: Generous white space and carefully balanced grid-based sections
- **Sophisticated Interactions**: Smooth animations, micro-interactions, and premium user experience

## Features

### Visual Design
- ✨ **Luxury Color Palette**: Deep charcoal, off-white, and champagne gold
- 📝 **Premium Typography**: Elegant serif headlines with clean sans-serif body text
- 🎨 **Minimalist Layout**: Balanced negative space and editorial-style composition
- 📱 **Mobile-First Design**: Responsive layout optimized for all devices

### User Experience
- 🚀 **Smooth Animations**: Fade-in effects and micro-interactions
- 📍 **Sticky Navigation**: Elegant navigation with smooth scroll behavior
- 🎯 **Intuitive CTAs**: Clear call-to-action buttons with hover effects
- ♿ **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

### Technical Features
- ⚡ **Fast Loading**: Optimized CSS and JavaScript
- 🔍 **SEO Optimized**: Semantic HTML and proper meta tags
- 🎭 **Progressive Enhancement**: Works without JavaScript, enhanced with it
- 🖱️ **Enhanced Interactions**: Magnetic button effects, cursor follower, and card hover animations

## File Structure

```
luxe-studio/
├── index.html          # Main HTML structure
├── styles.css          # Comprehensive CSS with design system
├── script.js           # Interactive JavaScript features
└── README.md           # Documentation
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Keyboard Navigation**: Full keyboard accessibility with visible focus indicators
- **Screen Readers**: ARIA labels and proper markup
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Reduced Motion**: Respects user's motion preferences
- **Skip Links**: Quick navigation for keyboard users

## Performance Optimizations

- **CSS Custom Properties**: Efficient styling with CSS variables
- **Throttled Scroll Events**: Optimized scroll performance
- **Intersection Observer**: Efficient animation triggers
- **Font Loading**: Optimized Google Fonts loading
- **Minification Ready**: Clean, optimized code structure

## Customization

### Colors
The color palette is defined in CSS custom properties in `styles.css`:

```css
:root {
    --color-primary-dark: #1a1a1a;      /* Deep charcoal */
    --color-off-white: #fafafa;          /* Soft off-white */
    --color-accent-gold: #D4AF37;        /* Champagne gold */
}
```

### Typography
Typography scale and fonts are customizable:

```css
:root {
    --font-serif: 'Playfair Display', Georgia, serif;
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Spacing
Consistent spacing scale for layouts:

```css
:root {
    --space-xs: 0.25rem;    /* 4px */
    --space-sm: 0.5rem;     /* 8px */
    --space-md: 1rem;       /* 16px */
    --space-lg: 1.5rem;     /* 24px */
    /* ... more spacing values */
}
```

## Setup Instructions

1. **Download Files**: Ensure all files are in the same directory
2. **Open Browser**: Open `index.html` in a modern web browser
3. **Local Server** (optional): For best experience, serve files through a local server

### Using a Local Server

```bash
# Python 3
python -m http.server 8000

# Node.js (if you have it)
npx serve .

# PHP (if you have it)
php -S localhost:8000
```

## Customization Guide

### Adding New Sections
1. Add semantic HTML structure
2. Use existing CSS classes and design tokens
3. Add fade-in animations with `.fade-in` class
4. Follow accessibility best practices

### Styling Guidelines
- Use CSS custom properties for consistent theming
- Follow the established typography scale
- Maintain proper contrast ratios
- Use the spacing scale for consistent layouts

## License

This is a custom luxury website template. All rights reserved.

---

**Luxe Studio** - Where timeless design meets modern sophistication.
