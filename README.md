# MiniTube

MiniTube is a simplified YouTube-style frontend application built as a short engineering exercise. It focuses on UI composition, scalable project structure, and clean separation of concerns using static data instead of backend services.

The goal of this project is not feature completeness, but to demonstrate how a small frontend system can be structured in a maintainable and extensible way.

---

## Pages

- **Video Listing Page** – Displays a responsive grid of videos with thumbnails, titles, creator info, views, duration, and upload date.
- **Video Detail Page** – Shows a video player placeholder, metadata, creator information, and related videos.
- **Creator Profile Page** – Displays creator details and a list of uploaded videos.

---

## Tech Stack

- React 19
- Vite
- JavaScript (JSX)
- Static mock data (no backend/API layer)
- Plain CSS via `src/index.css` (kept intentionally simple for scope)

---

## Project Structure

The project follows a feature-oriented architecture:

- `components/` – Reusable UI components (layout, video, creator)
- `features/videos/` – Video-related pages and logic
- `features/creators/` – Creator-related pages and logic
- `data/mockData.js` – Static dataset representing videos and creators
- `utils/formatters.js` – Shared utility functions (e.g., views/date formatting)
- `app/router.jsx` – Lightweight routing setup without external router dependency

This structure was chosen to simulate how a real application could scale beyond a small exercise without introducing unnecessary complexity.

---

## UI Approach

The interface is intentionally modeled after modern video platforms:

- Sticky header navigation
- Responsive video grid layout
- Watch page with primary + secondary content layout
- Creator profile with grouped content sections
- Placeholder media elements to simulate real content without backend dependencies

The focus is on layout hierarchy, reuse of components, and consistency rather than pixel-perfect design replication.

---

## Run Locally

```bash
npm install
npm run dev
```
