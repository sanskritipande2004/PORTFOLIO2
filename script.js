// Add this to your script file
document.addEventListener('DOMContentLoaded', function() {
    const skillSection = document.getElementById('skills');
    const skillProgresses = document.querySelectorAll('.skill-progress');
    
    // Set initial width from HTML style attribute
    skillProgresses.forEach(progress => {
        const width = progress.parentElement.previousElementSibling.lastElementChild.textContent;
        progress.style.width = width;
    });
    
    // Animation trigger when section comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {threshold: 0.2});
    
    observer.observe(skillSection);
});
class CertificateSlider {
    constructor() {
        this.slider = document.querySelector('.certs-slider');
        this.prevBtn = document.querySelector('.slider-prev');
        this.nextBtn = document.querySelector('.slider-next');
        this.slides = Array.from(document.querySelectorAll('.cert-slide'));
        this.currentIndex = 0;
        
        this.init();
    }
    
    init() {
        // Calculate exact scroll amount
        this.slideWidth = this.slides[0].offsetWidth + 
                        parseInt(window.getComputedStyle(this.slides[0]).marginRight);
        
        // Set up event listeners
        this.prevBtn.addEventListener('click', () => this.scrollToPrev());
        this.nextBtn.addEventListener('click', () => this.scrollToNext());
        
        // Optional: Handle window resize
        window.addEventListener('resize', () => {
            this.slideWidth = this.slides[0].offsetWidth + 
                            parseInt(window.getComputedStyle(this.slides[0]).marginRight);
        });
    }
    
    scrollToPrev() {
        this.currentIndex = Math.max(0, this.currentIndex - 1);
        this.slider.scrollTo({
            left: this.currentIndex * this.slideWidth,
            behavior: 'smooth'
        });
    }
    
    scrollToNext() {
        this.currentIndex = Math.min(
            this.slides.length - 1, 
            this.currentIndex + 1
        );
        this.slider.scrollTo({
            left: this.currentIndex * this.slideWidth,
            behavior: 'smooth'
        });
    }
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => new CertificateSlider());