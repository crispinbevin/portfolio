# Crispin Jithin Bevin – Portfolio

Personal portfolio built with React and styled using Tailwind CSS. It’s a clean, responsive single-page site that introduces who I am, what I work on, and how to reach me.

Check it out at https://crispinbevin.vercel.app/

## Tech Stack

- **React** – component-based architecture
- **Vite** – fast bundler and dev environment
- **Tailwind CSS** – utility-first styling
- **React Icons** – icon library
- **PDF Import** – resume asset imported and linked

## Features

- Responsive navbar that changes on scroll
- Smooth scroll navigation using `scrollIntoView`
- Hero section with intro, name, and short bio
- Skills section covering Machine Learning, Web Development, and Data Science
- Icons to visually represent toolset (e.g., React, TensorFlow, Python)
- Footer with links to GitHub and LinkedIn

## Concepts Used

- React Hooks: `useState`, `useEffect` for scroll detection and UI state
- Tailwind’s responsive design classes (`max-sm`, `xl`, `p-*`, etc.)
- Asset import and handling with Vite
- Modular component structure (`HoverLink` as a reusable UI element)

## Getting Started

Clone the repository and run the dev server:

```bash
git clone https://github.com/crispinbevin/portfolio.git
cd portfolio
npm install
npm run dev
