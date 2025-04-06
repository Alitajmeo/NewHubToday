# NewsHub

A modern news aggregation website built with React, TypeScript, and Vite. This application fetches the latest news from various sources and presents them in a clean, responsive interface.

## Features

- Latest breaking news from around the world
- Categorized news sections
- Responsive design for all devices
- Fast loading times
- SEO optimized

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Helmet (for SEO)

## Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/newshub.git
   cd newshub
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your News API key
   ```
   VITE_NEWS_API_KEY=your_api_key_here
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Deployment

This project is configured for deployment to GitHub Pages. See the [GitHub Pages Deployment Guide](./GITHUB_PAGES_DEPLOYMENT.md) for detailed instructions.

Quick deployment steps:

1. Update the `base` path in `vite.config.ts` with your repository name
2. Push your code to GitHub
3. Configure GitHub Pages in your repository settings
4. GitHub Actions will automatically build and deploy your site

## License

MIT