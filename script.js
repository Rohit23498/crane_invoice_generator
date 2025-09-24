/**
 * Luxe Studio - Premium Website JavaScript
 * Sophisticated interactions and animations for a luxury experience
 */

'use strict';

class LuxeStudio {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initMobileNavigation();
        this.initScrollAnimations();
        this.initSmoothScrolling();
        this.initFormHandling();
        this.initParallaxEffects();
        this.initAccessibilityFeatures();
    }

    setupEventListeners() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
        } else {
            this.onDOMReady();
        }

        // Handle window events
        window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16));
        window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
    }

    onDOMReady() {
        // Initialize fade-in animations
        this.observeElements();
        
        // Add loading class to body for smooth initial animations
        document.body.classList.add('loaded');
        
        // Initialize enhanced interactions
        this.enhanceInteractions();
    }

    /**
     * Mobile Navigation
     */
    initMobileNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        if (!navToggle || !navMenu) return;

        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when mobile menu is open
            document.body.style.overflow = !isExpanded ? 'hidden' : '';
        });

        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    /**
     * Scroll Animations with Intersection Observer
     */
    initScrollAnimations() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    this.observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);
    }

    observeElements() {
        const animatedElements = document.querySelectorAll('.fade-in, .fade-in-delay');
        
        animatedElements.forEach(element => {
            element.style.animationPlayState = 'paused';
            this.observer.observe(element);
        });
    }

    /**
     * Smooth Scrolling for Anchor Links
     */
    initSmoothScrolling() {
        const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
        
        smoothScrollLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Enhanced Form Handling
     */
    initFormHandling() {
        const contactForm = document.querySelector('.contact-form');
        
        if (!contactForm) return;

        // Add floating label effect
        const formInputs = contactForm.querySelectorAll('.form-input, .form-textarea');
        formInputs.forEach(input => {
            this.addFloatingLabelEffect(input);
        });

        // Handle form submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(contactForm);
        });

        // Real-time validation
        formInputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    addFloatingLabelEffect(input) {
        const wrapper = input.parentElement;
        
        const updateLabel = () => {
            if (input.value.trim() !== '' || input === document.activeElement) {
                wrapper.classList.add('focused');
            } else {
                wrapper.classList.remove('focused');
            }
        };

        input.addEventListener('focus', updateLabel);
        input.addEventListener('blur', updateLabel);
        input.addEventListener('input', updateLabel);
        
        // Initialize state
        updateLabel();
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldType = field.type;
        let isValid = true;
        let errorMessage = '';

        // Remove existing error state
        field.classList.remove('error');
        this.removeErrorMessage(field);

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required.';
        }

        // Email validation
        if (fieldType === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address.';
            }
        }

        // Display error if invalid
        if (!isValid) {
            field.classList.add('error');
            this.showErrorMessage(field, errorMessage);
        }

        return isValid;
    }

    clearFieldError(field) {
        field.classList.remove('error');
        this.removeErrorMessage(field);
    }

    showErrorMessage(field, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.setAttribute('aria-live', 'polite');
        
        field.parentElement.appendChild(errorElement);
    }

    removeErrorMessage(field) {
        const existingError = field.parentElement.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }

    async handleFormSubmission(form) {
        const formData = new FormData(form);
        const submitButton = form.querySelector('.form-submit');
        
        // Validate all fields
        const inputs = form.querySelectorAll('.form-input, .form-textarea');
        let isFormValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            this.showNotification('Please correct the errors above.', 'error');
            return;
        }

        // Show loading state
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            // Simulate form submission (replace with actual endpoint)
            await this.delay(2000);
            
            // Show success message
            this.showNotification('Thank you! Your message has been sent successfully.', 'success');
            form.reset();
            
            // Clear floating label states
            inputs.forEach(input => {
                input.parentElement.classList.remove('focused');
            });

        } catch (error) {
            this.showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'assertive');

        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            color: '#fafafa',
            backgroundColor: type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            zIndex: '10000',
            transform: 'translateX(400px)',
            transition: 'transform 0.3s ease-out',
            maxWidth: '300px',
            fontSize: '0.875rem',
            fontWeight: '500'
        });

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    /**
     * Parallax Effects
     */
    initParallaxEffects() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        // Create subtle parallax effect for hero background
        window.addEventListener('scroll', this.throttle(() => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < window.innerHeight) {
                heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        }, 16));
    }

    /**
     * Enhanced Interactions
     */
    enhanceInteractions() {
        // Add magnetic effect to buttons
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button');
        buttons.forEach(button => {
            this.addMagneticEffect(button);
        });

        // Add hover effects to service cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            this.addCardHoverEffect(card);
        });

        // Add cursor follower effect for premium feel
        this.initCursorFollower();
    }

    addMagneticEffect(element) {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = x * 0.1;
            const moveY = y * 0.1;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        });
    }

    addCardHoverEffect(card) {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    }

    initCursorFollower() {
        // Only add on desktop
        if (window.innerWidth < 768) return;

        const cursor = document.createElement('div');
        cursor.className = 'cursor-follower';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid #D4AF37;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease-out;
            opacity: 0;
        `;
        
        document.body.appendChild(cursor);

        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const updateCursor = () => {
            cursor.style.left = `${mouseX - 10}px`;
            cursor.style.top = `${mouseY - 10}px`;
            cursor.style.opacity = '1';
        };

        document.addEventListener('mousemove', this.throttle(updateCursor, 16));

        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });

        // Enhance cursor for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .service-card');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
            });

            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.backgroundColor = 'transparent';
            });
        });
    }

    /**
     * Accessibility Features
     */
    initAccessibilityFeatures() {
        // Add skip link
        this.addSkipLink();
        
        // Enhance keyboard navigation
        this.enhanceKeyboardNavigation();
        
        // Add focus indicators
        this.addFocusIndicators();
        
        // Handle reduced motion preferences
        this.handleReducedMotion();
    }

    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #D4AF37;
            color: #1a1a1a;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
            font-weight: 600;
            transition: top 0.3s ease;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add main content id to hero section
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.id = 'main-content';
        }
    }

    enhanceKeyboardNavigation() {
        // Trap focus in mobile menu when open
        const navMenu = document.querySelector('.nav-menu');
        const focusableElements = navMenu?.querySelectorAll('a, button') || [];
        
        if (focusableElements.length === 0) return;
        
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        document.addEventListener('keydown', (e) => {
            if (!navMenu.classList.contains('active')) return;
            
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                } else if (!e.shiftKey && document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
            
            if (e.key === 'Escape') {
                const navToggle = document.querySelector('.nav-toggle');
                navToggle.click();
                navToggle.focus();
            }
        });
    }

    addFocusIndicators() {
        // Add visible focus indicators for keyboard users
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    handleReducedMotion() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            // Disable animations for users who prefer reduced motion
            document.body.classList.add('reduced-motion');
        }
    }

    /**
     * Scroll Effects
     */
    handleScroll() {
        this.updateScrollProgress();
        this.updateNavbarAppearance();
    }

    updateScrollProgress() {
        const scrollProgress = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
        document.documentElement.style.setProperty('--scroll-progress', `${scrollProgress}%`);
    }

    updateNavbarAppearance() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    handleResize() {
        // Update cursor follower on resize
        if (window.innerWidth < 768) {
            const cursor = document.querySelector('.cursor-follower');
            if (cursor) cursor.style.display = 'none';
        } else {
            const cursor = document.querySelector('.cursor-follower');
            if (cursor) cursor.style.display = 'block';
        }
    }

    /**
     * Utility Functions
     */
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    debounce(func, delay) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize the application
const luxeStudio = new LuxeStudio();
