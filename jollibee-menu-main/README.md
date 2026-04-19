# Jollibee Menu Website

A modern, responsive menu website for Jollibee built with React, TypeScript, Vite, and Express.

## Features

- Interactive menu browsing
- Shopping cart functionality
- Responsive design with Tailwind CSS
- Server-side rendering with Express
- Full-stack application with client and server

## Prerequisites

- Node.js (v18 or higher)
- pnpm (v10.4.1 or higher)

## Installation

```bash
# Install dependencies
pnpm install
```

## Development

```bash
# Start development server with hot reload
pnpm run dev
```

The development server will run on `http://localhost:5173`

## Building

```bash
# Build for production
pnpm run build

# Build full stack (client + server)
pnpm run build:full

# Preview production build
pnpm run preview
```

## Type Checking

```bash
# Check TypeScript types
pnpm run check
```

## Code Formatting

```bash
# Format code with Prettier
pnpm run format
```

## Project Structure

```
jollibee-menu-main/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom hooks
│   │   ├── data/          # Data files
│   │   ├── lib/           # Utility functions
│   │   └── main.tsx       # React entry point
│   └── index.html         # HTML template
├── server/                 # Express backend
│   └── index.ts           # Server entry point
├── vite.config.ts         # Vite configuration
├── package.json           # Project dependencies
└── netlify.toml           # Netlify deployment config
```

## Deployment

### Netlify

This project is configured for deployment on Netlify:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command to `pnpm install && pnpm run build`
4. Set publish directory to `dist`
5. Deploy

The `netlify.toml` file includes SPA routing configuration to handle client-side routes.

### GitHub Pages

To deploy on GitHub Pages:

1. Update `vite.config.ts` with your repository name as base
2. Build the project: `pnpm run build`
3. Push the `dist` folder to your gh-pages branch
4. Enable GitHub Pages in repository settings

## Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build client for production
- `pnpm run build:full` - Build client and server bundle
- `pnpm run start` - Run production server
- `pnpm run preview` - Preview production build locally
- `pnpm run check` - Type check with TypeScript
- `pnpm run format` - Format code with Prettier

## Environment Variables

Create a `.env.local` file for local development:

```
# Add your environment variables here
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
