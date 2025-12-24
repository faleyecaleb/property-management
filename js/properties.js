/**
 * Properties Page Logic
 * Handles rendering of property cards and filtering.
 */

const propertiesData = [
    {
        id: 1,
        title: "Royal Palms Villa, Lekki Phase 1",
        price: 580000000,
        priceFormatted: "₦580,000,000",
        type: "house",
        status: "sale",
        location: "Lekki, Lagos",
        beds: 5,
        baths: 6,
        sqm: 850,
        image: "assets/interior-1.png",
        badge: "New"
    },
    {
        id: 2,
        title: "Eko Atlantic Heights",
        price: 12000000,
        priceFormatted: "₦12,000,000 / yr",
        type: "apartment",
        status: "rent",
        location: "Victoria Island, Lagos",
        beds: 3,
        baths: 3,
        sqm: 300,
        image: "assets/hero-bg.png",
        badge: "Featured"
    },
    {
        id: 3,
        title: "The Horizon Penthouse",
        price: 950000000,
        priceFormatted: "₦950,000,000",
        type: "apartment",
        status: "sale",
        location: "Ikoyi, Lagos",
        beds: 4,
        baths: 5,
        sqm: 600,
        image: "assets/kitchen-1.png",
        badge: "Luxury"
    },
    {
        id: 4,
        title: "Commercial Office Hub",
        price: 45000000,
        priceFormatted: "₦45,000,000 / yr",
        type: "commercial",
        status: "rent",
        location: "Abuja CBD",
        beds: 0,
        baths: 4,
        sqm: 1200,
        image: "assets/office-exterior.png",
        badge: "Business"
    },
    {
        id: 5,
        title: "Banana Island Mansion",
        price: 2500000000,
        priceFormatted: "₦2,500,000,000",
        type: "house",
        status: "sale",
        location: "Banana Island, Lagos",
        beds: 7,
        baths: 9,
        sqm: 1500,
        image: "assets/hero-bg.png", // Placeholder reuse
        badge: "Exclusive"
    },
    {
        id: 6,
        title: "Modern Starter Home",
        price: 85000000,
        priceFormatted: "₦85,000,000",
        type: "house",
        status: "sale",
        location: "Ajah, Lagos",
        beds: 3,
        baths: 3,
        sqm: 400,
        image: "assets/interior-1.png", // Placeholder reuse
        badge: "Best Value"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('properties-grid');
    const filterForm = document.getElementById('filter-form');

    // Initial Render
    renderProperties(propertiesData);

    // Filter Logic
    if (filterForm) {
        filterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            filterProperties();
        });

        // Live filter as you type/select (optional, but nice)
        // filterForm.addEventListener('input', filterProperties);
    }

    function filterProperties() {
        const searchInput = document.getElementById('search').value.toLowerCase();
        const typeInput = document.getElementById('type').value;
        const statusInput = document.getElementById('status').value;
        const minPrice = document.getElementById('min-price').value;
        const maxPrice = document.getElementById('max-price').value;

        const filtered = propertiesData.filter(prop => {
            // Text Search
            const matchSearch = prop.title.toLowerCase().includes(searchInput) ||
                prop.location.toLowerCase().includes(searchInput);

            // Type
            const matchType = typeInput === 'all' || prop.type === typeInput;

            // Status
            const matchStatus = statusInput === 'all' || prop.status === statusInput;

            // Price (Handles rent vs sale roughly for demo)
            // Ideally we'd separate rent/sale logic or normalize price
            let matchPrice = true;
            if (minPrice) matchPrice = matchPrice && prop.price >= minPrice;
            if (maxPrice) matchPrice = matchPrice && prop.price <= maxPrice;

            return matchSearch && matchType && matchStatus && matchPrice;
        });

        renderProperties(filtered);
    }

    function renderProperties(properties) {
        grid.innerHTML = '';

        if (properties.length === 0) {
            grid.innerHTML = '<p class="text-center w-100" style="grid-column: 1/-1; padding: 2rem;">No properties found matching your criteria.</p>';
            return;
        }

        properties.forEach(prop => {
            const card = document.createElement('article');
            card.className = 'property-card';

            // Determine badge color based on status or badge text could be dynamic
            const badgeColor = prop.status === 'rent' ? 'var(--color-success)' : 'var(--color-accent)';
            const badgeTextColor = prop.status === 'rent' ? 'white' : 'var(--color-primary-dark)';

            card.innerHTML = `
                <div class="card-image-wrapper">
                    <span class="card-badge" style="background-color: ${badgeColor}; color: ${badgeTextColor};">${prop.status === 'rent' ? 'For Rent' : 'For Sale'}</span>
                    ${prop.badge ? `<span class="card-status">${prop.badge}</span>` : ''}
                    <img src="${prop.image}" alt="${prop.title}" loading="lazy">
                </div>
                <div class="card-content">
                    <div class="card-price">${prop.priceFormatted}</div>
                    <h3 class="card-title">${prop.title}</h3>
                    <div class="card-location">
                        <i class="ph ph-map-pin"></i>
                        <span>${prop.location}</span>
                    </div>
                    ${prop.type !== 'commercial' && prop.type !== 'land' ? `
                    <div class="card-features">
                        <span class="feature"><i class="ph ph-bed"></i> ${prop.beds} Beds</span>
                        <span class="feature"><i class="ph ph-shower"></i> ${prop.baths} Baths</span>
                        <span class="feature"><i class="ph ph-ruler"></i> ${prop.sqm} sqm</span>
                    </div>
                    ` : `
                    <div class="card-features">
                        <span class="feature"><i class="ph ph-ruler"></i> ${prop.sqm} sqm</span>
                        <span class="feature"><i class="ph ph-briefcase"></i> ${prop.type === 'commercial' ? 'Office/Retail' : 'Land'}</span>
                    </div>
                    `}
                    <div class="card-footer">
                        <a href="property-detail.html?id=${prop.id}" class="card-btn">View Details</a>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }
});
