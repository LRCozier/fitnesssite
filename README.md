<p align="center">
  <img src="https://via.placeholder.com/1200x300/111111/DC2626?text=LAC+Fitness+%7C+Strength+%26+Conditioning+Website" alt="LAC Fitness Banner" />
</p>

<h1 align="center">LAC Fitness – Strength & Conditioning Website</h1>
<p align="center">Vue 3 • TypeScript • Vite • EmailJS • Hygraph CMS • Custom Domain</p>
<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-success?style=for-the-badge&color=22c55e" />
  <img src="https://img.shields.io/badge/Framework-Vue_3-42b883?style=for-the-badge&logo=vue.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Bundler-Vite-646cff?style=for-the-badge&logo=vite&logoColor=yellow" />
  <img src="https://img.shields.io/badge/Language-TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Forms-EmailJS+DOS?style=for-the-badge&color=bf0000" />
  <img src="https://img.shields.io/badge/Hosting-GitHub_Pages-000000?style=for-the-badge&logo=github&logoColor=white" />
</p>


LAC Fitness – Strength & Conditioning Website

A fully responsive fitness website built with Vue 3, Vite, and TypeScript, designed to promote personal training services, drive enquiries, and provide clear service information. Includes a secure contact form with reCAPTCHA, EmailJS integration, and Hygraph CMS for dynamic service content.

Live Site: https://lacfitness.com

Repository: (insert your GitHub URL)

✨ Key Features
Feature	Summary
Vue 3 + TypeScript	Modern component-driven architecture with typed props & interfaces
SEO + Metadata	Dynamic head tags, OpenGraph, custom titles per route, clean URL structure
Fully Accessible UI	Keyboard navigation, ARIA roles, focus control, skip links, contrast ratios
Secure Contact Form	EmailJS + reCAPTCHA v2, validation, sanitisation, error handling
Hygraph CMS	GraphQL-driven data for services with fallback when offline/not authorised
Responsive UI	Mobile-first, performance optimised, lazy assets
Reusable UI Components	Buttons, inputs, accordions, form groups, icons
Custom Domain + HTTPS	Full DNS configuration for lacfitness.com, SSL via GitHub Pages
🏗️ Tech Stack

Vue 3 (Composition API)

Vite (fast bundler & dev server)

TypeScript

Vue Router

EmailJS + Google reCAPTCHA v2

Hygraph (GraphQL CMS)

SCSS Styles

GitHub Pages Deployment

📂 Project Structure
fitnesssite/
├── public/
│   ├── site.webmanifest
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── globals.scss
│   ├── components/
│   │   ├── layout/        # Navbar | Footer
│   │   ├── sections/      # Hero, Summary, FAQs
│   │   └── ui/            # Reusable UI: Button, Input, Textarea
│   ├── router/
│   │   └── index.ts
│   ├── utils/
│   │   ├── graphql-utils.ts
│   │   └── emailjs-config.ts
│   ├── views/             # Home, About, Services, Contact, 404
│   ├── main.ts
│   └── App.vue
├── index.html
├── package.json
├── vite.config.ts
└── README.md

🔐 Environment Variables

Create a .env file in your project root:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

VITE_HYGRAPH_URL=https://your-hygraph-endpoint
VITE_HYGRAPH_TOKEN=your_token   # optional if using public schema

VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key


Never commit .env files — secrets belong in GitHub → Settings → Secrets → Actions.

🚀 Local Development
npm install
npm run dev

📦 Build & Deploy
npm run build


Your production code will be in the dist/ folder.

☁️ GitHub Pages Deployment (with custom domain)

Create .github/workflows/deploy.yml:

name: Deploy
on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run build
      - uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages

🌐 DNS Configuration (GoDaddy / Custom Domain)
Type	Name	Value
A	@	185.199.108.153
A	@	185.199.109.153
A	@	185.199.110.153
A	@	185.199.111.153
CNAME	www	<your-username>.github.io

After DNS propagates, enable HTTPS in GitHub Pages settings.

📬 Contact Form – Email Payload
{
  name: form.name,
  email: form.email,
  phone: form.phone,
  services: form.services.join(', '),
  message: form.message,
  reply_to: form.email,
  "g-recaptcha-response": token
}

🛡️ Accessibility & Security

Skip to main content link

aria-label, role, aria-controls, aria-selected across interactive UI

Form validation + reCAPTCHA bot protection

Focus states & reduced motion queries

No inline handlers / no dangerous innerHTML

📈 Future Additions

Client testimonials from CMS

Booking calendar integration (Calendly)

Full blog or exercise library

Lighthouse CI for automated testing

Progressive Web App (PWA) setup

📄 License

This project is proprietary and created for LAC Fitness.
Reproduction, redistribution, or resale is prohibited without permission.
