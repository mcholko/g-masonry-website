# GH Masonry — Website

Single-page site for GH Masonry (Chicago masonry & tuckpointing), legal name GH Masonry Work LLC, phone (773) 341-6521. Layout modeled on topbrickwork.com, without a blog. Static HTML/CSS/JS plus a small PHP form handler, so there's no build step and no framework.

## Files
- `index.html`: all page content
- `css/styles.css`: styling (brand colors are CSS variables in `:root`)
- `js/main.js`: mobile nav, FAQ accordion, quote form submission
- `contact-handler.php`: emails quote requests (needs PHP hosting, e.g. Hostinger)
- `images/logo.png`: client's GH Masonry Work LLC logo (header and footer)
- `images/favicon.png`, `images/apple-touch-icon.png`: brick icon cropped from the logo

## Before launch (search for `TODO` in the code)
1. **Domain + email:** set `$to` and the `From:` address in `contact-handler.php` to the client's real inbox/domain.
2. **Photos:** the site uses free stock photos, mostly of Chicago homes and buildings, from Unsplash and Pexels (both licenses allow commercial use with no attribution required). The "Buildings We Work On" gallery shows building types, not the client's jobs; once the client has their own job photos, swap them in (same filenames in `images/`) or add a real projects section. The "Recent Work" section (`images/work-*.jpg`) already uses GH Masonry's own job photos (Nov 2026).
3. **Testimonials:** the three testimonials (Mike C., Nick F., Joe D.) were approved by the customers in Oct 2026. Get the same sign-off for any new ones you add.
4. **Business hours / address:** confirm the hours in the contact section and add a street address if the client wants one shown.
5. **Logo:** `logo.png` is the client's logo. Ask for the original high-res or vector file (SVG/PDF) for sharper display and print.

## Local preview
```bash
python3 -m http.server 8080
```
Then open http://localhost:8080. The form only works once deployed to a host running PHP.
