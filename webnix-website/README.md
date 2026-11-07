# WebNix Website

Company website for **WebNix** (Building Your Digital Future). Plain HTML, CSS and JavaScript, no build step.

## Structure

```
index.html            All pages (Home, Services, Portfolio, About, Pricing, Blog, Contact)
404.html              Redirects to the home page
robots.txt            Search engine rules
.nojekyll             Tells GitHub Pages to serve files as they are
assets/css/style.css  Styles (dark and light themes)
assets/js/main.js     Page switching, theme toggle, before/after slider, quote form
assets/img/           Logo files and favicon
```

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `webnix-website`).
2. Upload everything in this folder to the repository root, including `.nojekyll`.
3. Go to **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, then save.
4. After a minute your site is live at `https://<your-username>.github.io/<repository-name>/`.

## Connect your own domain

1. In **Settings > Pages > Custom domain**, enter your domain and save. GitHub creates a `CNAME` file for you.
2. At your domain provider, add the DNS records GitHub lists (A records for the apex domain, or a CNAME record for `www`).
3. Tick **Enforce HTTPS** once it becomes available.

## Common edits

- **Prices:** in `index.html`, search for `Pricing coming soon` and replace it with your price.
- **Portfolio screenshots:** add images to `assets/img/` and replace the `.mk` preview blocks in the Portfolio section with `<img>` tags.
- **Contact details:** search for `7666353870`, `8767884003` and `sahil1224kap@gmail.com`.
- **Colors:** the `:root` variables at the top of `assets/css/style.css`.
