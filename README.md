# Going Ductless Ltd. Website

📌 [goingductless.ca](https://goingductless.ca)

Commercial HVAC website built with React, TypeScript, and Vite.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **GitHub Pages** for hosting

## Project Structure

```
├── public/              # Static assets (images, logos, sitemap, robots.txt)
├── src/
│   ├── components/      # Reusable components (Navigation, Footer, Gallery, SEO, etc.)
│   ├── pages/          # Page components (Home, About, Contact)
│   ├── App.tsx         # Main app component with routing
│   └── main.tsx        # Entry point
├── .github/workflows/  # GitHub Actions for auto-deployment
└── dist/               # Production build output (generated)
```

## Development

### Prerequisites

- Node.js 22+ (required for dependencies)
- npm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Access the site at `http://localhost:5173`

To expose on network (for testing on other devices):

```bash
npm run dev --host
```

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions whenever you push to the `master` branch.

### Manual Deployment

To manually deploy to GitHub Pages:

```bash
npm run deploy
```

This builds the project and pushes to the `gh-pages` branch.

### Custom Domain

The site uses a custom domain (`goingductless.ca`) configured via:
- `public/CNAME` file
- DNS A records pointing to GitHub Pages IPs
- CNAME record for www subdomain

## SEO Features

- Dynamic meta tags per page (via SEO component)
- Structured data (JSON-LD) for local business
- Sitemap (`public/sitemap.xml`)
- Robots.txt
- Open Graph and Twitter Card tags
- Optimized for searches: "going ductless", "toronto commercial hvac", "gta dx piping contractors"

## License

© 2025 Going Ductless Ltd. All rights reserved.

