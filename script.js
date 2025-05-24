document.addEventListener('DOMContentLoaded', function() {
    // Set default language
    document.body.classList.add('pt-lang');
    
    // Language toggle
    const ptBtn = document.getElementById('pt-btn');
    const enBtn = document.getElementById('en-btn');
    const esBtn = document.getElementById('es-btn');
    
    ptBtn.addEventListener('click', function() {
        document.body.classList.remove('en-lang');
        document.body.classList.remove('es-lang');
        document.body.classList.add('pt-lang');
        ptBtn.classList.add('active');
        enBtn.classList.remove('active');
        esBtn.classList.remove('active');
    });
    
    enBtn.addEventListener('click', function() {
        document.body.classList.remove('pt-lang');
        document.body.classList.remove('es-lang');
        document.body.classList.add('en-lang');
        enBtn.classList.add('active');
        ptBtn.classList.remove('active');
        esBtn.classList.remove('active');
    });
    
    esBtn.addEventListener('click', function() {
        document.body.classList.remove('pt-lang');
        document.body.classList.remove('en-lang');
        document.body.classList.add('es-lang');
        esBtn.classList.add('active');
        ptBtn.classList.remove('active');
        enBtn.classList.remove('active');
    });
    
    // Scroll animation for sections
    const sections = document.querySelectorAll('.section');
    
    function checkSections() {
        const triggerBottom = window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            }
        });
    }
    
    // Check sections on load
    checkSections();
    
    // Check sections on scroll
    window.addEventListener('scroll', checkSections);
    
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Timeline animation on hover
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.timeline-marker').style.transform = 'scale(1.5)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.timeline-marker').style.transform = 'scale(1)';
        });
    });
});
