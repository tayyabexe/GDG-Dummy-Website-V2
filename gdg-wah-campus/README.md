# GDG Wah Campus Website

This is a React + Vite project styled with Tailwind CSS and animated with Framer Motion.

## Prerequisites

You need to have **Node.js** installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

## Setup Instructions

1.  **Open a Terminal** (Command Prompt or PowerShell) and navigate to the project folder:
    ```bash
    cd "c:/Users/tayya/Desktop/GDG Website/gdg-wah-campus"
    ```

2.  **Install Dependencies**:
    Run the following command to install all necessary libraries (React, Tailwind, Framer Motion, etc.):
    ```bash
    npm install
    ```

3.  **Start the Development Server**:
    To see the website in action, run:
    ```bash
    npm run dev
    ```
    Then open the link shown in the terminal (usually `http://localhost:5173`) in your browser.

## Features

-   **Modern UI**: Vibrant Google colors with Dark/Light mode toggle (mock).
-   **Animations**: Smooth scroll revelations and hover effects using Framer Motion.
-   **Pages**:
    -   **Home**: Hero section, typing effect, leadership cards.
    -   **Events**: Filterable event cards with RSVP simulation.
    -   **Team**: Interactive 3D flip cards.
    -   **Resources**: Tabbed library interface.
    -   **Gallery**: Masonry grid with lightbox.
    -   **Contact**: Functional form mock and map embed.
-   **Chat Widget**: Floating AI assistant mock.

## Project Structure

-   `src/components`: Reusable UI components (Navbar, Layout, EventCard, ChatWidget).
-   `src/pages`: Individual page components.
-   `src/data`: Mock data for the application.
