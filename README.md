# UnfilterStory

Welcome to **UnfilterStory**, a modern, high-density media and editorial platform dedicated to startup stories, funding rounds, AI innovations, and exclusive interviews.

This platform is built with a focus on premium aesthetics, seamless user experience, and a performant architecture, utilizing a decoupled, modular component structure with native web technologies.

## 🚀 Features

- **High-Density Editorial Layouts**: Enterprise-grade news hub aesthetics with a strong "Red + Black" visual identity.
- **Dynamic Content Sections**: Features dedicated pages for Startup Stories (`stories.html`), Funding Updates (`funding.html`), News (`news.html`), and AI Innovations (`ai-innovation.html`).
- **Modular Architecture**: Utilizes vanilla JavaScript for dynamic DOM injection to load global components like headers and footers across the ecosystem seamlessly.
- **Engaging UI Components**: 
  - Premium Editorial Slider Hero component with responsive grid-based layouts.
  - Continuous CSS marquee loop for "Latest Funding Rounds".
  - Interactive media matrices and enterprise-grade footers.

## 🛠 Tech Stack

- **HTML5**: Semantic and accessible markup.
- **CSS3 (Vanilla)**: Custom global design system, CSS tokens, and modern layouts (Flexbox/Grid) without relying on external frameworks.
- **JavaScript (Vanilla)**: DOM manipulation, component injection (`AppHeader.js`), state management, and interactive components (`slider.js`, `feed.js`).

## 📁 Project Structure

```
unfilterstory/
├── css/                  # Global styles, tokens, and component-specific CSS (e.g., slider.css)
├── js/                   # Vanilla JS logic, component injection, and theme handlers
│   ├── components/       # Reusable UI components (e.g., AppHeader.js)
│   ├── feed.js           # Dynamic feed handling
│   └── theme.js          # Theme toggling and state
├── index.html            # Main homepage
├── about.html            # About the platform
├── ai-innovation.html    # AI news and features
├── funding.html          # Latest startup funding rounds
├── interviews.html       # Exclusive founder interviews
├── news.html             # High-density news feed
└── stories.html          # In-depth startup stories
```

## 💻 Running Locally

Since this is a static frontend project built with vanilla web technologies, there are no complex build steps required.

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd unfilterstory
   ```

2. **Serve the project**:
   - You can simply double-click `index.html` to view it in your browser.
   - For the best experience (especially for resolving CORS issues with local JS module imports), use a local development server. If you have VS Code, the **Live Server** extension is recommended.
   - Alternatively, using Python or Node.js:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if http-server is installed)
     npx http-server
     ```
   - Navigate to `http://localhost:8000` in your browser.

## 🎨 Design System

UnfilterStory employs a strict, native CSS architecture for its design system. All styling is governed by global CSS tokens ensuring a consistent, premium editorial feel across both desktop and mobile devices.

---
*Developed with a focus on performant, native web standards.*
