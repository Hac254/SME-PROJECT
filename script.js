// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

// Animated counter for stats
const statNumbers = document.querySelectorAll('.stat-number');

function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            clearInterval(timer);
            el.textContent = target;
        } else {
            el.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            statNumbers.forEach(stat => {
                animateCounter(stat);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsContainer = document.querySelector('.stats-container');
if (statsContainer) {
    statsObserver.observe(statsContainer);
}

// Success Stories Slider
const storySlides = document.querySelectorAll('.story-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide(index) {
    storySlides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    storySlides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + storySlides.length) % storySlides.length;
        showSlide(currentSlide);
    });
    
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % storySlides.length;
        showSlide(currentSlide);
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto slide for success stories
let slideInterval;

function startSlideInterval() {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % storySlides.length;
        showSlide(currentSlide);
    }, 5000);
}

function stopSlideInterval() {
    clearInterval(slideInterval);
}

if (storySlides.length > 0) {
    startSlideInterval();
    
    // Pause auto slide on hover
    const storiesSlider = document.querySelector('.stories-slider');
    if (storiesSlider) {
        storiesSlider.addEventListener('mouseenter', stopSlideInterval);
        storiesSlider.addEventListener('mouseleave', startSlideInterval);
    }
}

// Form submission handling
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real implementation, you would send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real implementation, you would send the form data to a server
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Smooth scrolling for anchor links
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
        }
    });
});

// Sticky header
const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// Service card hover effect for mobile
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('click', function() {
        if (window.innerWidth < 768) {
            this.classList.toggle('active');
        }
    });
});

// Add placeholder images for development
document.addEventListener('DOMContentLoaded', function() {
    // Replace with actual images in production
    const imagePlaceholders = {
        'image.png': 'https://i.ibb.co/whHq7TkZ/image.jpg',
        'success-story-1.jpg': 'https://news.switchtv.ke/wp-content/uploads/2022/09/SME-SFA-_1_.webp',
        'success-story-2.jpg': 'https://etimg.etb2bimg.com/photo/85061939.cms',
        'success-story-3.jpg': 'https://cdn.prod.website-files.com/638fbebd8e0e6eae1b003afb/63ab1ebe785d7f9cecf9ba75_60998c41f509a7702e32a952_1*ujsvTUeEe5w-bzTxqIYI6w.jpeg',
        'testimonial-1.jpg': 'https://via.placeholder.com/60x60?text=T1',
        'testimonial-2.jpg': 'https://via.placeholder.com/60x60?text=T2',
        'testimonial-3.jpg': 'https://via.placeholder.com/60x60?text=T3',
        'DSC_8600.JPG': 'https://i.ibb.co/xZdRCkw/DSC-8600.jpg',
/*partners*/
        'image (3).png': 'https://i.ibb.co/B50YPdL6/image-3.png',
        'WhatsApp Image 2025-03-29 at 1.51.45 PM.jpeg': 'https://i.ibb.co/RkwHj3J9/Whats-App-Image-2025-03-29-at-1-51-45-PM.jpg',
        'WhatsApp Image 2025-03-29 at 2.38.32 PM.jpeg': 'https://i.ibb.co/B2t8W8n1/Whats-App-Image-2025-03-29-at-2-38-32-PM.jpg',
        'WhatsApp Image 2025-03-29 at 2.52.42 PM.jpeg': 'https://i.ibb.co/n8zNDs5K/Whats-App-Image-2025-03-29-at-2-52-42-PM.jpg',
        'WhatsApp Image 2025-03-29 at 9.23.20 AM.jpeg': 'https://i.ibb.co/V0nSSHD7/Whats-App-Image-2025-03-29-at-9-23-20-AM.jpg',
    };
    
    document.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src');
        if (src && src.startsWith('images/')) {
            const filename = src.replace('images/', '');
            if (imagePlaceholders[filename]) {
                img.setAttribute('src', imagePlaceholders[filename]);
            }
        }
    });
});

// Add this code near the end of the file, before the closing script tag

// Video section animation
const videoSection = document.querySelector('.video-container');
if (videoSection) {
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                videoObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    // Set initial state
    videoSection.style.opacity = 0;
    videoSection.style.transform = 'translateY(20px)';
    videoSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    videoObserver.observe(videoSection);
}

// Update the navigation links to include the video section
document.addEventListener('DOMContentLoaded', function() {
    // Add video link to footer quick links if it exists
    const footerLinks = document.querySelector('.footer-links ul');
    if (footerLinks) {
        // Check if the video link already exists
        const existingVideoLink = Array.from(footerLinks.querySelectorAll('a')).find(link => link.getAttribute('href') === '#video');
        
        if (!existingVideoLink) {
            // Create new list item for video link
            const videoLinkItem = document.createElement('li');
            const videoLink = document.createElement('a');
            videoLink.setAttribute('href', '#video');
            videoLink.textContent = 'Our Video';
            videoLinkItem.appendChild(videoLink);
            
            // Insert before contact link if it exists
            const contactLinkItem = Array.from(footerLinks.querySelectorAll('li')).find(item => 
                item.querySelector('a')?.getAttribute('href') === '#contact');
            
            if (contactLinkItem) {
                footerLinks.insertBefore(videoLinkItem, contactLinkItem);
            } else {
                footerLinks.appendChild(videoLinkItem);
            }
        }
    }
});