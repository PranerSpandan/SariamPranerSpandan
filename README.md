# Sariam Praner Spandan 🌿

[![Deploy static content to Pages](https://github.com/PranerSpandan/SariamPranerSpandan/actions/workflows/deploy.yml/badge.svg)](https://github.com/PranerSpandan/SariamPranerSpandan/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-256c2c?style=flat&logo=github)](https://pranerspandan.github.io/SariamPranerSpandan/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

**Sariam Praner Spandan** is a dedicated Non-Governmental Organization (NGO) based in Jalpaiguri, West Bengal, India. We work towards nature conservation, tree plantation, biodiversity preservation, and fostering environmental awareness among school children and local communities.

This repository contains the source code for the official web platform of **Sariam Praner Spandan**, built with a modern, responsive single-page architecture and tailored with our **Verdant Heritage** design system.

---

## ✨ Features

- 🌿 **Organic & Responsive UI/UX**: Designed with a custom *Verdant Heritage* color palette, fluid typography, smooth micro-animations, and glassmorphism headers.
- 📱 **Cross-Platform Compatibility**: Fully responsive design optimized for mobile, tablet, and desktop devices.
- 📊 **Real-time Live Visitor Counter**: Built-in session-aware site visitor counter using `CounterAPI.dev`.
- 🔍 **SEO & Search Console Ready**: Includes verified Google Search Console metadata, structured XML sitemap (`/sitemap.xml`), and crawling rules (`/robots.txt`).
- ⚡ **Lightning Fast Performance**: Powered by Vite and React 18 for high-speed client-side rendering.
- 🚀 **Automated CI/CD**: Seamless automated deployments to GitHub Pages using GitHub Actions (`.github/workflows/deploy.yml`).

---

## 🛠️ Tech Stack

- **Frontend Core**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/) (HashRouter for single-page GitHub Pages compatibility)
- **Styling**: Vanilla CSS3 + Styled JSX, Google Fonts (*Plus Jakarta Sans* & *Inter*)
- **Metrics API**: [CounterAPI.dev](https://counterapi.dev/)
- **Deployment**: GitHub Pages via GitHub Actions workflow (Node.js 22 LTS)

---

## 📁 Project Structure

```text
SariamPranerSpandan/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for automated deployment
├── public/
│   ├── gallery.json            # Dynamic gallery data
│   ├── team.json               # Organization team details
│   ├── robots.txt              # Search engine crawler directives
│   ├── sitemap.xml             # XML Sitemap for search indexing
│   └── .nojekyll               # Bypasses Jekyll processing on GitHub Pages
├── src/
│   ├── assets/                 # Images, icons, and branding media
│   ├── Components/             # Reusable UI components (NavBar, BottomBar, VisitorCounter, etc.)
│   ├── Pages/                  # Page views (Home, About, Work, Join, Contact, Support)
│   ├── App.css                 # Component-specific styles
│   ├── App.jsx                 # Main layout and route definitions
│   ├── index.css               # Design system tokens, variables, and global styles
│   └── main.jsx                # Application entry point
├── index.html                  # Root HTML template with GSC verification meta tags
├── package.json                # NPM dependencies and scripts
└── vite.config.js              # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher

### Local Installation & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PranerSpandan/SariamPranerSpandan.git
   cd SariamPranerSpandan
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` to view the application live.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server with HMR. |
| `npm run build` | Compiles and builds the production bundle in `dist/`. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs ESLint to check for code formatting and quality issues. |
| `npm run deploy` | Deploys the `build` directory directly using `gh-pages`. |

---

## 🌐 SEO & Search Indexing

- **Google Search Console**: Ownership is verified via the `<meta name="google-site-verification" ... />` tag in `index.html`.
- **Google Analytics**: Integrated using `gtag.js` with property ID `G-EJT73Y122B` in `index.html` to monitor website traffic and user engagement.
- **Sitemap**: Available at `https://pranerspandan.github.io/SariamPranerSpandan/sitemap.xml`.
- **Robots.txt**: Directives hosted at `https://pranerspandan.github.io/SariamPranerSpandan/robots.txt`.

---

## 🚀 Deployment

The site is automatically built and published to **GitHub Pages** whenever changes are pushed to the `main` branch via the `.github/workflows/deploy.yml` GitHub Action.

To ensure proper deployment:
1. Go to **Settings > Pages** in the GitHub repository.
2. Under **Build and deployment > Source**, select **GitHub Actions**.

---

## 📬 Contact & Connect

- **Main Office**: Sariam, Debithakurbari, Jalpaiguri, West Bengal, India - 735133
- **Email**: [pranerspandan@gmail.com](mailto:pranerspandan@gmail.com)
- **Phone**: +91 8436692246 / +91 7584828237
- **Socials**: [Instagram](https://instagram.com/pranerspandan) | [Facebook](https://facebook.com/profile.php?id=100076105804159) | [YouTube](https://www.youtube.com/@pranerspandan)

---

© 2026 **Sariam Praner Spandan**. All Rights Reserved.
