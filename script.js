/* filepath: /Users/ihsanmd.al-aqib/Documents/JASMY/diary_template/script.js */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Packery for all galleries with proper centering
    const galleries = document.querySelectorAll('.packery-gallery');
    
    galleries.forEach(gallery => {
        // Wait for images to load before initializing Packery
        const images = gallery.querySelectorAll('img');
        let loadedImages = 0;
        
        function initializePackery() {
            // Initialize Packery with proper centering options
            const packeryInstance = new Packery(gallery, {
                itemSelector: '.gallery-item',
                gutter: 5, // Reduced from 15
                fitWidth: false,
                horizontalOrder: true
            });
            
            // Add class to indicate packery is initialized
            gallery.classList.add('packery-initialized');
            
            // Center the entire packery container
            centerPackery(gallery, packeryInstance);
            
            // Re-center on layout complete
            packeryInstance.on('layoutComplete', function() {
                centerPackery(gallery, packeryInstance);
            });
            
            return packeryInstance;
        }
        
        function centerPackery(container, packeryInstance) {
            requestAnimationFrame(() => {
                const containerWidth = container.clientWidth - 30; // Account for padding
                const packerySize = packeryInstance.getSize();
                const packeryWidth = packerySize.width;
                
                if (packeryWidth < containerWidth) {
                    const offset = (containerWidth - packeryWidth) / 2;
                    const items = container.querySelectorAll('.gallery-item');
                    
                    items.forEach(item => {
                        const currentLeft = parseFloat(item.style.left) || 0;
                        item.style.left = (currentLeft + offset) + 'px';
                    });
                }
            });
        }
        
        function checkAllImagesLoaded() {
            loadedImages++;
            if (loadedImages === images.length) {
                initializePackery();
            }
        }
        
        // Add load event listeners to all images
        if (images.length === 0) {
            // No images, initialize immediately
            initializePackery();
        } else {
            images.forEach(img => {
                if (img.complete && img.naturalHeight !== 0) {
                    checkAllImagesLoaded();
                } else {
                    img.addEventListener('load', checkAllImagesLoaded);
                    img.addEventListener('error', checkAllImagesLoaded);
                }
            });
            
            // Fallback: Initialize after 3 seconds if images haven't loaded
            setTimeout(() => {
                if (!gallery.classList.contains('packery-initialized')) {
                    initializePackery();
                }
            }, 3000);
        }
    });
    
    // Add click functionality to images for modal
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            openImageModal(this.src, this.alt);
        });
    });
    
    // Image modal function
    function openImageModal(src, alt) {
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img src="${src}" alt="${alt}" class="modal-image">
                <p class="modal-caption">${alt}</p>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal functionality
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target.classList.contains('close-modal')) {
                document.body.removeChild(modal);
            }
        });
        
        // Add escape key functionality
        const handleEscape = function(e) {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', handleEscape);
            }
        };
        
        document.addEventListener('keydown', handleEscape);
    }
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.content-section p, .packery-gallery').forEach(el => {
        observer.observe(el);
    });
    
    // Handle window resize with debouncing
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            galleries.forEach(gallery => {
                const packeryInstance = Packery.data(gallery);
                if (packeryInstance) {
                    packeryInstance.layout();
                    setTimeout(() => {
                        centerPackery(gallery, packeryInstance);
                    }, 100);
                }
            });
        }, 250);
    });
    
    function centerPackery(container, packeryInstance) {
        requestAnimationFrame(() => {
            const containerWidth = container.clientWidth - 30; // Account for padding
            const packerySize = packeryInstance.getSize();
            const packeryWidth = packerySize.width;
            
            if (packeryWidth < containerWidth) {
                const offset = (containerWidth - packeryWidth) / 2;
                const items = container.querySelectorAll('.gallery-item');
                
                items.forEach(item => {
                    const currentLeft = parseFloat(item.style.left) || 0;
                    item.style.left = (currentLeft + offset) + 'px';
                });
            }
        });
    }
});