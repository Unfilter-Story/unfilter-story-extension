# Design Guidelines — IBM Technical Precision
# Unfilter Story Branding & UI/UX Standards

**Version:** 1.0  
**Status:** Active Design System  
**Framework:** Brutalist Grid Design

---

## 1. Design Vision
The "Unfilter Story" aesthetic is rooted in **Technical Precision & Grid Brutalism**. Inspired by the IBM design language, the platform avoids soft gradients and shadows in favor of sharp lines, high contrast, and structural transparency.

---

## 2. Core Color Palette
| Token | Hex Code | Usage |
| :--- | :--- | :--- |
| **Primary Black** | `#161616` | Main backgrounds and primary text |
| **Neutral Grey** | `#262626` | Card backgrounds and sidebars |
| **Grid Line** | `IBM Gray 80` | Consistent 1px borders across all elements |
| **Accent Blue** | `#0F62FE` | Links and primary interactive elements |
| **Alert Red** | `#E94560` | Mandatory validation, unpublish actions, and error states |

---

## 3. Typography Standards
The system uses the **IBM Plex** family exclusively:
*   **IBM Plex Sans**: Used for headlines and main content reading.
*   **IBM Plex Mono**: Used for metadata (date, size, author) and technical labels.
*   **Weights**: Heavy use of **Bold (700)** and **Black (900)** for headings; **Light/Regular (300/400)** for content.

---

## 4. Component Guidelines

### 4.1 The Grid System
*   **Border Enclosure**: Every container (sidebar, article card, editor) must be enclosed in a **1px solid border**. No soft borders or rounded corners unless explicitly specified (max 8px for internal elements).
*   **Spacing**: Strict padding intervals of 16px (1rem) or 24px (1.5rem).

### 4.2 Interactive Elements
*   **Glassmorphism**: Selective use of high-blur (20px+) backdrop filters for toolbars and menus to create depth without visual noise.
*   **States**: 
    *   **Hover**: Scale transformation (105%) or brightness increase.
    *   **Active**: Slight scale down (95%).
    *   **Transition**: 300-500ms ease-in-out for all state changes.

### 4.3 Media Assets
*   **Header Ratios**: 21:9 or 16:9 aspect ratios.
*   **Metadata Overlays**: 20% translucency black overlays with IBM Plex Mono text for asset details in the Media Library.

---

## 5. Visual Consistency Check
1.  Is it enclosed in a 1px border?
2.  Does it use IBM Plex Mono for technical data?
3.  Is the background `#161616` or `#262626`?
4.  Are the lines sharp and precision-aligned?

---
*Maintained by Antigravity AI — Design System v1.0*
