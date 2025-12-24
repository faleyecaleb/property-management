# Prestige Properties - Website Template User Guide

Welcome to your new premium property management website template! This guide will help you customize the colors, content, and properties to match your brand.

## 📂 Project Structure

- **index.html**: Home page.
- **properties.html**: All listings page with filters.
- **property-detail.html**: Single property view.
- **css/**: Styling files.
  - **variables.css**: **[IMPORTANT]** Change your brand colors here.
- **js/**: Javascript files.
  - **properties.js**: **[IMPORTANT]** Add/Edit your property listings here.
- **assets/**: Place your images here.

---

## 🎨 How to Change Colors & Fonts

You can change the entire look of the website by editing just **one file**: `css/variables.css`.

1. Open `css/variables.css`.
2. Look for the `:root` section.
3. Change the Hex codes for `--color-primary` (Main Blue) and `--color-accent` (Gold).

```css
:root {
  /* Change this to your brand's blue/main color */
  --color-primary: #0A2540; 
  
  /* Change this to your brand's accent color */
  --color-accent: #C5A059;
}
```

---

## 🏠 How to Add/Edit Properties

All property data is stored in `js/properties.js`. You don't need to touch HTML to add a new house!

1. Open `js/properties.js`.
2. Find the `propertiesData` array.
3. **Copy and paste** an existing block (everything between `{` and `},`) to create a new entry.
4. Update the fields:
   - `id`: Must be unique (e.g., 7, 8, 9).
   - `image`: Path to your image in the assets folder.
   - `priceFormatted`: The text shown for price (e.g., "₦500,000,000").
   - `price`: Number used for filtering logic (no commas).

**Example:**
```javascript
{
    id: 7,
    title: "New Luxury Apartment",
    price: 45000000,
    priceFormatted: "₦45,000,000",
    type: "apartment", // Options: house, apartment, commercial, land
    status: "sale",    // Options: sale, rent
    location: "Maitama, Abuja",
    beds: 3,
    baths: 4,
    sqm: 400,
    image: "assets/my-new-image.jpg",
    badge: "Hot Deal"
}
```

---

## 🚀 How to Deploy

Since this website is built with **Standard HTML, CSS, and JS**, you can host it anywhere!

### Option 1: Netlify (Recommended for Free Hosting)
1. Go to [Netlify.com](https://www.netlify.com) and sign up.
2. Drag and drop the `PrestigeProperties` folder onto their dashboard.
3. Your site is live in seconds!

### Option 2: cPanel / Traditional Hosting
1. Zip the `PrestigeProperties` folder content using a File Manager.
2. Upload to your `public_html` folder on your server.
3. Extract the files.

---

## 📞 Support

If you need help or advanced customization, please contact the developer who provided this template.
