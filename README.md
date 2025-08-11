# Digital Spaniel

This is a React application built with Vite, styled with Tailwind CSS and DaisyUI.

## Technologies Used

*   [React](https://reactjs.org/)
*   [Vite](https://vitejs.dev/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [DaisyUI](https://daisyui.com/)
*   [ESLint](https://eslint.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/digital-spaniel.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run lint`

Lints the code using ESLint.

### `npm run preview`

Previews the production build locally.

## Project Structure

The main application logic is within the `src` directory.

```
src/
├── assets/
│   └── react.svg
├── Components/
│   └── Home/
│       ├── About.jsx
│       ├── Banner.jsx
│       ├── Capability.jsx
│       ├── CaseStudy.jsx
│       ├── Footer.jsx
│       ├── HomePage.jsx
│       ├── Navbar.jsx
│       └── Projects.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

The entry point of the application is `src/main.jsx`. The main App component is `src/App.jsx`, which renders the `HomePage`. The `HomePage` component is composed of smaller, reusable components found in `src/Components/Home/`.