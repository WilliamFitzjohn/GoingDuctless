# Google Search Console Setup Instructions

## Step 1: Verify Your Site

1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Enter: https://goingductless.ca
4. Choose verification method:

### Option A: HTML File Upload (Recommended)
- Download the verification file from Google
- Place it in the `/public` folder
- Deploy your site
- Click "Verify" in Google Search Console

### Option B: HTML Tag
- Copy the meta tag from Google Search Console
- Add it to the <head> section of index.html (already set up with placeholder)

## Step 2: Submit Sitemap

After verification:
1. In Google Search Console, go to "Sitemaps"
2. Submit: https://goingductless.ca/sitemap.xml

## Step 3: Google Analytics (Optional but Recommended)

1. Create a GA4 property at https://analytics.google.com
2. Get your Measurement ID (starts with G-)
3. Add to index.html:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Step 4: Google Business Profile

1. Claim/create your business at https://business.google.com
2. Verify your location
3. Add:
   - Business hours (Mon-Fri: 8:00 AM - 5:00 PM)
   - Phone: (905) 239-5567
   - Email: sales@goingductless.ca
   - Service areas: Greater Toronto Area
   - Photos of your work
   - Services offered

## What's Already Done:

✅ Meta tags (title, description, keywords)
✅ Open Graph tags (Facebook sharing)
✅ Twitter Card tags
✅ Structured Data (JSON-LD for local business)
✅ Sitemap.xml
✅ Robots.txt
✅ Canonical URLs
✅ Dynamic SEO component for each page
✅ Geographic meta tags

## Next Steps:

1. Deploy your site to production
2. Verify with Google Search Console
3. Submit sitemap
4. Set up Google Analytics (optional)
5. Claim Google Business Profile
6. Request reviews from satisfied customers
