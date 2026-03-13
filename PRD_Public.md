# PRD — Public Reader Experience
# Unfilter Story — News Platform & Editorial Infrastructure

**Version:** 1.7  
**Date:** March 13, 2026  
**Status:** Feature Complete — Production Ready  
**Owner:** Product Engineering Team

---

## 1. Executive Summary
The **Unfilter Story Public Portal** is a sub-second performance delivery engine designed for tech-savvy readers. It focuses on high-readability typography, brutalist design principles, and absolute speed, stripping away the bloat of traditional news sites.

---

## 2. Target User: The Tech-Savvy Reader (Ananya)
*   **Needs**: Instant page loads, clean content hierarchy, and a mobile-optimized reading experience.
*   **Performance Goal**: Achieve a Google Lighthouse score of 95+ for Performance and SEO.

---

## 3. Feature Specifications

### 3.1 Presentation Layer
*   **Home Stream**: A high-speed feed of stories featuring compressed header images and high-contrast metadata.
*   **Technical Typography**: Primary usage of **IBM Plex Sans** for long-form reading and **IBM Plex Mono** for technical data.
*   **Media Display**: Intelligent aspect-ratio enforcement (21:9) for header images to maintain grid consistency.
*   **Fallback Integrity**: Dynamic placeholders for historical articles or missing media to prevent layout shifts.

### 3.2 Performance & SEO Infrastructure
*   **Zero-JS Baseline**: Astro 6 baseline with minimal client-side JavaScript for maximum speed.
*   **Semantic SEO**: Proper HTML5 heading hierarchies and automated JSON-LD/Metadata generation.
*   **Responsive Precision**: Liquid layouts that adapt perfectly from 4K editorial monitors to mobile screens.

### 3.3 Routing & Discovery
*   **Category Navigation**: Dedicated feeds for technical categories (e.g., Startups, Tech, Policy).
*   **SEO Permalinks**: Clean, keyword-optimized URLs generated from article slugs.

---

## 4. Technical Requirements
*   **Framework**: Astro 6 (Static Generation / Edge Ready).
*   **Styling**: Vanilla CSS with IBM Design tokens.
*   **Deployment Target**: Sub-100ms LCP worldwide via Edge Rendering.

---
*Maintained by Antigravity AI — Public PRD v1.7*
