# Birthday Site

## Overview
This project is a simple web application built using Lit and Vite. It showcases a custom web component that displays a counter and links to the Vite and Lit documentation.

## Project Structure
```
birthday-site
├── index.html          # Main HTML entry point
├── src
│   ├── main.ts        # Mounts the Lit component
│   ├── my-element.ts   # Defines the MyElement Lit component
│   ├── styles
│   │   └── global.css  # Global styles for the application
│   └── assets
│       └── (SVG files) # SVG files used in the application
├── package.json        # npm configuration file
├── tsconfig.json       # TypeScript configuration file
├── vite.config.ts      # Vite configuration file
├── .gitignore          # Files to ignore in version control
└── README.md           # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd birthday-site
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage
- Click on the Vite and Lit logos to learn more about these technologies.
- Use the button to increment the counter displayed on the page.

## License
This project is licensed under the MIT License.