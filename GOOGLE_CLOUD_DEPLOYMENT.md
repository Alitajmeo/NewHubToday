# How to Deploy NewsHub Website on Google Cloud

This guide provides simple step-by-step instructions to deploy your NewsHub website on Google Cloud Platform.

## Quick Start Guide

### Step 1: Set Up Google Cloud Account

1. Go to [https://cloud.google.com/](https://cloud.google.com/) and sign up or sign in
2. Create a new project for your NewsHub website

### Step 2: Install Google Cloud SDK

1. Download and install Google Cloud SDK from: [https://cloud.google.com/sdk/docs/install](https://cloud.google.com/sdk/docs/install)
2. Open a terminal or command prompt and run:
   ```
   gcloud init
   ```
3. Follow the prompts to log in and select your project

### Step 3: Prepare Your Application

1. Make sure your application is built:
   ```
   npm run build
   ```
   This creates the `dist` folder with your production-ready files

2. Verify your `app.yaml` file is correctly configured (it should already be set up)

### Step 4: Deploy to Google Cloud

1. From your project directory, run:
   ```
   gcloud app deploy
   ```
2. When prompted, select a region close to your target audience
3. Type `y` to confirm deployment
4. Wait for deployment to complete (usually takes 2-5 minutes)

### Step 5: View Your Live Website

1. After deployment completes, run:
   ```
   gcloud app browse
   ```
2. Your website will open in your default browser with a URL like: `https://[YOUR-PROJECT-ID].appspot.com`

## SEO Considerations

After deployment, update the following in your code for future deployments:

1. Replace all instances of `https://yourdomain.com` in `index.html` with your actual App Engine URL
2. Update Open Graph and Twitter card image URLs with absolute URLs

## Troubleshooting

- If deployment fails, check error messages in the terminal
- View application logs with: `gcloud app logs tail`
- Verify your News API key is correctly set in both `.env` and `app.yaml` files

## Cost Information

- Your application uses the F1 instance class, which is part of the free tier
- Monitor costs in Google Cloud Console under Billing > Cost Management

## Updating Your Website

1. Make changes to your code locally
2. Run `npm run build` to update the dist folder
3. Deploy again with `gcloud app deploy`

## Additional Resources

- For more detailed instructions, see the `DEPLOYMENT_GUIDE.md` file
- [Google App Engine Documentation](https://cloud.google.com/appengine/docs)
- [Google Cloud Platform Pricing](https://cloud.google.com/pricing)