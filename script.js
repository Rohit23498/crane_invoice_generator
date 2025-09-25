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
        this.initDigitalSignature();
        
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
        // Add form validation feedback and input formatting
        this.setupFormValidation();
        this.addInputFormatting();
        this.enhanceExistingFunctions();
    }

    /**
     * Setup form validation
     */
    setupFormValidation() {
        // Target client information inputs specifically
        const clientInputs = [
            'clientCompany',
            'clientGST', 
            'clientAddress',
            'clientContact',
            'clientEmail',
            'clientAttention',
            'signatory-name',
            'signatory-designation'
        ];
        
        clientInputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            if (input) {
                // Add validation on blur (when user leaves the field)
                input.addEventListener('blur', () => {
                    this.validateInput(input);
                });

                // Clear validation error and add success styling on input
                input.addEventListener('input', () => {
                    this.clearValidationError(input);
                    
                    // Add real-time formatting for specific fields
                    if (inputId === 'clientGST') {
                        this.formatGSTInput(input);
                    } else if (inputId === 'clientContact') {
                        this.formatContactInput(input);
                    }
                });

                // Add focus styling
                input.addEventListener('focus', () => {
                    this.addFocusStyles(input);
                });
            }
        });
    }

    /**
     * Add input formatting and placeholder guidance
     */
    addInputFormatting() {
        // Enhance GST input
        const gstInput = document.getElementById('clientGST');
        if (gstInput) {
            gstInput.placeholder = 'e.g., 27AAICE7407Q1Z0 (15 characters)';
            gstInput.maxLength = 15;
            gstInput.style.textTransform = 'uppercase';
            gstInput.setAttribute('title', 'GST format: 2-digit state code + 10-char PAN + 1 entity code + Z + 1 check digit');
        }

        // Enhance Email input
        const emailInput = document.getElementById('clientEmail');
        if (emailInput) {
            emailInput.placeholder = 'e.g., company@example.com';
            emailInput.setAttribute('title', 'Enter a valid email address');
        }

        // Enhance Contact input
        const contactInput = document.getElementById('clientContact');
        if (contactInput) {
            contactInput.placeholder = 'e.g., 9876543210 or 022-12345678';
            contactInput.setAttribute('title', 'Enter 10-digit mobile number or landline with STD code');
        }
    }

    /**
     * Format GST input in real-time
     */
    formatGSTInput(input) {
        let value = input.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        
        // Limit to 15 characters
        if (value.length > 15) {
            value = value.substring(0, 15);
        }
        
        input.value = value;
        
        // Show format hint
        this.showFormatHint(input, value.length === 15 ? 'GST format complete' : `${15 - value.length} characters remaining`);
    }

    /**
     * Format contact input in real-time
     */
    formatContactInput(input) {
        let value = input.value.replace(/[^0-9]/g, '');
        
        // Limit mobile numbers to 10 digits, landlines can be longer
        if (value.length <= 10) {
            input.value = value;
        } else if (value.length <= 12) {
            // Allow for STD codes
            input.value = value;
        } else {
            // Trim to reasonable length
            input.value = value.substring(0, 12);
        }
        
        // Show format hint
        const length = input.value.length;
        if (length === 10) {
            this.showFormatHint(input, 'Mobile number format complete');
        } else if (length > 10) {
            this.showFormatHint(input, 'Landline with STD code');
        } else {
            this.showFormatHint(input, `${10 - length} digits remaining for mobile`);
        }
    }

    /**
     * Show format hint
     */
    showFormatHint(input, message) {
        let hint = input.parentElement.querySelector('.format-hint');
        if (!hint) {
            hint = document.createElement('div');
            hint.className = 'format-hint';
            hint.style.cssText = `
                font-size: 0.75rem;
                color: var(--color-accent-gold);
                margin-top: 4px;
                opacity: 0.8;
                font-weight: 500;
            `;
            input.parentElement.appendChild(hint);
        }
        
        hint.textContent = message;
        
        // Auto-hide hint after 3 seconds
        clearTimeout(hint.hideTimeout);
        hint.hideTimeout = setTimeout(() => {
            hint.style.opacity = '0';
            setTimeout(() => {
                if (hint.parentNode) {
                    hint.remove();
                }
            }, 300);
        }, 3000);
    }

    /**
     * Validate input with enhanced feedback
     */
    validateInput(input) {
        const value = input.value.trim();
        let isValid = true;
        let message = '';

        // Define required fields
        const requiredFields = ['clientCompany', 'clientAddress'];

        // Check if field is required and empty
        if (requiredFields.includes(input.id) && !value) {
            isValid = false;
            message = 'This field is required';
        } else if (value) {
            // Validate based on input type and ID
            switch (input.id) {
                case 'clientCompany':
                    if (value.length < 2) {
                        isValid = false;
                        message = 'Company name must be at least 2 characters';
                    }
                    break;
                    
                case 'clientEmail':
                    if (!this.validateEmail(value)) {
                        isValid = false;
                        message = 'Please enter a valid email address (e.g., example@company.com)';
                    }
                    break;
                    
                case 'clientGST':
                    if (!this.validateGSTNumber(value)) {
                        isValid = false;
                        message = 'Please enter a valid 15-digit GST number (e.g., 27AAICE7407Q1Z0)';
                    }
                    break;
                    
                case 'clientContact':
                    if (!this.validateContactNumber(value)) {
                        isValid = false;
                        message = 'Please enter a valid 10-digit mobile number (e.g., 9876543210)';
                    }
                    break;
                    
                case 'clientAddress':
                    if (value.length < 10) {
                        isValid = false;
                        message = 'Please enter a complete address (minimum 10 characters)';
                    }
                    break;
                    
                case 'clientAttention':
                    if (value && value.length < 2) {
                        isValid = false;
                        message = 'Contact person name must be at least 2 characters';
                    }
                    break;
                    
                case 'signatory-name':
                    if (value && value.length < 2) {
                        isValid = false;
                        message = 'Signatory name must be at least 2 characters';
                    }
                    break;
                    
                case 'signatory-designation':
                    if (value && value.length < 2) {
                        isValid = false;
                        message = 'Designation must be at least 2 characters';
                    }
                    break;
            }
        }

        // Clear any existing success messages
        const successElement = input.parentElement.querySelector('.validation-success');
        if (successElement) {
            successElement.remove();
        }

        if (isValid && value) {
            this.clearValidationError(input);
            // Show success for validated fields (not just cleared fields)
            if (['clientEmail', 'clientGST', 'clientContact'].includes(input.id)) {
                this.showValidationSuccess(input);
            }
        } else if (!isValid) {
            this.showValidationError(input, message);
        } else {
            // Field is empty but not required
            this.clearValidationError(input);
        }

        return isValid;
    }

    /**
     * Validate email address
     */
    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    /**
     * Validate GST number (Indian format)
     */
    validateGSTNumber(gst) {
        // Indian GST format: 2 digits (state code) + 10 characters (PAN) + 1 digit (entity code) + 1 character (Z) + 1 digit (check digit)
        // Example: 27AAICE7407Q1Z0
        const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
        return gstRegex.test(gst.toUpperCase());
    }

    /**
     * Validate Indian contact number
     */
    validateContactNumber(contact) {
        // Remove any spaces, dashes, or brackets
        const cleanedContact = contact.replace(/[\s\-\(\)\+]/g, '');
        
        // Indian mobile number: 10 digits starting with 6-9
        // Also accept landline with STD codes
        const mobileRegex = /^[6-9]\d{9}$/;
        const landlineRegex = /^[0-9]{2,4}[0-9]{6,8}$/;
        const internationalRegex = /^91[6-9]\d{9}$/;
        
        return mobileRegex.test(cleanedContact) || 
               landlineRegex.test(cleanedContact) || 
               internationalRegex.test(cleanedContact);
    }

    /**
     * Validate all fields before PDF generation
     */
    validateAllFields() {
        const requiredFields = [
            { id: 'clientCompany', name: 'Company Name', required: true },
            { id: 'clientGST', name: 'GST Number', required: false },
            { id: 'clientContact', name: 'Contact Number', required: true },
            { id: 'clientEmail', name: 'Email Address', required: false },
            { id: 'clientAttention', name: 'Contact Person', required: false },
            { id: 'clientAddress', name: 'Address', required: true }
        ];

        let validationErrors = [];
        let hasErrors = false;

        // Validate each field
        requiredFields.forEach(field => {
            const input = document.getElementById(field.id);
            if (input) {
                const value = input.value.trim();
                
                // Check required fields
                if (field.required && !value) {
                    validationErrors.push(`${field.name} is required`);
                    hasErrors = true;
                    this.showValidationError(input, `${field.name} is required`);
                } else if (value) {
                    // Validate format if value is provided
                    if (!this.validateInput(input)) {
                        hasErrors = true;
                        // Error message already shown by validateInput
                    }
                }
            }
        });

        // Check if at least one crane is selected
        const craneRows = document.querySelectorAll('#tableRows .dynamic-row');
        if (craneRows.length === 0) {
            validationErrors.push('At least one crane must be selected');
            hasErrors = true;
        }

        // Show validation summary if there are errors
        if (hasErrors) {
            this.showValidationSummary(validationErrors);
            return false;
        }

        return true;
    }

    /**
     * Show validation summary
     */
    showValidationSummary(errors) {
        this.showNotification(
            `Please fix the following errors:\n${errors.map(error => `• ${error}`).join('\n')}`, 
            'error', 
            8000
        );

        // Scroll to first error
        const firstErrorField = document.querySelector('.validation-error');
        if (firstErrorField) {
            firstErrorField.closest('.form-group, .section').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }

    /**
     * Show notification with enhanced styling
     */
    showNotification(message, type = 'info', duration = 5000) {
        // Remove existing notification
        const existingNotification = document.querySelector('.luxury-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `luxury-notification notification-${type}`;
        
        // Style based on type
        const colors = {
            success: { bg: '#4CAF50', icon: '✅' },
            error: { bg: '#f44336', icon: '⚠️' },
            warning: { bg: '#ff9800', icon: '⚠️' },
            info: { bg: '#2196F3', icon: 'ℹ️' }
        };
        
        const config = colors[type] || colors.info;
        
        notification.innerHTML = `
            <div class="notification-content">
                <div class="notification-icon">${config.icon}</div>
                <div class="notification-message">${message}</div>
                <button class="notification-close" aria-label="Close notification">×</button>
            </div>
        `;

        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            max-width: 400px;
            background: ${config.bg};
            color: white;
            border-radius: 12px;
            box-shadow: var(--shadow-luxury);
            z-index: 10001;
            transform: translateX(420px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            font-family: var(--font-sans);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        `;

        // Style notification content
        const content = notification.querySelector('.notification-content');
        content.style.cssText = `
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 16px 20px;
        `;

        // Style icon
        const icon = notification.querySelector('.notification-icon');
        icon.style.cssText = `
            font-size: 20px;
            flex-shrink: 0;
            margin-top: 2px;
        `;

        // Style message
        const messageEl = notification.querySelector('.notification-message');
        messageEl.style.cssText = `
            flex: 1;
            font-size: 14px;
            line-height: 1.5;
            font-weight: 500;
            white-space: pre-line;
        `;

        // Style close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.2s ease;
            flex-shrink: 0;
        `;

        closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.background = 'rgba(255, 255, 255, 0.2)';
        });

        closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.background = 'none';
        });

        document.body.appendChild(notification);

        // Animate in
        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(0)';
        });

        // Close functionality
        const closeNotification = () => {
            notification.style.transform = 'translateX(420px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 400);
        };

        closeBtn.addEventListener('click', closeNotification);

        // Auto close
        setTimeout(closeNotification, duration);

        // Add accessibility
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'assertive');
    }

    /**
     * Show validation error with enhanced red highlighting
     */
    showValidationError(input, message) {
        // Enhanced red styling for invalid inputs
        input.style.cssText = `
            border: 2px solid #dc3545 !important;
            background: #fff5f5 !important;
            box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1) !important;
            animation: shake 0.3s ease-in-out;
        `;
        
        // Add shake animation styles to document if not already present
        if (!document.querySelector('#validation-styles')) {
            const style = document.createElement('style');
            style.id = 'validation-styles';
            style.textContent = `
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeOut {
                    from { opacity: 1; transform: translateY(0); }
                    to { opacity: 0; transform: translateY(-10px); }
                }
                .validation-success {
                    border: 2px solid #28a745 !important;
                    background: #f8fff9 !important;
                    box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1) !important;
                }
            `;
            document.head.appendChild(style);
        }
        
        // Create or update error message
        let errorElement = input.parentElement.querySelector('.validation-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'validation-error';
            errorElement.style.cssText = `
                color: #dc3545;
                font-size: 13px;
                margin-top: 6px;
                font-weight: 600;
                padding: 4px 8px;
                background: #fff5f5;
                border: 1px solid #dc3545;
                border-radius: 4px;
                display: flex;
                align-items: center;
                animation: fadeIn 0.3s ease-in;
            `;
            input.parentElement.appendChild(errorElement);
        }
        
        errorElement.innerHTML = `
            <span style="color: #dc3545; margin-right: 6px;">⚠️</span>
            ${message}
        `;
    }

    /**
     * Clear validation error and restore normal styling
     */
    clearValidationError(input) {
        // Reset to normal styling
        input.style.cssText = `
            border: 1px solid #ccc !important;
            background: white !important;
            box-shadow: none !important;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 14px;
            width: 100%;
            font-weight: 500;
        `;
        
        // Remove error message
        const errorElement = input.parentElement.querySelector('.validation-error');
        if (errorElement) {
            errorElement.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => errorElement.remove(), 300);
        }
    }

    /**
     * Add focus styles to input
     */
    addFocusStyles(input) {
        // Don't override error styles if input is invalid
        const hasError = input.parentElement.querySelector('.validation-error');
        if (!hasError) {
            input.style.cssText = `
                border: 2px solid #D4AF37 !important;
                background: white !important;
                box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1) !important;
                padding: 8px 12px;
                border-radius: 4px;
                font-size: 14px;
                width: 100%;
                font-weight: 500;
            `;
        }
    }

    /**
     * Show success validation styling
     */
    showValidationSuccess(input) {
        input.style.cssText = `
            border: 2px solid #28a745 !important;
            background: #f8fff9 !important;
            box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1) !important;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 14px;
            width: 100%;
            font-weight: 500;
        `;
        
        // Add success checkmark
        let successElement = input.parentElement.querySelector('.validation-success');
        if (!successElement) {
            successElement = document.createElement('div');
            successElement.className = 'validation-success';
            successElement.style.cssText = `
                color: #28a745;
                font-size: 13px;
                margin-top: 6px;
                font-weight: 600;
                padding: 4px 8px;
                background: #f8fff9;
                border: 1px solid #28a745;
                border-radius: 4px;
                display: flex;
                align-items: center;
                animation: fadeIn 0.3s ease-in;
            `;
            input.parentElement.appendChild(successElement);
        }
        
        successElement.innerHTML = `
            <span style="color: #28a745; margin-right: 6px;">✅</span>
            Valid format
        `;
        
        // Remove success message after 2 seconds
        setTimeout(() => {
            if (successElement) {
                successElement.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(() => successElement.remove(), 300);
            }
        }, 2000);
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
                // Validate all required fields before generating PDF
                if (!this.validateAllFields()) {
                    return; // Don't generate PDF if validation fails
                }
                
                // Add premium loading experience
                this.showPremiumLoader();
                
                // Call original function and add success notification
                const result = originalGeneratePDF();
                
                // Show success notification after a delay
                setTimeout(() => {
                    luxuryEnhancement.showNotification(
                        '🎉 PDF Generated Successfully!\nYour professional quotation has been created and downloaded.',
                        'success',
                        4000
                    );
                }, 2000);
            };
        }

        // Override addRow function for simplified crane selection
        if (typeof window.addRow === 'function') {
            window.addRow = (crane = '', capacity = '', qty = 0, rate = 0) => {
                this.createSimplifiedCraneRow(crane, capacity, qty, rate);
            };
        }

        // Override updateCraneImages function
        if (typeof window.updateCraneImages === 'function') {
            window.updateCraneImages = () => {
                this.updateCraneImages();
            };
        }

        // Update column headers for simplified layout
        this.updateColumnHeaders();
        
        // Enhance PDF generation for simplified structure
        this.enhanceGeneratePDF();
        
        // Clear existing rows and add one simplified row
        this.initializeSimplifiedRows();
        
        // Initialize crane images section
        this.updateCraneImages();
    }

    /**
     * Create crane row with 5 columns (Crane Type, Capacity, Qty, Rate)
     */
    createSimplifiedCraneRow(crane = '', capacity = '', qty = 0, rate = 0) {
        const div = document.createElement('div');
        div.classList.add('dynamic-row');

        // Get crane data for dropdowns
        const cranesData = {
            "Single Girder EOT Crane": ["0.5 Tonne", "1 Tonne", "2 Tonne", "5 Tonne", "10 Tonne", "15 Tonne", "20 Tonne", "Others"],
            "Double Girder EOT Crane": ["2 Tonne", "5 Tonne", "10 Tonne", "50 Tonne", "100 Tonne", "150 Tonne", "250 Tonne", "Others"],
            "Underslung EOT Crane": ["0.5 Tonne", "1 Tonne", "2 Tonne", "5 Tonne", "10 Tonne", "Others"],
            "Single Girder Gantry Crane": ["1 Tonne", "2 Tonne", "5 Tonne", "10 Tonne", "15 Tonne", "20 Tonne", "Others"],
            "Double Girder Gantry Crane": ["5 Tonne", "10 Tonne", "50 Tonne", "100 Tonne", "200 Tonne", "500 Tonne", "Others"],
            "Semi Gantry Crane": ["2 Tonne", "5 Tonne", "10 Tonne", "15 Tonne", "20 Tonne", "50 Tonne", "80 Tonne", "Others"],
            "Wall Mounted Jib Crane": ["0.5 Tonne", "1 Tonne", "2 Tonne", "5 Tonne", "10 Tonne", "16 Tonne", "Others"],
            "Pillar Mounted Jib Crane": ["0.5 Tonne", "1 Tonne", "2 Tonne", "5 Tonne", "10 Tonne", "16 Tonne", "Others"],
            "Container Crane": ["20 Tonne", "45 Tonne", "Others"],
            "Small Gantry Crane": ["0.25 Tonne", "0.50 Tonne", "1 Tonne", "2 Tonne", "5 Tonne", "10 Tonne", "Others"],
            "Wire Rope Electric Hoist": ["0.5 Tonne", "1 Tonne", "2 Tonne", "5 Tonne", "10 Tonne", "20 Tonne", "36 Tonne", "Others"],
            "Electric Chain Hoist": ["0.5 Tonne", "1 Tonne", "2 Tonne", "5 Tonne", "10 Tonne", "15 Tonne", "25 Tonne", "35 Tonne", "Others"]
        };

        // 1. Crane Type Dropdown
        const craneSelect = document.createElement('select');
        craneSelect.style.cssText = `
            padding: 12px;
            border: 2px solid var(--color-border);
            border-radius: 8px;
            background: rgba(42, 42, 42, 0.8);
            color: var(--color-text-primary);
            font-family: var(--font-sans);
            transition: all 0.3s ease;
        `;
        
        Object.keys(cranesData).forEach(craneType => {
            const option = document.createElement('option');
            option.value = craneType;
            option.textContent = craneType;
            if (craneType === crane) option.selected = true;
            craneSelect.appendChild(option);
        });

        // 2. Capacity Dropdown
        const capacitySelect = document.createElement('select');
        capacitySelect.style.cssText = craneSelect.style.cssText;
        
        const updateCapacityOptions = (selectedCrane) => {
            capacitySelect.innerHTML = '';
            cranesData[selectedCrane].forEach(cap => {
                const opt = document.createElement('option');
                opt.value = cap;
                opt.textContent = cap;
                if (cap === capacity) opt.selected = true;
                capacitySelect.appendChild(opt);
            });
        };
        updateCapacityOptions(craneSelect.value);

        // 3. Quantity Input
        const qtyInput = document.createElement('input');
        qtyInput.type = 'number';
        qtyInput.value = qty;
        qtyInput.placeholder = 'Qty';
        qtyInput.min = 0;
        qtyInput.style.cssText = `
            padding: 12px;
            border: 2px solid var(--color-border);
            border-radius: 8px;
            background: rgba(42, 42, 42, 0.8);
            color: var(--color-text-primary);
            font-family: var(--font-sans);
            text-align: center;
            transition: all 0.3s ease;
        `;

        // 4. Rate Input
        const rateInput = document.createElement('input');
        rateInput.type = 'number';
        rateInput.value = rate;
        rateInput.placeholder = 'Rate (₹)';
        rateInput.min = 0;
        rateInput.style.cssText = qtyInput.style.cssText;
        rateInput.style.textAlign = 'right';

        // Remove amount display - not needed in 4-column layout

        // Update capacity when crane changes
        craneSelect.addEventListener('change', () => {
            updateCapacityOptions(craneSelect.value);
            setTimeout(() => this.updateCraneImages(), 100);
        });

        capacitySelect.addEventListener('change', () => {
            setTimeout(() => this.updateCraneImages(), 100);
        });

        // Update images when quantity or rate changes
        qtyInput.addEventListener('change', () => {
            setTimeout(() => this.updateCraneImages(), 100);
        });

        rateInput.addEventListener('change', () => {
            setTimeout(() => this.updateCraneImages(), 100);
        });

        // Add luxury styling on focus
        [craneSelect, capacitySelect, qtyInput, rateInput].forEach(element => {
            element.addEventListener('focus', () => {
                element.style.borderColor = 'var(--color-accent-gold)';
                element.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.2)';
                element.style.transform = 'translateY(-2px)';
            });

            element.addEventListener('blur', () => {
                element.style.borderColor = 'var(--color-border)';
                element.style.boxShadow = 'none';
                element.style.transform = 'translateY(0)';
            });
        });

        // Add elements to row (4 columns)
        div.appendChild(craneSelect);
        div.appendChild(capacitySelect);
        div.appendChild(qtyInput);
        div.appendChild(rateInput);

        // Set grid template for 4-column layout
        div.style.gridTemplateColumns = '2.5fr 1.5fr 1fr 1.2fr';

        // Add double-click to remove functionality
        div.addEventListener('dblclick', () => {
            if (confirm('Remove this crane from the selection?')) {
                div.style.transform = 'translateX(-100%)';
                div.style.opacity = '0';
                setTimeout(() => {
                    div.remove();
                    this.updateCraneImages();
                }, 300);
            }
        });

        // Add visual indicator for remove functionality
        div.setAttribute('title', 'Double-click to remove this crane');
        div.style.position = 'relative';
        
        // Add a subtle remove indicator
        const removeIndicator = document.createElement('div');
        removeIndicator.innerHTML = '×';
        removeIndicator.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            width: 20px;
            height: 20px;
            background: #f44336;
            color: white;
            border-radius: 50%;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        
        removeIndicator.addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm('Remove this crane from the selection?')) {
                div.style.transform = 'translateX(-100%)';
                div.style.opacity = '0';
                setTimeout(() => {
                    div.remove();
                    this.updateCraneImages();
                }, 300);
            }
        });

        // Add double-click remove functionality
        div.addEventListener('dblclick', () => {
            if (confirm('Remove this crane from the selection?')) {
                div.style.transform = 'translateX(-100%)';
                div.style.opacity = '0';
                setTimeout(() => {
                    div.remove();
                    this.updateCraneImages();
                }, 300);
            }
        });

        div.addEventListener('mouseenter', () => {
            removeIndicator.style.display = 'flex';
        });

        div.addEventListener('mouseleave', () => {
            removeIndicator.style.display = 'none';
        });

        div.appendChild(removeIndicator);

        // Add to DOM with animation
        const container = document.getElementById('tableRows');
        container.appendChild(div);

        // Animate in
        div.style.opacity = '0';
        div.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            div.style.transition = 'all 0.5s ease';
            div.style.opacity = '1';
            div.style.transform = 'translateY(0)';
        }, 10);

        // Update crane images after animation
        setTimeout(() => {
            this.updateCraneImages();
        }, 600);
    }

    /**
     * Update crane images (simplified version)
     */
    updateCraneImages() {
        const container = document.getElementById('crane-images-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        // Get unique crane selections
        const selectedCranes = new Set();
        document.querySelectorAll('#tableRows .dynamic-row').forEach(row => {
            // Skip header rows
            if (row.style.background && (row.style.background.includes('accent-gold') || row.style.background.includes('#D4AF37'))) {
                return;
            }
            
            if (row.children.length >= 2) {
                const crane = row.children[0].value;
                const capacity = row.children[1].value;
                if (crane && capacity) {
                    selectedCranes.add(JSON.stringify({crane, capacity}));
                }
            }
        });

        // Show message if no cranes selected
        if (selectedCranes.size === 0) {
            container.innerHTML = `
                <div class="crane-images-empty">
                    <p>🏗️ No cranes selected yet</p>
                    <p style="font-size: 14px; margin-top: 8px;">Add crane selections above to see images here</p>
                </div>
            `;
            return;
        }

        // Crane images mapping (simplified)
        const craneImages = {
            "Single Girder EOT Crane": {
                "0.5 Tonne": "https://via.placeholder.com/200x150/4CAF50/white?text=Single+Girder+EOT+0.5T",
                "1 Tonne": "https://via.placeholder.com/200x150/4CAF50/white?text=Single+Girder+EOT+1T",
                "2 Tonne": "https://via.placeholder.com/200x150/4CAF50/white?text=Single+Girder+EOT+2T",
                "Others": "https://via.placeholder.com/200x150/4CAF50/white?text=Single+Girder+EOT+Custom"
            },
            "Double Girder EOT Crane": {
                "2 Tonne": "https://via.placeholder.com/200x150/2196F3/white?text=Double+Girder+EOT+2T",
                "5 Tonne": "https://via.placeholder.com/200x150/2196F3/white?text=Double+Girder+EOT+5T",
                "Others": "https://via.placeholder.com/200x150/2196F3/white?text=Double+Girder+EOT+Custom"
            }
            // Add more as needed
        };

        selectedCranes.forEach(craneData => {
            const {crane, capacity} = JSON.parse(craneData);
            const imageUrl = craneImages[crane] && craneImages[crane][capacity] 
                ? craneImages[crane][capacity] 
                : 'https://via.placeholder.com/200x150/CCCCCC/white?text=Crane+Image';
            
            const imageDiv = document.createElement('div');
            imageDiv.className = 'crane-image-item';
            
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = `${crane} - ${capacity}`;
            
            const label = document.createElement('div');
            label.className = 'label';
            label.textContent = `${crane} - ${capacity}`;
            
            imageDiv.appendChild(img);
            imageDiv.appendChild(label);
            container.appendChild(imageDiv);
        });
    }

    /**
     * Update column headers for simplified layout
     */
    updateColumnHeaders() {
        // Find the column header row and update it
        const headerRow = document.querySelector('.dynamic-row[style*="background: #e2e8f0"]');
        if (headerRow) {
            headerRow.innerHTML = `
                <div style="display: flex; align-items: center; font-weight: 600; color: #4a5568;">Crane Type</div>
                <div style="display: flex; align-items: center; font-weight: 600; color: #4a5568;">Capacity (Tonnes)</div>
                <div style="display: flex; align-items: center; font-weight: 600; color: #4a5568;">Qty</div>
                <div style="display: flex; align-items: center; font-weight: 600; color: #4a5568;">Rate (Rs.)</div>
            `;
            
            // Update the grid layout for 4 columns
            headerRow.style.gridTemplateColumns = '2.5fr 1.5fr 1fr 1.2fr';
            headerRow.style.background = 'linear-gradient(135deg, var(--color-accent-gold), #c5a028)';
            headerRow.style.color = 'var(--color-primary-dark)';
            headerRow.querySelectorAll('div').forEach(div => {
                div.style.color = 'var(--color-primary-dark)';
                div.style.fontWeight = '600';
                div.style.fontFamily = 'var(--font-sans)';
            });
        }
    }

    /**
     * Override the original generatePDF function to work with simplified data
     */
    enhanceGeneratePDF() {
        // Store reference to original functions if they exist
        if (typeof window.generatePDF === 'function') {
            const originalGenerateMultiPagePDF = window.generateMultiPagePDF;
            
            // Override the PDF generation to work with simplified structure
            window.generateMultiPagePDF = () => {
                // Get table body and populate with simplified data
                const pdfTableBody = document.querySelector('#pdf-table tbody');
                const pdfSubtotal = document.getElementById('pdf-subtotal');
                
                pdfTableBody.innerHTML = '';
                let subtotal = 0;

                document.querySelectorAll('#tableRows .dynamic-row').forEach(row => {
                    // Skip header rows
                    if (row.style.background.includes('#e2e8f0') || row.style.background.includes('accent-gold')) {
                        return;
                    }
                    
                    const crane = row.children[0].value;
                    const capacity = row.children[1].value;
                    const qty = parseFloat(row.children[2].value) || 0;
                    const rate = parseFloat(row.children[3].value) || 0;
                    const amount = qty * rate;

                    subtotal += amount;

                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td style="border-right: 1px solid #D4AF37; padding: 8px;">${crane}</td>
                        <td style="border-right: 1px solid #D4AF37; padding: 8px; text-align: center;">${capacity}</td>
                        <td style="border-right: 1px solid #D4AF37; padding: 8px; text-align: center;">${qty}</td>
                        <td style="padding: 8px; text-align: right; color: #2e7d32; font-weight: 600;">₹${rate.toLocaleString("en-IN")}</td>
                    `;
                    pdfTableBody.appendChild(tr);
                });

                pdfSubtotal.textContent = `₹${subtotal.toLocaleString("en-IN")}`;

                // Add digital signature to PDF preview
                this.addSignatureToPDFPreview();

                // Call the original function if it exists
                if (originalGenerateMultiPagePDF) {
                    originalGenerateMultiPagePDF();
                } else {
                    // Fallback PDF generation
                    this.generateSimplePDF();
                }
            };
        }
    }

    /**
     * Add digital signature to PDF preview
     */
    addSignatureToPDFPreview() {
        const signatureDetails = this.getSignatureDetails();
        const pdfPreview = document.getElementById('pdf-preview');
        
        if (!pdfPreview) return;
        
        // Remove existing signature section
        const existingSignature = pdfPreview.querySelector('.pdf-signature-section');
        if (existingSignature) {
            existingSignature.remove();
        }
        
        // Create signature section for PDF
        if (signatureDetails.signatureDataURL || signatureDetails.name) {
            const signatureSection = document.createElement('div');
            signatureSection.className = 'pdf-signature-section';
            signatureSection.style.cssText = `
                margin-top: 30px;
                padding: 20px;
                border-top: 2px solid #D4AF37;
                background: #fafafa;
                page-break-inside: avoid;
            `;
            
            let signatureHTML = `
                <h4 style="color: #D4AF37; margin: 0 0 15px 0; font-size: 16px; font-weight: bold;">✍️ Authorized Signature</h4>
                <div style="display: flex; justify-content: space-between; align-items: end;">
                    <div style="flex: 1;">
            `;
            
            // Add signature image if available
            if (signatureDetails.signatureDataURL) {
                signatureHTML += `
                    <div style="margin-bottom: 10px;">
                        <img src="${signatureDetails.signatureDataURL}" 
                             style="max-width: 200px; max-height: 60px; border: 1px solid #ddd; background: white; border-radius: 4px;"
                             alt="Digital Signature">
                    </div>
                `;
            }
            
            // Add signatory details
            if (signatureDetails.name) {
                signatureHTML += `
                    <div style="border-top: 1px solid #D4AF37; padding-top: 5px; max-width: 200px;">
                        <div style="font-weight: bold; color: #333; font-size: 14px;">${signatureDetails.name}</div>
                `;
                
                if (signatureDetails.designation) {
                    signatureHTML += `<div style="color: #666; font-size: 12px; margin-top: 2px;">${signatureDetails.designation}</div>`;
                }
                
                signatureHTML += `</div>`;
            }
            
            signatureHTML += `
                    </div>
                    <div style="text-align: right; color: #666; font-size: 11px;">
                        <div><strong>Date:</strong> ${new Date().toLocaleDateString()}</div>
                        <div style="margin-top: 2px;"><strong>Time:</strong> ${new Date().toLocaleTimeString()}</div>
                        <div style="margin-top: 5px; font-size: 10px; font-style: italic;">Digitally Signed</div>
                    </div>
                </div>
            `;
            
            signatureSection.innerHTML = signatureHTML;
            
            // Insert before the disclaimer
            const disclaimer = pdfPreview.querySelector('div[style*="This is a digitally signed"]');
            if (disclaimer) {
                pdfPreview.insertBefore(signatureSection, disclaimer);
            } else {
                pdfPreview.appendChild(signatureSection);
            }
        }
    }

    /**
     * Simple PDF generation fallback
     */
    generateSimplePDF() {
        const element = document.getElementById('pdf-preview');
        
        if (typeof window.html2canvas === 'function' && typeof window.jspdf !== 'undefined') {
            window.html2canvas(element, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#ffffff'
            }).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new window.jspdf.jsPDF('p', 'pt', 'a4');
                const imgWidth = 210;
                const pageHeight = 295;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                let heightLeft = imgHeight;
                let position = 0;

                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;

                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }

                pdf.save('ekta-crane-quotation.pdf');
            });
        }
    }

    /**
     * Initialize simplified rows interface
     */
    initializeSimplifiedRows() {
        // Clear existing rows except header
        const tableRows = document.getElementById('tableRows');
        if (tableRows) {
            // Remove all existing dynamic rows
            const existingRows = tableRows.querySelectorAll('.dynamic-row');
            existingRows.forEach(row => row.remove());
            
            // Add one initial simplified row
            this.createSimplifiedCraneRow();
            
            // Show helpful message
            setTimeout(() => {
                this.showNotification(
                    '✨ Simplified Interface Ready!\n• Double-click any row to remove it\n• Hover to see remove button\n• Only essential fields: Crane Type, Capacity, Qty, Rate',
                    'info',
                    6000
                );
            }, 1000);
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

    /**
     * Initialize digital signature functionality
     */
    initDigitalSignature() {
        const canvas = document.getElementById('signature-canvas');
        const clearBtn = document.getElementById('clear-signature');
        const colorPicker = document.getElementById('signature-color');
        
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        // Set up canvas properties
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#1a1a1a';

        // Mouse events
        canvas.addEventListener('mousedown', (e) => {
            isDrawing = true;
            const rect = canvas.getBoundingClientRect();
            lastX = e.clientX - rect.left;
            lastY = e.clientY - rect.top;
        });

        canvas.addEventListener('mousemove', (e) => {
            if (!isDrawing) return;
            
            const rect = canvas.getBoundingClientRect();
            const currentX = e.clientX - rect.left;
            const currentY = e.clientY - rect.top;

            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(currentX, currentY);
            ctx.stroke();

            lastX = currentX;
            lastY = currentY;
        });

        canvas.addEventListener('mouseup', () => {
            isDrawing = false;
        });

        canvas.addEventListener('mouseout', () => {
            isDrawing = false;
        });

        // Touch events for mobile
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            isDrawing = true;
            const rect = canvas.getBoundingClientRect();
            const touch = e.touches[0];
            lastX = touch.clientX - rect.left;
            lastY = touch.clientY - rect.top;
        });

        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if (!isDrawing) return;
            
            const rect = canvas.getBoundingClientRect();
            const touch = e.touches[0];
            const currentX = touch.clientX - rect.left;
            const currentY = touch.clientY - rect.top;

            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(currentX, currentY);
            ctx.stroke();

            lastX = currentX;
            lastY = currentY;
        });

        canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            isDrawing = false;
        });

        // Clear button
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                this.showNotification('✅ Signature cleared', 'info', 2000);
            });
        }

        // Color picker
        if (colorPicker) {
            colorPicker.addEventListener('change', (e) => {
                ctx.strokeStyle = e.target.value;
            });
        }

        // Store reference to canvas for PDF generation
        this.signatureCanvas = canvas;
    }

    /**
     * Get signature data URL for PDF
     */
    getSignatureDataURL() {
        if (!this.signatureCanvas) return null;
        
        // Check if canvas has content
        const ctx = this.signatureCanvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, this.signatureCanvas.width, this.signatureCanvas.height);
        const data = imageData.data;
        
        // Check if canvas is blank
        let isBlank = true;
        for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] !== 0) { // Check alpha channel
                isBlank = false;
                break;
            }
        }
        
        return isBlank ? null : this.signatureCanvas.toDataURL('image/png');
    }

    /**
     * Get signature details
     */
    getSignatureDetails() {
        const signatory = document.getElementById('signatory-name');
        const designation = document.getElementById('signatory-designation');
        
        return {
            name: signatory ? signatory.value.trim() : '',
            designation: designation ? designation.value.trim() : '',
            signatureDataURL: this.getSignatureDataURL(),
            timestamp: new Date().toLocaleString()
        };
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
