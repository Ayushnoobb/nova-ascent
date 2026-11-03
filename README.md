# Nova Ascent

## Deploy to Vercel

The Vite configuration explicitly enables Nitro's `vercel` preset. A production
build generates `.vercel/output` with static assets, an SSR function and routing.
`vercel.json` selects TanStack Start, `npm run build`, and a frozen Bun install.

In Vercel, use the repository root as Root Directory and remove any manually
configured Output Directory override such as `dist` or `dist/client`. Use the
TanStack Start framework preset and Node.js 24.x. Push the configuration changes
and create a new deployment; redeploying an older commit will retain its old
configuration. A static-only Vite deployment cannot serve this SSR application.

## Search and sharing metadata

Metadata is centralized in `src/lib/seo.ts`. All content pages have unique
titles/descriptions, canonical URLs, Open Graph and Twitter preview metadata.
The homepage includes Organization JSON-LD with the confirmed founders and
LinkedIn page. Query parameters are excluded from canonical URLs.

Production URLs default to `https://arcodestudeo.com`. Set `VITE_SITE_URL` at build
time if this changes. Development uses `noindex, nofollow`; set
`VITE_NOINDEX=true` when building staging/preview deployments. Normal production
builds allow indexing. Unknown pages retain noindex metadata and HTTP 404 status.

`/sitemap.xml` includes all 11 content pages, including individual training
programs. `/robots.txt` advertises the sitemap in production and disallows
crawling in development/staging. `/founders` permanently redirects to `/team`.
After deployment, verify the domain in Google Search Console and submit
`https://arcodestudeo.com/sitemap.xml`. No search-engine verification tokens or
analytics identifiers are included without account-specific values.

build a strong website for it company , that focuses on building saas product and training on it topics . 
one of the major product is school management system , 

should match color combination of this , 

futuristic software company , strong influence in ai

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ee56c74a-9459-42f7-8262-b4566e34ba3d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Contact form

The contact form posts to `https://formspree.io/f/xeaavjda` using AJAX.
The recipient is configured in that Formspree form's dashboard; set it to
`ayushwilltry@gmail.com`. The displayed company email is `info@arcodestudeo.com`.
Name, email and message are required; company is optional.

The form shows a sending indicator, blocks duplicate submissions, times out after
20 seconds, and displays inline success/error feedback. Failed attempts retain
entered values and offer a direct email link. A honeypot filters spam.
Verify inbox delivery through a test submission and the Formspree dashboard.

The site's figures describe its listed offering (1 product, 4 training tracks,
6 service areas and 8–16-week programs), rather than unverified customer,
country or graduate totals.
