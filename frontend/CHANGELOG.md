# 📌 CHANGELOG
All notable changes to this project will be documented here.

## [Unreleased] – 2026-01-04

### Added
- **Theme system**
  - Introduced a global `useTheme()` composable to manage light/dark mode state.
  - Added an accessible theme toggle component using `role="switch"` semantics.
  - Enabled theme persistence via `localStorage`.
  - Implemented theme-aware hero background image switching.

### Changed
- **FAQ architecture**
  - Reworked FAQs to be fully driven by constants and mapped through a reusable accordion component.
  - Standardised FAQ categories to:
    - The Basics
    - Fine Print
    - Personal Touch
  - Improved accessibility and semantic structure of FAQ accordion interactions.

### Deferred
- Inline link rendering inside FAQ answers (to be handled via an alternative UI pattern).

---

## [1.0.1] – 2026-01-02

### Fixed
- Fixed layout and styling issues affecting page presentation after deployment.

---

## [1.0.0] – Initial Production Launch (2026-01-01)
### Added
- Full Vue 3 + TypeScript rebuild from original Next.js version
- Mobile-first responsive UI & accessible class naming
- SEO metadata per route (OpenGraph + structured titles)
- Dynamic services via Hygraph GraphQL API
- Secure contact form w/ EmailJS + reCAPTCHA v2
- Custom domain connected + SSL via GitHub Pages
- Reusable UI components (Button, Input, Checkbox groups)

### Fixed
- Services tab rendering issue on Safari / iOS
- Invalid attribute issues (`rows?` → `rows`)
- Router history fallback for GitHub Pages (404 routing fix)

### Known / Upcoming
- Styling refinement for service bullet spacing
- Additional queries for Testimonials + Blog
- CMS authentication roles for public queries

---

## [0.9.0] – Pre-Launch
- Contact form rebuilt with validation + sanitisation
- Removed inline styles, corrected aria attributes
- Created UI folder structure for scalable components

---

