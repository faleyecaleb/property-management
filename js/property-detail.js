/**
 * Property Detail JS
 * Fetches property ID from URL and populates the page.
 * Uses `propertiesData` from properties.js (must be loaded first).
 */

document.addEventListener('DOMContentLoaded', () => {
    // Get ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const propId = parseInt(urlParams.get('id'));

    if (!propId) {
        // Fallback or Redirect if no ID (for demo purposes, load first item)
        // window.location.href = 'properties.html';
        loadProperty(propertiesData[0]);
        return;
    }

    const property = propertiesData.find(p => p.id === propId);

    if (property) {
        loadProperty(property);
    } else {
        document.querySelector('.property-header').innerHTML = '<h1>Property Not Found</h1>';
    }
});

function loadProperty(prop) {
    document.title = `${prop.title} | Prestige Properties`;

    // Header
    document.getElementById('prop-title').textContent = prop.title;
    document.getElementById('prop-location').innerHTML = `<i class="ph ph-map-pin"></i> ${prop.location}`;
    document.getElementById('prop-price').textContent = prop.priceFormatted;

    // Images
    const mainImg = document.getElementById('prop-main-img');
    mainImg.src = prop.image;

    // Fallback if image fails (using assets/hero-bg.png generally safe)
    mainImg.onerror = function () { this.src = 'assets/hero-bg.png'; };

    // Features
    const featuresContainer = document.getElementById('prop-features');
    let featuresHtml = '';

    if (prop.type !== 'commercial' && prop.type !== 'land') {
        featuresHtml += `
            <div class="key-feature-item"><i class="ph ph-bed"></i> ${prop.beds} Bedrooms</div>
            <div class="key-feature-item"><i class="ph ph-shower"></i> ${prop.baths} Bathrooms</div>
            <div class="key-feature-item"><i class="ph ph-ruler"></i> ${prop.sqm} sqm</div>
        `;
    } else {
        featuresHtml += `
             <div class="key-feature-item"><i class="ph ph-ruler"></i> ${prop.sqm} sqm</div>
             <div class="key-feature-item"><i class="ph ph-briefcase"></i> ${prop.type.toUpperCase()}</div>
        `;
    }

    // Add Status 
    featuresHtml += `<div class="key-feature-item" style="color: var(--color-success);"><i class="ph ph-tag"></i> For ${prop.status === 'rent' ? 'Rent' : 'Sale'}</div>`;

    featuresContainer.innerHTML = featuresHtml;
}
