# Digital Spaniel Agency

## Project Overview
This is a responsive homepage for the Digital Spaniel Agency, built with React and modern frontend technologies. The project implements the design from the provided Adobe XD specification with interactive elements and responsive behavior.

## Live Demo
You can view the live demo at:  
[https://digital-spaniel-pen.netlify.app/](https://digital-spaniel-pen.netlify.app/)

## Features
- **Sticky Navigation:** Header hides on scroll down and reappears on scroll up  
- **Responsive Menu:** Full desktop menu collapses to hamburger menu on mobile/tablet  
- **Interactive Elements:**  
  - Hover animations for links and buttons  
  - Tabbed project slider with custom animations  
  - Case studies slider with active state  
  - Masonry gallery layout  
  - Testimonial slider with navigation controls  

## Modern Tech Stack
- React 19 with Vite  
- TypeScript (to be implemented)  
- Redux Toolkit for state management  
- TailwindCSS with DaisyUI for styling  

## Technologies Used
- **Frontend:** React 19, React Router  
- **State Management:** Redux Toolkit  
- **Styling:** TailwindCSS, DaisyUI  
- **Build Tool:** Vite  
- **Linting:** ESLint  
- **Animation:** React Spring (to be implemented)  
- **Sliders:** Swiper.js  

## Installation

Clone the repository:

git clone https://github.com/Arjon200141/digital-spaniel/
cd digital-spaniel
npm install
npm run dev
npm run build


digital-spaniel/
├── public/               
├── src/
│   ├── assets/           
│   ├── components/       
│   ├── features/         
│   ├── hooks/            
│   ├── pages/            
│   ├── store/           
│   ├── types/            
│   ├── utils/          
│   ├── App.tsx           
│   └── main.tsx        
├── .eslintrc.cjs        
├── postcss.config.js     
├── tailwind.config.js   
├── tsconfig.json         
└── vite.config.ts     

## State Management
The project uses Redux Toolkit for global state management with the following features:

- Testimonials data fetching and storage
- Navigation state for mobile menu
- Active tab/slide tracking for various sections


## Responsive Design
The application is fully responsive with the following breakpoints:

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`
