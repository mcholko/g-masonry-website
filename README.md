# G Masonry — Website

Single-page site for G Masonry (Chicago masonry & tuckpointing), phone (773) 341-6521. Layout modeled on topbrickwork.com, without a blog. Static HTML/CSS/JS plus a small PHP form handler, so there's no build step and no framework.

## Files
- `index.html`: all page content
- `css/styles.css`: styling (brand colors are CSS variables in `:root`)
- `js/main.js`: mobile nav, FAQ accordion, quote form submission
- `contact-handler.php`: emails quote requests (needs PHP hosting, e.g. Hostinger)
- `images/logo.svg`: full logo (icon + wordmark)
- `images/logo-icon.svg`: square icon, also used as the favicon

## Before launch (search for `TODO` in the code)
1. **Domain + email:** set `$to` and the `From:` address in `contact-handler.php` to the client's real inbox/domain.
2. **Photos:** drop the client's job photos into `images/` and replace the `.ph` placeholder tiles (about, services, projects) and the hero background in `css/styles.css`.
3. **Reviews:** paste the client's Google/Yelp review widget into the reviews band, and replace the testimonial placeholders with real reviews (with permission).
4. **Business hours / address:** confirm the hours in the contact section and add a street address if the client wants one shown.
5. **Logo:** `logo.svg` uses the Poppins font for its text. For print or sharing outside the website, export it to PNG/PDF from a browser or design tool, or convert the text to outlines.

## Local preview
```bash
python3 -m http.server 8080
```
Then open http://localhost:8080. The form only works once deployed to a host running PHP.
