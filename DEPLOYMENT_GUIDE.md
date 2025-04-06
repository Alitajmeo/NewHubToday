# NewsHub - Google Cloud Deployment Guide

This guide will walk you through the process of deploying your NewsHub website to Google Cloud Platform using App Engine.

## Prerequisites

1. A Google Cloud Platform account
   - If you don't have one, sign up at [https://cloud.google.com/](https://cloud.google.com/)
   - New users get $300 in free credits

2. Google Cloud SDK installed on your computer
   - Download from: [https://cloud.google.com/sdk/docs/install](https://cloud.google.com/sdk/docs/install)
   - Follow the installation instructions for your operating system

3. Node.js and npm installed (for local testing)

## Step 1: Prepare Your Project

1. Make sure your application is built and ready for deployment:
   ```bash
   npm run build
   ```
   This will create or update the `dist` folder with your production-ready files.

2. Verify your `app.yaml` file is correctly configured (it should already be set up):
   ```yaml
   runtime: nodejs18
   instance_class: F1
   handlers:
     - url: /static
       static_dir: dist/assets
       secure: always
     - url: /(.*\.(json|ico|js|css|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot))
       static_files: dist/\1
       upload: dist/.*\.(json|ico|js|css|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$
       secure: always
     - url: /.*
       static_files: dist/index.html
       upload: dist/index.html
       secure: always
   env_variables:
     VITE_NEWS_API_KEY: "d6773cb8c7e74bdfa0368d34250dd141"
   ```

3. Update SEO metadata in your `dist/index.html` file:
   - Replace all instances of `https://yourdomain.com` with your actual domain once deployed
   - Update the Open Graph and Twitter card image URLs

## Step 2: Set Up Google Cloud

1. Open a terminal or command prompt

2. Initialize the Google Cloud SDK:
   ```bash
   gcloud init
   ```

3. Follow the prompts to:
   - Log in to your Google account
   - Select or create a Google Cloud project
   - Choose a default region and zone

4. Create a new App Engine application (if you haven't already):
   ```bash
   gcloud app create
   ```
   - Select a region that's closest to your target audience

## Step 3: Deploy Your Application

1. From your project directory, deploy the application:
   ```bash
   gcloud app deploy
   ```

2. When prompted, review the details and type `y` to confirm

3. Wait for the deployment to complete (this may take a few minutes)

4. Once deployed, view your live application:
   ```bash
   gcloud app browse
   ```
   This will open your default browser with your deployed application URL

## Step 4: Set Up a Custom Domain (Optional)

1. Go to the Google Cloud Console: [https://console.cloud.google.com/](https://console.cloud.google.com/)

2. Navigate to App Engine > Settings > Custom domains

3. Click "Add a custom domain"

4. Follow the steps to verify domain ownership and set up DNS records

5. Wait for DNS propagation (can take 24-48 hours)

## Step 5: Set Up Continuous Deployment (Optional)

1. Set up a GitHub repository for your project

2. In Google Cloud Console, go to Cloud Build > Triggers

3. Connect your GitHub repository

4. Create a new trigger that builds and deploys your application whenever you push to the main branch

## Monitoring and Maintenance

1. Monitor your application's performance in the Google Cloud Console:
   - App Engine > Dashboard
   - Logging > Logs Explorer

2. Set up alerts for errors or performance issues:
   - Monitoring > Alerting

3. Update your application as needed:
   - Make changes locally
   - Test thoroughly
   - Run `npm run build`
   - Deploy with `gcloud app deploy`

## Cost Management

1. Your application is configured to use the F1 instance class, which is part of the free tier

2. Monitor your usage and costs in the Google Cloud Console:
   - Billing > Cost Management

3. Set up budget alerts to avoid unexpected charges:
   - Billing > Budgets & Alerts

## Troubleshooting

1. If your deployment fails, check the error messages in the terminal

2. View application logs:
   ```bash
   gcloud app logs tail
   ```

3. For more detailed logs, use the Logs Explorer in Google Cloud Console

4. If you encounter issues with your News API key, verify it's correctly set in both the `.env` file and `app.yaml` file

## Additional Resources

- [Google App Engine Documentation](https://cloud.google.com/appengine/docs)
- [Google Cloud Platform Pricing Calculator](https://cloud.google.com/products/calculator)
- [App Engine Quotas and Limits](https://cloud.google.com/appengine/quotas)
- [Google Cloud Support](https://cloud.google.com/support)