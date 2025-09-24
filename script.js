/**
 * Luxury Website Overlay - Sophisticated Interactions for Crane Application
 * Transforms the existing functionality with premium UX enhancements
 */

'use strict';

class LuxuryEnhancement {
    constructor() {
        this.isInitialized = false;
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
        } else {
            this.onDOMReady();
        }
    }

    onDOMReady() {
        if (this.isInitialized) return;
        this.isInitialized = true;

        this.createLuxuryNavigation();
        this.enhanceInteractions();
        this.initScrollAnimations();
        this.addAccessibilityFeatures();
        this.initLuxuryCursor();
        this.enhanceFormExperience();
        this.addLoadingStates();
        this.initSmoothScrolling();
        
        // Add body class to indicate luxury mode is active
        document.body.classList.add('luxury-enhanced');
        
        console.log('🌟 Luxury Enhancement Initialized');
    }

    /**
     * Create sophisticated navigation bar
     */
    createLuxuryNavigation() {
        const nav = document.createElement('nav');
        nav.className = 'luxury-nav';
        nav.innerHTML = `
            <div class="luxury-nav-content">
                <a href="#" class="luxury-logo">EKTA CRANE</a>
                <ul class="luxury-nav-links">
                    <li><a href="#quotation" class="luxury-nav-link">Quotation</a></li>
                    <li><a href="#client-info" class="luxury-nav-link">Client Details</a></li>
                    <li><a href="#crane-selection" class="luxury-nav-link">Selection</a></li>
                    <li><a href="#pdf-preview" class="luxury-nav-link">Preview</a></li>
                </ul>
            </div>
        `;
        
        document.body.prepend(nav);
        
        // Add scroll effect to navigation
        this.handleNavScroll();
        
        // Add smooth scroll to nav links
        nav.querySelectorAll('.luxury-nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                this.smoothScrollTo(targetId);
            });
        });
    }

    /**
     * Handle navigation scroll effects
     */
    handleNavScroll() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const nav = document.querySelector('.luxury-nav');
                    if (window.scrollY > 50) {
                        nav.style.background = 'rgba(26, 26, 26, 0.98)';
                        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
                    } else {
                        nav.style.background = 'rgba(26, 26, 26, 0.95)';
                        nav.style.boxShadow = 'none';
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    /**
     * Smooth scroll to element
     */
    smoothScrollTo(targetId) {
        const element = document.querySelector(targetId);
        if (element) {
            const offsetTop = element.offsetTop - 120; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    /**
     * Add IDs to sections for navigation
     */
    addSectionIds() {
        const sections = document.querySelectorAll('.section');
        const ids = ['quotation', 'client-info', 'crane-selection'];
        
        sections.forEach((section, index) => {
            if (ids[index]) {
                section.id = ids[index];
            }
        });
    }

    /**
     * Enhance interactions with luxury micro-animations
     */
    enhanceInteractions() {
        this.addSectionIds();
        this.enhanceButtons();
        this.enhanceCards();
        this.enhanceInputs();
        this.addHoverEffects();
        this.enhancePDFPreview();
    }

    /**
     * Enhance button interactions
     */
    enhanceButtons() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            // Add magnetic effect
            button.addEventListener('mousemove', (e) => {
                if (window.innerWidth > 768) {
                    const rect = button.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    const moveX = x * 0.1;
                    const moveY = y * 0.1;
                    
                    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
                }
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = '';
            });

            // Add click ripple effect
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.2);
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                // Add ripple animation
                if (!document.querySelector('#ripple-styles')) {
                    const style = document.createElement('style');
                    style.id = 'ripple-styles';
                    style.textContent = `
                        @keyframes ripple {
                            to {
                                transform: scale(2);
                                opacity: 0;
                            }
                        }
                    `;
                    document.head.appendChild(style);
                }
                
                button.style.position = 'relative';
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    /**
     * Enhance card (section) interactions
     */
    enhanceCards() {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            section.addEventListener('mousemove', (e) => {
                if (window.innerWidth > 768) {
                    const rect = section.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (centerX - x) / 20;
                    
                    section.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }
            });

            section.addEventListener('mouseleave', () => {
                section.style.transform = '';
            });
        });
    }

    /**
     * Enhance input interactions
     */
    enhanceInputs() {
        const inputs = document.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            // Add focus animation
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', () => {
                if (!input.value.trim()) {
                    input.parentElement.classList.remove('focused');
                }
            });

            // Add floating label effect
            this.addFloatingLabel(input);
        });
    }

    /**
     * Add floating label effect
     */
    addFloatingLabel(input) {
        const label = input.parentElement.querySelector('label');
        if (!label) return;

        const updateLabel = () => {
            if (input.value.trim() || input === document.activeElement) {
                label.style.transform = 'translateY(-12px) scale(0.8)';
                label.style.color = 'var(--color-accent-gold)';
            } else {
                label.style.transform = '';
                label.style.color = '';
            }
        };

        input.addEventListener('focus', updateLabel);
        input.addEventListener('blur', updateLabel);
        input.addEventListener('input', updateLabel);
        
        // Initialize
        updateLabel();
    }

    /**
     * Add hover effects to elements
     */
    addHoverEffects() {
        // Dynamic row hover effects
        const dynamicRows = document.querySelectorAll('.dynamic-row');
        dynamicRows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                row.style.background = 'rgba(212, 175, 55, 0.1)';
            });

            row.addEventListener('mouseleave', () => {
                row.style.background = '';
            });
        });
    }

    /**
     * Enhance PDF preview
     */
    enhancePDFPreview() {
        const pdfPreview = document.querySelector('#pdf-preview');
        if (pdfPreview) {
            // Add intersection observer for reveal animation
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationDelay = '0.3s';
                        entry.target.classList.add('animate-in');
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(pdfPreview);
        }
    }

    /**
     * Initialize scroll animations
     */
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    entry.target.classList.add('animate-in');
                    
                    // Stagger animation for child elements
                    const children = entry.target.querySelectorAll('.form-group, .dynamic-row');
                    children.forEach((child, index) => {
                        child.style.animationDelay = `${index * 0.1}s`;
                        child.classList.add('fade-in-up');
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe sections
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        // Add CSS for animations
        if (!document.querySelector('#scroll-animations')) {
            const style = document.createElement('style');
            style.id = 'scroll-animations';
            style.textContent = `
                .fade-in-up {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
                    transform: translateY(20px);
                }
                
                .animate-in {
                    animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    /**
     * Add accessibility features
     */
    addAccessibilityFeatures() {
        // Add skip link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 16px;
            background: var(--color-accent-gold);
            color: var(--color-primary-dark);
            padding: 8px 16px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
            font-weight: 600;
            transition: top 0.3s ease;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '16px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add main content id
        const container = document.querySelector('.container');
        if (container) {
            container.id = 'main-content';
        }

        // Keyboard navigation enhancement
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    /**
     * Initialize luxury cursor
     */
    initLuxuryCursor() {
        if (window.innerWidth < 768) return; // Skip on mobile

        const cursor = document.createElement('div');
        cursor.className = 'luxury-cursor';
        document.body.appendChild(cursor);

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        // Smooth cursor movement
        const updateCursor = () => {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            
            cursorX += dx * 0.1;
            cursorY += dy * 0.1;
            
            cursor.style.left = `${cursorX - 10}px`;
            cursor.style.top = `${cursorY - 10}px`;
            
            requestAnimationFrame(updateCursor);
        };

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.classList.add('active');
        });

        document.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });

        // Enhance cursor for interactive elements
        const interactiveElements = document.querySelectorAll('button, .btn, input, select, textarea, a');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });

            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });

        updateCursor();
    }

    /**
     * Enhance form experience
     */
    enhanceFormExperience() {
        // Add form validation feedback
        const inputs = document.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateInput(input);
            });

            input.addEventListener('input', () => {
                this.clearValidationError(input);
            });
        });

        // Enhance the existing form functions
        this.enhanceExistingFunctions();
    }

    /**
     * Validate input
     */
    validateInput(input) {
        const value = input.value.trim();
        let isValid = true;
        let message = '';

        if (input.hasAttribute('required') && !value) {
            isValid = false;
            message = 'This field is required';
        } else if (input.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                message = 'Please enter a valid email address';
            }
        }

        if (!isValid) {
            this.showValidationError(input, message);
        } else {
            this.clearValidationError(input);
        }

        return isValid;
    }

    /**
     * Show validation error
     */
    showValidationError(input, message) {
        input.style.borderColor = '#dc3545';
        
        let errorElement = input.parentElement.querySelector('.validation-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'validation-error';
            errorElement.style.cssText = `
                color: #dc3545;
                font-size: 0.875rem;
                margin-top: 4px;
                font-weight: 500;
            `;
            input.parentElement.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
    }

    /**
     * Clear validation error
     */
    clearValidationError(input) {
        input.style.borderColor = '';
        const errorElement = input.parentElement.querySelector('.validation-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    /**
     * Add loading states
     */
    addLoadingStates() {
        // Enhance the PDF generation with loading state
        const generateButton = document.querySelector('button[onclick="generatePDF()"]');
        if (generateButton) {
            generateButton.addEventListener('click', () => {
                this.showLoadingState(generateButton);
                
                // Hide loading state after PDF generation
                setTimeout(() => {
                    this.hideLoadingState(generateButton);
                }, 3000);
            });
        }
    }

    /**
     * Show loading state
     */
    showLoadingState(element) {
        element.classList.add('loading');
        element.disabled = true;
        const originalText = element.textContent;
        element.dataset.originalText = originalText;
        element.textContent = 'Generating...';
    }

    /**
     * Hide loading state
     */
    hideLoadingState(element) {
        element.classList.remove('loading');
        element.disabled = false;
        element.textContent = element.dataset.originalText || element.textContent;
    }

    /**
     * Enhance existing functions
     */
    enhanceExistingFunctions() {
        // Store original generatePDF function
        if (typeof window.generatePDF === 'function') {
            const originalGeneratePDF = window.generatePDF;
            
            window.generatePDF = () => {
                // Add premium loading experience
                this.showPremiumLoader();
                
                // Call original function
                originalGeneratePDF();
            };
        }

        // Store original addRow function
        if (typeof window.addRow === 'function') {
            const originalAddRow = window.addRow;
            
            window.addRow = (...args) => {
                const result = originalAddRow.apply(this, args);
                
                // Enhance newly added row
                setTimeout(() => {
                    const rows = document.querySelectorAll('.dynamic-row');
                    const newRow = rows[rows.length - 1];
                    if (newRow) {
                        newRow.style.opacity = '0';
                        newRow.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            newRow.style.transition = 'all 0.5s ease';
                            newRow.style.opacity = '1';
                            newRow.style.transform = 'translateY(0)';
                        }, 10);
                        
                        // Enhance inputs in new row
                        const inputs = newRow.querySelectorAll('input, select');
                        inputs.forEach(input => {
                            this.addFloatingLabel(input);
                        });
                    }
                }, 10);
                
                return result;
            };
        }
    }

    /**
     * Show premium loader
     */
    showPremiumLoader() {
        const loader = document.createElement('div');
        loader.id = 'premium-loader';
        loader.innerHTML = `
            <div class="loader-backdrop">
                <div class="loader-content">
                    <div class="loader-spinner"></div>
                    <h3>Generating Premium Quotation</h3>
                    <p>Crafting your professional document...</p>
                </div>
            </div>
        `;
        
        // Add loader styles
        if (!document.querySelector('#premium-loader-styles')) {
            const style = document.createElement('style');
            style.id = 'premium-loader-styles';
            style.textContent = `
                #premium-loader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: fadeIn 0.3s ease;
                }
                
                .loader-backdrop {
                    background: rgba(26, 26, 26, 0.95);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .loader-content {
                    text-align: center;
                    color: var(--color-text-primary);
                    padding: 3rem;
                    background: rgba(42, 42, 42, 0.8);
                    border-radius: 20px;
                    border: 1px solid var(--color-border);
                    box-shadow: var(--shadow-luxury);
                }
                
                .loader-spinner {
                    width: 60px;
                    height: 60px;
                    border: 3px solid var(--color-border);
                    border-top: 3px solid var(--color-accent-gold);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 2rem auto;
                }
                
                .loader-content h3 {
                    font-family: var(--font-serif);
                    color: var(--color-accent-gold);
                    margin-bottom: 1rem;
                    font-size: 1.5rem;
                }
                
                .loader-content p {
                    color: var(--color-text-secondary);
                    margin: 0;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(loader);
        
        // Auto remove after delay
        setTimeout(() => {
            if (loader.parentNode) {
                loader.style.animation = 'fadeOut 0.3s ease forwards';
                setTimeout(() => {
                    loader.remove();
                }, 300);
            }
        }, 4000);
    }

    /**
     * Initialize smooth scrolling
     */
    initSmoothScrolling() {
        // Add smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Add scroll progress indicator
        this.addScrollProgress();
    }

    /**
     * Add scroll progress indicator
     */
    addScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, var(--color-accent-gold), #c5a028);
            z-index: 10001;
            transition: width 0.1s ease;
            box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
        `;
        
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = `${Math.min(scrolled, 100)}%`;
        });
    }
}

// Initialize luxury enhancement when DOM is ready
const luxuryEnhancement = new LuxuryEnhancement();

// Add fadeOut animation to styles
if (!document.querySelector('#fadeout-animation')) {
    const style = document.createElement('style');
    style.id = 'fadeout-animation';
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LuxuryEnhancement;
}
