// Banner Canvas Animation (Subtle Lofi Stars)
const canvas = document.getElementById('banner-canvas');

if (canvas) {
    const ctx = canvas.getContext('2d');

    let width, height;
    let stars = [];

    function resize() {
        if (!canvas.parentElement) return;
        width = canvas.width = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
    }

    class Star {
        constructor() {
            this.init();
        }

        init() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 15 + 5; // 5-20px size
            this.maxSize = this.size;
            this.speedX = (Math.random() - 0.5) * 0.2; // Very slow movement
            this.speedY = (Math.random() - 0.5) * 0.2;
            this.alpha = Math.random() * 0.5 + 0.1; // Low opacity for subtlety
            this.alphaChange = (Math.random() - 0.5) * 0.005; // Twinkle effect
            // Pastel Colors: Soft Sage, Misty Rose, Pale Blue, Lavender, Gold
            const colors = ['#E8F5E9', '#FCE4EC', '#E3F2FD', '#F3E5F5', '#FFF9C4'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.002;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.rotation += this.rotationSpeed;
            this.alpha += this.alphaChange;

            // Twinkle logic
            if (this.alpha <= 0.1 || this.alpha >= 0.6) {
                this.alphaChange *= -1;
            }

            // Wrap around edges
            if (this.x < -50) this.x = width + 50;
            if (this.x > width + 50) this.x = -50;
            if (this.y < -50) this.y = height + 50;
            if (this.y > height + 50) this.y = -50;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;

            // Draw 4-pointed star (sparkle)
            ctx.beginPath();
            for (let i = 0; i < 4; i++) {
                ctx.lineTo(0, this.size / 2); // Outer point
                ctx.rotate(Math.PI / 4);
                ctx.lineTo(0, this.size / 6); // Inner point
                ctx.rotate(Math.PI / 4);
            }
            ctx.closePath();
            ctx.fill();

            ctx.restore();
        }
    }

    function initStars() {
        stars = [];
        // Number of stars based on screen size
        const starCount = Math.floor((width * height) / 500);
        for (let i = 0; i < starCount; i++) {
            stars.push(new Star());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        stars.forEach(star => {
            star.update();
            star.draw();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        initStars();
    });

    // Start animation lazily when banner enters the viewport to save CPU on load
    function startBannerAnimation() {
        // Avoid starting multiple times
        if (window.__bannerAnimationStarted) return;
        window.__bannerAnimationStarted = true;
        resize();
        initStars();
        animate();
    }

    const bannerEl = document.getElementById('banner');
    if (bannerEl && 'IntersectionObserver' in window) {
        const bannerObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startBannerAnimation();
                    obs.unobserve(entry.target);
                }
            });
        }, { root: null, threshold: 0 });
        bannerObserver.observe(bannerEl);
    } else {
        // Fallback: start immediately
        startBannerAnimation();
    }
}

// Mobile Dynamic Text
const dynamicTextEl = document.getElementById('dynamic-text');
if (dynamicTextEl) {
    const words = ['Amor', 'Paciencia', 'Descubrimiento', 'Juego'];
    let currentIndex = 0;

    function updateText() {
        // Fade out
        dynamicTextEl.style.opacity = '0';

        setTimeout(() => {
            // Change text
            dynamicTextEl.textContent = words[currentIndex];
            currentIndex = (currentIndex + 1) % words.length;

            // Fade in
            dynamicTextEl.style.opacity = '1';
        }, 1000); // Wait for fade out
    }

    // Initial set
    dynamicTextEl.textContent = words[0];
    dynamicTextEl.style.opacity = '1';
    currentIndex = 1;

    // Cycle every 3 seconds
    setInterval(updateText, 3000);
}
