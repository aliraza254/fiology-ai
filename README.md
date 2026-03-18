<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/804a5159-4a38-4727-832a-21c67c709fb6

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Design Prompt: Fiology AI - Next-Gen Intelligence Platform

### 1. Core Aesthetic & Theme
- **Vibe**: High-end, technical, and editorial. A "Mission Control" for AI data analytics.
- **Layout**: Split-screen hero section housed within a large, glassmorphism-style container (`max-w-7xl`).
- **Background**: Deep matte black (#000000) with a subtle 40px grid pattern. Floating mathematical and neural symbols (e.g., √, π, (12+12)) in JetBrains Mono font, gently animating with a low-opacity emerald glow.

### 2. Color Palette & Typography
- **Primary**: Emerald Green (#10B981) used for key accents, primary buttons, and the "Human Limits" text highlight.
- **Secondary**: Zinc/Neutral grays (#71717a, #27272a) for secondary text, borders, and UI chrome.
- **Typography**:
  - **Inter** (Sans-serif): Used for all UI elements, headings, and body text.
  - **JetBrains Mono** (Monospace): Used for background symbols and technical data labels to reinforce the AI theme.

### 3. Key Assets & Components
- **3D Scene**: An interactive Spline robot model (`kZDDjO5HuC9GJUM2`) positioned on the right side of the hero card, responding to mouse movements.
- **Spotlight Effect**: A dynamic, mouse-tracking radial gradient that provides a soft light source behind the content, creating depth.
- **Navbar**: Clean, minimalist top-bar with "FIOLOGY AI" text logo in emerald. Navigation links: `Models`, `Solutions`, `Data Hub`, `API`, `Pricing`.
- **Primary CTA**: "Start Analyzing" pill-shaped button with a high-intensity emerald glow (`shadow-[0_0_30px_rgba(16,185,129,0.3)]`) and a sliding white-skewed "shine" animation on hover.

### 4. Interactive Elements
- **Social Links**: Minimalist circular icons (Instagram, Twitter, Facebook, Youtube) in the bottom-left corner.
- **Scroll Indicator**: A vertical pill-shaped mouse icon with a bouncing emerald dot in the bottom-right corner, labeled "Scroll to explore".
- **Animations**: Smooth entrance transitions using Framer Motion, featuring y-axis slide-ups and opacity fades for all text blocks and buttons.

### 5. Technical Makeup
- **Framework**: Next.js 15 (App Router) with TypeScript.
- **Styling**: Tailwind CSS v4 with utility-first classes for glassmorphism (`backdrop-blur-sm`, `bg-black/40`, `border-white/10`).
- **Iconography**: Lucide-React for all functional and social icons.
