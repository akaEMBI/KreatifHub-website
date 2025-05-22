// Mobile Navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle menu
    navLinks.classList.toggle('active');
    
    // Burger animation
    burger.classList.toggle('toggle');
    
    // Prevent scrolling when menu is open
    document.body.classList.toggle('no-scroll');
});

// Close menu when clicking on nav items
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
        document.body.classList.remove('no-scroll');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burger.classList.remove('toggle');
                document.body.classList.remove('no-scroll');
            }
        }
    });
});

// Form Submission
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
        
        // Reset form
        this.reset();
    });
}

// Animation on Scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.animate__animated');
    const windowHeight = window.innerHeight;
    const triggerPoint = 100; // Jarak trigger dari bawah viewport

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < windowHeight - triggerPoint) {
            const animationClass = Array.from(element.classList)
                .find(cls => cls.startsWith('animate__') && cls !== 'animate__animated');
            
            if (animationClass) {
                element.classList.add(animationClass);
                element.style.opacity = '1';
            }
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Trigger animasi saat load
    revealOnScroll();
    
    // Trigger animasi saat scroll
    window.addEventListener('scroll', revealOnScroll);
});