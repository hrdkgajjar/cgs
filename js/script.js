/**
 * @file script.js
 * @description Main JavaScript file for the Chamunda Grahak Suraksha Mandal website.
 * @author Gemini Code Assist
 * @version 2.0.0
 */

class Preloader {
    constructor() {
        this.loaderWrapper = document.querySelector('.loader-wrapper');
    }

    init() {
        if (!this.loaderWrapper) return;
        window.addEventListener('load', () => {
            this.loaderWrapper.style.opacity = '0';
            this.loaderWrapper.style.visibility = 'hidden';
        });
    }
}

class MobileNav {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
    }

    init() {
        if (!this.hamburger || !this.navMenu) return;

        this.hamburger.addEventListener('click', () => this.toggleNav());

        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            if (this.hamburger.classList.contains('active')) {
                this.toggleNav(false);
            }
        }));
    }

    toggleNav(forceState) {
        const isActive = typeof forceState !== 'undefined' ? forceState : !this.hamburger.classList.contains('active');
        this.hamburger.classList.toggle('active', isActive);
        this.navMenu.classList.toggle('active', isActive);
        this.hamburger.setAttribute('aria-expanded', isActive);

        if (isActive) {
            // Trap focus within the menu
            this.focusableElements = this.navMenu.querySelectorAll('a[href], button');
            this.firstFocusableElement = this.focusableElements[0];
            this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
            this.firstFocusableElement.focus();
            this.navMenu.addEventListener('keydown', this.trapFocus.bind(this));
        }
    }
}

class StickyHeader {
    constructor() {
        this.header = document.querySelector('.header');
        this.lastScrollY = window.scrollY;
    }

    init() {
        if (!this.header) return;
        window.addEventListener('scroll', () => {
            if (this.lastScrollY < window.scrollY && window.scrollY > 100) {
                this.header.style.top = `-${this.header.offsetHeight}px`;
            } else {
                this.header.style.top = '0';
            }
            this.lastScrollY = window.scrollY;
        });
    }
}

class BackToTopButton {
    constructor() {
        this.button = document.querySelector('.back-to-top');
    }

    init() {
        if (!this.button) return;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                this.button.classList.add('visible');
            } else {
                this.button.classList.remove('visible');
            }
        });
    }
}

class ScrollAnimator {
    constructor(selector, threshold = 0.1) {
        this.elements = document.querySelectorAll(selector);
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold });
    }

    init() {
        if (this.elements.length > 0) {
            this.elements.forEach(el => this.observer.observe(el));
        }
    }
}

class AnimatedCounter {
    constructor(selector, threshold = 0.5) {
        this.counters = document.querySelectorAll(selector);
        this.observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animate(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold });
    }

    animate(counter) {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = 200; // Lower is faster

        const updateCount = () => {
            const increment = target / speed;
            count += increment;

            if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    }

    init() {
        if (this.counters.length > 0) {
            this.counters.forEach(counter => this.observer.observe(counter));
        }
    }
}

class FaqAccordion {
    constructor() {
        this.faqItems = document.querySelectorAll('.faq-item');
    }

    init() {
        if (this.faqItems.length === 0) return;

        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => this.toggleItem(item));
        });
    }

    toggleItem(clickedItem) {
        const isActive = clickedItem.classList.contains('active');

        this.faqItems.forEach(item => {
            item.classList.remove('active');
            item.querySelector('.faq-answer').style.maxHeight = null;
        });

        if (!isActive) {
            clickedItem.classList.add('active');
            const answer = clickedItem.querySelector('.faq-answer');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    }
}

class GalleryLightbox {
    constructor() {
        this.lightbox = document.getElementById('lightbox');
        if (!this.lightbox) return;

        this.lightboxImg = document.getElementById('lightbox-img');
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.closeBtn = document.querySelector('.lightbox-close');
        this.prevBtn = document.querySelector('.lightbox-prev');
        this.nextBtn = document.querySelector('.lightbox-next');
        this.currentImageIndex = 0;
        this.handleKeydown = this.handleKeydown.bind(this);
    }

    init() {
        if (!this.lightbox) return;

        this.galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => this.open(index));
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.open(index);
                }
            });
            item.setAttribute('tabindex', '0');
        });

        this.closeBtn.addEventListener('click', () => this.close());
        this.prevBtn.addEventListener('click', () => this.showPrev());
        this.nextBtn.addEventListener('click', () => this.showNext());
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) this.close();
        });

    }

    handleKeydown(e) {
        if (e.key === 'Escape') this.close();
        if (e.key === 'ArrowLeft') this.showPrev();
        if (e.key === 'ArrowRight') this.showNext();
    }

    open(index) {
        this.lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
        this.closeBtn.focus();
        this.showImage(index);
        document.addEventListener('keydown', this.handleKeydown);
    }

    close() {
        this.lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', this.handleKeydown);
        this.galleryItems[this.currentImageIndex].focus();
    }

    showImage(index) {
        if (index >= this.galleryItems.length) index = 0;
        if (index < 0) index = this.galleryItems.length - 1;
        const imgSrc = this.galleryItems[index].querySelector('img').src;
        this.lightboxImg.src = imgSrc;
        this.currentImageIndex = index;
    }

    showPrev() {
        this.showImage(this.currentImageIndex - 1);
    }

    showNext() {
        this.showImage(this.currentImageIndex + 1);
    }
}

class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validate()) {
                alert('Thank you for your message! We will get back to you soon.');
                this.form.reset();
            }
        });
    }

    validate() {
        let isValid = true;
        const fields = ['name', 'phone', 'email', 'subject', 'message'];
        document.querySelectorAll('.form-group').forEach(group => group.classList.remove('error'));

        fields.forEach(id => {
            const input = document.getElementById(id);
            const value = input.value.trim();
            let fieldIsValid = true;
            let errorMessage = '';

            if (value === '') {
                fieldIsValid = false;
                errorMessage = `${id.charAt(0).toUpperCase() + id.slice(1)} is required.`;
            } else if (id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                fieldIsValid = false;
                errorMessage = 'Please enter a valid email address.';
            } else if (id === 'phone' && !/^\d{10}$/.test(value)) {
                fieldIsValid = false;
                errorMessage = 'Please enter a valid 10-digit phone number.';
            }

            if (!fieldIsValid) {
                this.showError(input, errorMessage);
                isValid = false;
            }
        });

        return isValid;
    }

    showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.add('error');
        const errorElement = formGroup.querySelector('.error-message');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }
}

class DarkModeToggle {
    constructor() {
        this.toggleButton = document.getElementById('dark-mode-toggle');
        this.body = document.body;
    }

    init() {
        if (!this.toggleButton) return;

        if (localStorage.getItem('darkMode') === 'enabled') {
            this.body.classList.add('dark-mode');
        }

        this.toggleButton.addEventListener('click', () => {
            this.body.classList.toggle('dark-mode');
            const status = this.body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
            localStorage.setItem('darkMode', status);
        });
    }
}

class CookieConsent {
    constructor() {
        this.banner = document.getElementById('cookie-consent-banner');
        this.acceptBtn = document.getElementById('cookie-consent-accept');
    }

    init() {
        if (!this.banner || !this.acceptBtn) return;

        if (localStorage.getItem('cookie_consent') !== 'accepted') {
            this.banner.style.display = 'block';
        }

        this.acceptBtn.addEventListener('click', () => {
            this.banner.style.display = 'none';
            localStorage.setItem('cookie_consent', 'accepted');
        });
    }
}

class App {
    static init() {
        new Preloader().init();
        new MobileNav().init();
        new StickyHeader().init();
        new BackToTopButton().init();
        new ScrollAnimator('.animate-on-scroll').init();
        new AnimatedCounter('.counter').init();
        new FaqAccordion().init();
        new GalleryLightbox().init();
        new ContactForm().init();
        new DarkModeToggle().init();
        new CookieConsent().init();

        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }
}

document.addEventListener('DOMContentLoaded', App.init);
