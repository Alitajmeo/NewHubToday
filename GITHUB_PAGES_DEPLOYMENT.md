# NewsHub - GitHub Pages Deployment Guide

This guide will walk you through the process of deploying your NewsHub website to GitHub Pages, a free hosting service provided by GitHub that's perfect for static websites like this React application.

## Prerequisites

1. A GitHub account
   - If you don't have one, sign up at [https://github.com/](https://github.com/)
   - It's completely free for public repositories

2. Git installed on your computer
   - Download from: [https://git-scm.com/downloads](https://git-scm.com/downloads)
   - Follow the installation instructions for your operating system

3. Node.js and npm installed (for local testing)

## Step 1: Prepare Your Project

1. Make sure your application is built and ready for deployment:
   ```bash
   npm run build
   ```
   This will create or update the `dist` folder with your production-ready files.

2. Create a `.github/workflows` directory in your project (if it doesn't exist):
   ```bash
   mkdir -p .github/workflows
   ```

3. Create a GitHub Actions workflow file for automated deployments:
   - Create a file named `.github/workflows/deploy.yml` with the deployment configuration
   - This will automatically build and deploy your site when you push to the main branch

4. Update SEO metadata in your `index.html` file:
   - Replace all instances of `https://yourdomain.com` with your GitHub Pages URL once deployed
   - The URL will be in the format: `https://yourusername.github.io/repository-name`

## Step 2: Set Up GitHub Repository

1. Create a new repository on GitHub:
   - Go to [https://github.com/new](https://github.com/new)
   - Name your repository (e.g., `newshub`)
   - Choose public visibility
   - Do not initialize with README, .gitignore, or license
   - Click "Create repository"

2. Initialize your local repository and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/repository-name.git
   git push -u origin main
   ```
   Replace `yourusername` and `repository-name` with your actual GitHub username and repository name.

## Step 3: Configure GitHub Pages

1. Go to your GitHub repository in a web browser

2. Click on "Settings" tab

3. Scroll down to the "Pages" section in the left sidebar

4. Under "Source", select "GitHub Actions" as the deployment method

5. GitHub will use the workflow file you created to build and deploy your site

6. Once deployed, your site will be available at `https://yourusername.github.io/repository-name`

## Step 4: Update Vite Configuration

1. Modify your `vite.config.ts` file to include the base path for GitHub Pages:
   ```typescript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     base: '/repository-name/', // Replace with your actual repository name
     optimizeDeps: {
       exclude: ['lucide-react'],
     },
   });
   ```
   Replace `repository-name` with your actual repository name.

2. Rebuild your application after making this change:
   ```bash
   npm run build
   ```

3. Commit and push the changes:
   ```bash
   git add .
   git commit -m "Update Vite config for GitHub Pages"
   git push
   ```

## Monitoring and Maintenance

1. Monitor your GitHub Actions workflows:
   - Go to the "Actions" tab in your GitHub repository
   - You can see the status of your deployments and any errors that occur

2. Update your application as needed:
   - Make changes locally
   - Test thoroughly
   - Commit and push your changes
   - GitHub Actions will automatically build and deploy your site

## Troubleshooting

1. If your deployment fails, check the error messages in the GitHub Actions logs

2. Common issues include:
   - Incorrect base path in Vite configuration
   - Missing or incorrect workflow file
   - Build errors in your code

3. If your site is deployed but assets are missing, ensure:
   - The base path in Vite configuration matches your repository name
   - All asset URLs in your code are relative, not absolute

4. If you encounter issues with your News API key, consider:
   - Using environment variables with GitHub Secrets
   - Implementing a proxy server for API requests

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [React Router with GitHub Pages](https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing)