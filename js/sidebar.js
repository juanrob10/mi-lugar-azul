document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section, header#banner'); // Include banner as a section
    const sidebarContainer = document.createElement('div');
    sidebarContainer.classList.add('sidebar-nav');
    document.body.appendChild(sidebarContainer);

    // Create dots for each section
    sections.forEach(section => {
        if (!section.id) return; // Skip sections without ID

        const dot = document.createElement('div');
        dot.classList.add('sidebar-dot');
        dot.dataset.target = section.id;

        // Try to find a label for the tooltip
        let label = section.id;
        const heading = section.querySelector('h1, h2, h3');
        if (heading) {
            label = heading.innerText;
        } else if (section.id === 'banner') {
            label = 'Inicio';
        }

        // Capitalize first letter if using ID
        if (label === section.id) {
            label = label.charAt(0).toUpperCase() + label.slice(1);
        }

        dot.dataset.label = label;

        dot.addEventListener('click', () => {
            section.scrollIntoView({ behavior: 'smooth' });
        });

        sidebarContainer.appendChild(dot);
    });

    // Improved Intersection Observer for active state
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -20% 0px', // Smaller margin to focus on center
        threshold: [0, 0.25, 0.5, 0.75, 1] // Multiple thresholds for better granularity
    };

    const observer = new IntersectionObserver((entries) => {
        // We need to determine which section is *most* visible on the screen
        // "Most visible" means occupying the largest area of the viewport

        entries.forEach(entry => {
            if (entry.target.id) {
                // Calculate visible area (width * height)
                const visibleArea = entry.intersectionRect.width * entry.intersectionRect.height;
                entry.target.dataset.visibleArea = visibleArea;
            }
        });

        // Find the section with the highest visible area
        let maxArea = 0;
        let activeId = null;

        sections.forEach(section => {
            const area = parseFloat(section.dataset.visibleArea || 0);
            if (area > maxArea) {
                maxArea = area;
                activeId = section.id;
            }
        });

        // If we have a clear winner, update.
        if (activeId && maxArea > 0) {
            updateActiveDot(activeId);
        }

    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    function updateActiveDot(targetId) {
        const dots = document.querySelectorAll('.sidebar-dot');
        dots.forEach(dot => {
            if (dot.dataset.target === targetId) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
});
