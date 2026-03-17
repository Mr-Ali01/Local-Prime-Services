# Prime Local Services - Directory Platform

## Overview
Prime Local is a comprehensive, static HTML, CSS, JS front-end template for a local service directory website. The platform is designed to connect users with trusted, verified local experts (such as plumbers, cleaners, appliance repairers, and personal service providers) by offering advanced search, directory listings, public profiles, and booking/contact functionalities.

## 🚀 Key Features
- **Dynamic Homepage:** Engaging hero section with simulated search, categorized service grids, and featured top-tier business listings.
- **Service Listings & Search:** A dedicated search results page (`BDGS-T13-PR-mem-search.html`) with grid/list view toggles and advanced filter sidebars.
- **Public Business Profiles:** Detailed individual member pages (`BDGS-T13-PR-mem-profile.html`) showcasing ratings, services, and direct contact options.
- **Conversion & Onboarding:** Custom forms for lead generation ("Get Matched"), user authentication, and business onboarding ("Get Listed").
- **Responsive Design:** Fully mobile-friendly layout ensuring a consistent experience across viewing devices.
- **Modern UI Elements:** Sticky navigation bars, scroll reveal animations, and SweetAlert-powered interactive popups.

## 🛠️ Tech Stack & Architecture
- **Structure:** Semantic HTML5
- **Styling:** CSS3 & Bootstrap 3.4.1 (Foundation grid & components)
- **Icons:** Font Awesome 4.7.0
- **Interactivity:** 
  - jQuery 3.6.0 (DOM manipulation and scroll events)
  - Select2 (Enhanced dropdowns)
  - SweetAlert 1.1.3 (Modern popup alerts)
- **Design System:** Custom CSS block embedded in pages, utilizing CSS Variables (`:root`) prefixed with `--bdgs-t13-pr-` to prevent design conflicts.

## 📂 Project File Structure

**Core Pages:**
- `index.html` - Main landing page with hero search, categories, and featured experts.
- `BDGS-T13-PR-about.html` - Information about the Prime Local platform.
- `BDGS-T13-PR-contact.html` - General contact form page.
- `BDGS-T13-PR-faq.html` - Frequently Asked Questions.
- `BDGS-T13-PR-how-work.html` - Details on platform verification and the booking process.

**Directory & Provider Pages:**
- `BDGS-T13-PR-mem-search.html` - Core directory search results with filtering.
- `BDGS-T13-PR-mem-profile.html` - Public profile view for individual service providers.
- `BDGS-T13-PR-core-p1.html`, `BDGS-T13-PR-core-p2.html` - Service exploration indexes.
- `BDGS-T13-PR-core-d1.html`, `BDGS-T13-PR-core-d2.html` - Member dashboard/detail views.

**User Journey & Onboarding Pages:**
- `BDGS-T13-PR-join.html` - Pricing and signup page for businesses.
- `BDGS-T13-PR-get-match.html` - Lead generation form for users to get matched with experts.
- `BDGS-T13-PR-login-signup.html` - User and business authentication portal.

**Content & Marketing:**
- `BDGS-T13-PR-blog-read.html` - Main blog index page.
- `BDGS-T13-PR-blog-det.html` - Individual blog post layout.
- `BDGS-T13-PR-testimonial.html` - Dedicated page for customer reviews and success stories.

## 💻 How to Use
Since this is a static HTML template, no build process or server backend is required to view the UI.
1. Clone or download the repository.
2. Navigate to the project folder.
3. Open `index.html` (or any other HTML file) directly in any modern web browser (Chrome, Firefox, Safari, Edge).

## 🔮 Future Enhancements (Potential Migration)
- Extract embedded `<style>` blocks into a centralized `style.css` file.
- Convert static HTML components into reusable React/Next.js components.
- Integrate with a backend framework (like Brilliant Directories or a custom PHP/Node.js backend) to handle dynamic data and user sessions.
