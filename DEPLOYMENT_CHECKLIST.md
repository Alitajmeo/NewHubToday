# NewsHub Deployment Checklist

## Before Deployment

- [ ] Google Cloud Platform account is created
- [ ] Google Cloud SDK is installed
- [ ] Application is built with `npm run build`
- [ ] `dist` folder contains all production files
- [ ] `app.yaml` file is properly configured
- [ ] API key is correctly set in both `.env` and `app.yaml`

## Deployment Process

- [ ] Run `gcloud init` and follow prompts
- [ ] Select or create a Google Cloud project
- [ ] Run `gcloud app create` (first-time only)
- [ ] Select appropriate region
- [ ] Run `gcloud app deploy`
- [ ] Confirm deployment when prompted
- [ ] Wait for deployment to complete

## After Deployment

- [ ] Run `gcloud app browse` to view live site
- [ ] Verify all pages and features work correctly
- [ ] Check that API calls are working properly
- [ ] Update SEO metadata with actual domain (for future deployments)
- [ ] Set up monitoring and alerts (optional)
- [ ] Configure custom domain (optional)

## Troubleshooting

- [ ] Check deployment logs for errors
- [ ] Run `gcloud app logs tail` to view application logs
- [ ] Verify API key is working
- [ ] Check Google Cloud Console for any issues

## Regular Maintenance

- [ ] Monitor application performance
- [ ] Check billing and usage
- [ ] Update application as needed
- [ ] Run `npm run build` after changes
- [ ] Deploy updates with `gcloud app deploy`