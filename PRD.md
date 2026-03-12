# Product Requirements Document (PRD) — v1.5
# Unfilter Story — News Platform & Support Infrastructure

**Version:** 1.5 (Consolidated)  
**Date:** March 12, 2026  
**Status:** Updated — Reflecting Implementation State  
**Owner:** Product Team

---

## 1. Executive Summary

**Unfilter Story** has evolved from a standard news CMS into a premium, design-driven media platform. The product now integrates two core pillars:
1.  **High-Performance News Portal**: Built with Astro 5 and IBM Design principles for maximum readability and speed.
2.  **Advanced Editorial CMS**: Featuring a state-of-the-art TipTap editor with AI assistance and grammar checking.
3.  **Algo Support Module (TSoftware)**: A modular chat system for temporary, invite-only support rooms between Brokers, Algo Providers, and Clients.

---

## 2. IBM Branding & Design System

The platform now strictly adheres to **IBM Brand Guidelines**, focusing on "Technical Precision & Grid Brutalism."

### 2.1 Core Visual Language
*   **Typography**: 
    *   Primary: **IBM Plex Sans** (for UI and reading).
    *   Technical/Data: **IBM Plex Mono** (for metadata, counts, and code).
*   **Color Palette**:
    *   Primary Background: IBM Gray 100 (#161616) / White (#FFFFFF).
    *   UI Surface: IBM Gray 90 (#262626).
    *   Accent: IBM Blue 60 (#0f62fe) and Unfilter Red (#E94560).
*   **Logo**: Implementation of the **IBM 8-bar logo** in headers and branding zones.
*   **Layout**: Heavy use of grid lines, brutalist borders (1px solid IBM Gray 80), and clear technical indicators.

---

## 3. Feature Specifications — CMS Article Editor (Refined)

The editor has been upgraded to a "Pro" writing environment, moving beyond standard WYSIWYG.

### 3.1 Advanced TipTap Implementation
*   **Floating Bubble Menu**: Context-aware formatting menu appearing on text selection.
*   **Slash Command Menu (`/`)**: Quick-insertion menu for Headings, Lists, Images, and Tables.
*   **Grammar Checker (Drafting Assistant)**: 
    *   Inline wavy red underlining for common grammatical errors or stylistic improvements.
    *   Hover-to-fix suggestions (one-click replacement).
*   **AI Writing Assistant**:
    *   **Tone Adjustment**: Highlight text to rewrite in *Professional, Casual, Persuasive, or Concise* tones.
    *   **Generation**: AI-powered drafting based on headlines or bullet points.

### 3.2 Media & Layout Tools
*   **Custom Image Node**: Supports inline captions, credit fields, and alignment (Left/Center/Right).
*   **Drag-and-Drop / Paste**: Direct image insertion from clipboard or local files.
*   **Font Controls**: Granular Font Size (px) and Font Family selection within the toolbar.
*   **Sticky Premium Toolbar**: Glassmorphism effect toolbar that follows the scroll, providing constant access to formatting.
*   **Word & Character Counters**: Real-time technical counters (IBM Plex Mono) at the bottom of the editor.

---

## 4. Feature Specifications — Room Management (Support Platform)

A dedicated module for managing temporary Algo Support rooms.

### 4.1 Temporary Support Rooms
*   **Room Creation**: Admins create rooms bound to a specific **Client Code**.
*   **Invite URL System**:
    *   **Client Invite**: Secure, cryptographically unique link requiring Name, Mobile, Email, and Client Code to join.
    *   **Algo Provider Invite**: Link requiring official agent email validation to join.
*   **Adjustable Expiry**:
    *   Admin defines room duration (default 15 days).
    *   Admin can extend expiry at any time.
    *   **Automatic Archival**: Upon expiry, rooms become read-only.
    *   **Hard Deletion**: Archived rooms are purged after 30 days to ensure data privacy.

### 4.2 Chat-to-Ticket Flow
*   Rooms start as plain chat threads for low-friction support.
*   Admin can "Convert to Ticket" to track formal issues with Priority, Category, and Assigned Agent.
*   **Real-time Communication**: Powered by Socket.IO for sub-200ms message latency.

---

## 5. Technical Architecture (Updated)

### 5.1 Technology Stack
*   **Frontend (Public)**: Astro 5 (Islands Architecture), Tailwind CSS 4.
*   **Frontend (CMS)**: React 18, Vite, TipTap 2.0, Lucide Icons.
*   **Backend**: Fastify (Node.js), Prisma ORM.
*   **Database**: PostgreSQL 16 (Main Store), Redis (Session & Trending).
*   **Real-time**: Socket.IO (for support chat).

### 5.2 Performance Targets
*   **LCP (Largest Contentful Paint)**: < 1.2s on desktop.
*   **Editor Boot Time**: < 500ms.
*   **Message Latency**: < 200ms.

---

## 6. Project Directory Structure

```text
unfilter-story/
├── api-backend/           # Fastify API (Prisma/PostgreSQL)
├── cms-admin/             # React SPA (The "Pro" Editor & Dashboard)
├── public-site/           # Astro 5 News Portal
├── docker-compose.yml     # Infrastructure (PostgreSQL, Redis)
└── PRD.md                 # This Document
```

---

## 7. Future Roadmap (v2.0)

*   **RSS Aggregator**: Native feed parsing from PTI, Reuters, and TOI.
*   **Newsletter Engine**: Integrated campaign builder and subscriber management.
*   **Native Apps**: React Native wrappers for iOS and Android.
*   **Paywall**: Razorpay integration for premium subscriber-only content.

---
*Created by Antigravity AI — March 12, 2026*
