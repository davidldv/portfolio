# Portfolio Theme System v0.2

## Scope

This document defines the initial design theme system for the portfolio built with:

- Astro 6
- React Islands
- React Three Fiber
- Tailwind CSS v4

Primary goals:

- Distinct dual light and dark themes
- Smooth theme switching with View Transitions
- Scroll-morphing 3D neural network that stays readable in both themes
- Fully animated timeline with clear visual hierarchy

## Art Direction

Design language: editorial tech with warm light mode and cinematic dark mode.

Visual intent:

- High contrast typography and strong accent colors
- Soft atmospheric backgrounds, not flat single-color planes
- Data-viz inspired highlights for network nodes and timeline markers
- Motion that feels intentional and restrained, not noisy

## Theme Names

- Light: Atlas Day
- Dark: Atlas Night

## Typography Tokens

Display font: "Unbounded", "Avenir Next", "Segoe UI", sans-serif

Body font: "Instrument Sans", "Segoe UI", sans-serif

Mono font: "IBM Plex Mono", "Consolas", monospace

Type scale:

- --text-hero: clamp(2.75rem, 6vw, 6.5rem)
- --text-h1: clamp(2rem, 4.4vw, 4rem)
- --text-h2: clamp(1.5rem, 3vw, 2.75rem)
- --text-h3: clamp(1.2rem, 2vw, 1.9rem)
- --text-body-lg: 1.125rem
- --text-body: 1rem
- --text-body-sm: 0.9rem
- --text-label: 0.78rem

## Core Color Tokens

Use :root for light mode and [data-theme="dark"] for dark mode.

### Light (Atlas Day)

- --bg-canvas: #f6f3eb
- --bg-surface-1: #fffdf8
- --bg-surface-2: #ebe6da
- --bg-glass: rgba(255, 253, 248, 0.64)
- --text-primary: #11131a
- --text-secondary: #3f4654
- --text-muted: #5e6574
- --border-soft: #d8d8dc
- --border-strong: #b6bcc7
- --accent-primary: #0a7b70
- --accent-secondary: #ff6445
- --accent-tertiary: #2857e8
- --focus-ring: #2f7cf7
- --shadow-color: rgba(21, 26, 37, 0.16)
- --noise-opacity: 0.05

### Dark (Atlas Night)

- --bg-canvas: #0c1016
- --bg-surface-1: #121924
- --bg-surface-2: #1a2331
- --bg-glass: rgba(18, 25, 36, 0.62)
- --text-primary: #f4f8ff
- --text-secondary: #d3dbe8
- --text-muted: #99a8bf
- --border-soft: #2a3547
- --border-strong: #3c4b61
- --accent-primary: #36dac2
- --accent-secondary: #ff8d69
- --accent-tertiary: #84a6ff
- --focus-ring: #76abff
- --shadow-color: rgba(0, 0, 0, 0.55)
- --noise-opacity: 0.08

## 3D Neural Network Tokens

These values control the React Three Fiber scene and update on theme change.

### Light

- --network-bg-start: #efe7d6
- --network-bg-end: #f7f4ee
- --network-node-core: #0c7a70
- --network-node-rim: #4bc2b5
- --network-edge: #2b57d4
- --network-hotspot: #ff6445
- --network-fog: #f4efe4

### Dark

- --network-bg-start: #0a1118
- --network-bg-end: #111c28
- --network-node-core: #38d9c2
- --network-node-rim: #7ef0de
- --network-edge: #85a9ff
- --network-hotspot: #ff9a75
- --network-fog: #0d141e

## Timeline Tokens

Timeline animation should be expressive but readable at 375px.

- --timeline-track-start-light: #0a7b70
- --timeline-track-end-light: #2857e8
- --timeline-track-start-dark: #36dac2
- --timeline-track-end-dark: #84a6ff
- --timeline-node-idle-light: #d5d6da
- --timeline-node-idle-dark: #3a465a
- --timeline-node-active-light: #ff6445
- --timeline-node-active-dark: #ff8d69
- --timeline-node-size: 0.95rem
- --timeline-node-active-size: 1.2rem
- --timeline-line-width: 2px
- --timeline-glow-light: 0 0 0 8px rgba(255, 100, 69, 0.2)
- --timeline-glow-dark: 0 0 0 10px rgba(255, 141, 105, 0.23)

## Motion Tokens

- --duration-instant: 110ms
- --duration-fast: 180ms
- --duration-base: 280ms
- --duration-slow: 460ms
- --duration-theme: 520ms
- --ease-standard: cubic-bezier(0.22, 0.61, 0.36, 1)
- --ease-emphasis: cubic-bezier(0.19, 1, 0.22, 1)
- --ease-exit: cubic-bezier(0.55, 0, 1, 0.45)

## View Transition Direction

Theme switch should animate color and atmospheric layers, not layout.

Recommended baseline:

- Use view-transition-name: app-root on the main wrapper
- Animate opacity and mild blur only for old/new snapshots
- Keep transform minimal to avoid text jitter
- Respect reduced motion by disabling blur and shortening durations

## Tailwind v4 Mapping Draft

Semantic aliases are exposed as CSS variables for utility usage:

- --color-canvas
- --color-surface-1
- --color-surface-2
- --color-text
- --color-text-secondary
- --color-border
- --color-accent
- --color-accent-alt
- --color-accent-cool

## Accessibility Baseline

- Maintain minimum contrast ratio 4.5:1 for body text
- Keep timeline states distinguishable by color plus scale and shape
- Ensure focus rings are always visible in both themes
- Respect prefers-reduced-motion for timeline and network pulse animations

## Implementation Status

Completed:

1. Created src/styles/theme.css with tokens, motion, and component styles.
2. Added persisted theme state on html[data-theme] and a toggle UI.
3. Wired Astro View Transitions for route and theme continuity.
4. Exposed theme tokens to React Three Fiber material and fog colors.
5. Built a fully animated timeline using scroll-based progress and reveal states.

Pending improvement:

1. Code-split the 3D island bundle to reduce large chunk warnings.
