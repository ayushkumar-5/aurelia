
# 🌸 Aurelia – Women’s Clothing E-Commerce Store

A modern, elegant e-commerce platform for **Aurelia**, a premium women’s clothing brand.
Built with **Next.js + Tailwind CSS**, featuring **Spline 3D animation**, smooth interactions, and a fully responsive design.

---

## ✨ Features

* 🎨 **Classy & Minimal UI** – timeless design with editorial feel
* 🖼️ **Spline 3D Animation** – immersive hero section for brand storytelling
* 🛍️ **E-Commerce Ready** – shop page, filters, wishlist, cart & checkout flow
* 📱 **Responsive Layout** – optimized for mobile, tablet, and desktop
* ⚡ **SEO & Performance** – Next.js SSR, lazy-loaded assets, structured data
* 🔒 **User Experience** – accessible, smooth micro-interactions, easy navigation

---

## 📂 Project Structure

```
.
├── components/         # Reusable UI components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── HeroSpline.jsx
│   ├── ProductCard.jsx
│   ├── CartDrawer.jsx
│   └── ...
├── pages/
│   ├── index.jsx       # Homepage
│   ├── shop.jsx        # Catalog page
│   ├── product/[id].jsx# Product detail page
│   ├── about.jsx
│   └── contact.jsx
├── public/             # Static assets (images, icons, fonts)
├── styles/             # Tailwind + custom CSS
├── data/products.json  # Mock product data
├── utils/              # Helper functions
├── README.md
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/ayushkumar-5/aurelia-store.git
cd aurelia-store
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run locally

```bash
npm run dev
# or
yarn dev
```

Visit **[http://localhost:3000](http://localhost:3000)** to view the app.

---

## 🎨 Customization

### 🔗 Add your Spline animation

Open **`components/HeroSpline.jsx`** and replace `SPLINE_URL` with your link:

```html
<iframe
  src="YOUR_SPLINE_LINK"
  frameborder="0"
  class="absolute inset-0 w-full h-full"
  allow="autoplay; fullscreen; xr-spatial-tracking"
  allowfullscreen
  ar
></iframe>
```

### 🛍️ Add Products

Edit `data/products.json`:

```json
{
  "id": 1,
  "title": "Silk Midi Dress",
  "price": 3499,
  "sizes": ["S", "M", "L"],
  "colors": ["Ivory", "Rose"],
  "images": ["/products/dress1.jpg"],
  "description": "Elegant silk midi dress with soft drape."
}
```

---

## 🛠️ Tech Stack

* [Next.js](https://nextjs.org/) – React framework
* [Tailwind CSS](https://tailwindcss.com/) – styling
* [Framer Motion](https://www.framer.com/motion/) – animations
* [Spline](https://spline.design/) – 3D interactive hero
* \[React Hook Form + Zod] – form handling & validation
* \[Local Storage] – cart & wishlist persistence

---

## 📌 Roadmap

* 🔑 Firebase authentication for Aurelia customers
* 🛒 Integration with Shopify / Medusa backend
* ✨ “Shop the Look” outfits & curated recommendations
* 📦 Order tracking & returns portal
* 🌍 Multi-currency support

---

## 🤝 Contributing

1. Fork this repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add feature"`
4. Push branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.

---

💎 Crafted with elegance for **Aurelia** ✨

---

Do you also want me to design a **logo wordmark concept** for *Aurelia* (like serif + floral accent, suitable for the README header and site favicon)?
