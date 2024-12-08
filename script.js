const backToTop = document.getElementById('back-to-top');
window.onscroll = () => {
    backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
};
backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
function showPopup(eventName) {
    document.querySelector('.popup-overlay').style.display = 'flex';
    document.querySelector('#popup-content').innerText = `Details about: ${eventName}`;
    document.addEventListener("DOMContentLoaded", () => {
        const aboutSection = document.querySelector('.about-section');
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        aboutSection.style.animation = "fadeIn 1.2s ease-in-out";
                    }
                });
            },
            { threshold: 0.3 }
        );
    
        observer.observe(aboutSection);
    });    
}

function hidePopup() {
    document.querySelector('.popup-overlay').style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Create the Lightbox Modal
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.id = 'lightbox';
    lightboxOverlay.style.cssText = `
        display: none; 
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        background: rgba(0,0,0,0.8); 
        justify-content: center; 
        align-items: center; 
        z-index: 1000;
    `;

    const lightboxImage = document.createElement('img');
    lightboxImage.style.cssText = `
        max-width: 90%;
        max-height: 80%;
        border-radius: 10px;
    `;

    const lightboxTitle = document.createElement('p');
    lightboxTitle.style.cssText = `
        color: white; 
        margin-top: 10px;
        text-align: center;
        font-size: 1.2rem;
    `;

    lightboxOverlay.appendChild(lightboxImage);
    lightboxOverlay.appendChild(lightboxTitle);
    document.body.appendChild(lightboxOverlay);

    // Open modal on click
    galleryItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            lightboxImage.src = item.href;
            lightboxTitle.textContent = item.dataset.title;
            lightboxOverlay.style.display = "flex";
        });
    });

    // Close modal when clicking on overlay
    lightboxOverlay.addEventListener("click", () => {
        lightboxOverlay.style.display = "none";
    });
});
