/**
 * ===============================
 * UTILITÁRIOS
 * ===============================
 */

/**
 * Scroll suave para um seletor
 */
function smoothScrollTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * ===============================
 * NAVEGAÇÃO DO MENU
 * ===============================
 */

function initMenuNavigation() {
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', e => {
            const target = link.getAttribute('data-target');
            if (!target) return;

            e.preventDefault();

            if (target.startsWith('#')) {
                smoothScrollTo(target);
            } else {
                window.location.href = target;
            }
        });
    });
}


/**
 * ===============================
 * MENU HAMBURGER
 * ===============================
 */

function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/**
 * ===============================
 * ANIMAÇÕES AO SCROLL (Observer)
 * ===============================
 */

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .benefit-card, .tip-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * ===============================
 * PARALLAX NO HERO
 * ===============================
 */

function initHeroParallax() {
    window.addEventListener('scroll', () => {
        const heroImage = document.querySelector('.hero-image img');
        if (!heroImage) return;

        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

/**
 * ===============================
 * BOTÕES COM DATA-TARGET
 * ===============================
 */

function initDataTargetButtons() {
    document.querySelectorAll('[data-target]').forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();

            const target = button.getAttribute('data-target');

            // Navegação interna
            if (target.startsWith('#')) {
                smoothScrollTo(target);
            }
            // Outra página
            else {
                window.location.href = target;
            }
        });
    });
}

/**
 * ===============================
 * CARDS EXPANSÍVEIS
 * ===============================
 */

function initExpandableCards() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const content = card.querySelector('.detailed-content');
            if (!content) return;

            content.style.display =
                content.style.display === 'block' ? 'none' : 'block';
        });
    });
}

/**
 * ===============================
 * INICIALIZAÇÃO GLOBAL
 * ===============================
 */

document.addEventListener('DOMContentLoaded', () => {
    initMenuNavigation();
    initHamburgerMenu();
    initScrollAnimations();
    initHeroParallax();
    initDataTargetButtons();
    initExpandableCards();
});
