# NSAMWA TECHENERGY COMPANY LIMITED: Website

Plain HTML5, CSS3 and vanilla JavaScript. No build step.

## Run locally
Double-click `index.html`, or from this folder run `python3 -m http.server 8000` and open http://localhost:8000.

## Before going live
- Replace `[bracketed]` placeholders (email, phone, address, team, stats, testimonials) in the HTML.
- Brand colours: navy #002F76, orange #FE7202 (from the official logo; edit the `:root` variables in `css/style.css`).
- Replace SVG artwork in `assets/images/` with real photos (keep file names or update the `<img>` tags).
- Swap `https://www.example.com` in `sitemap.xml` and `robots.txt` for your domain.
- Replace the WhatsApp number in `contact.html`; add a Google Maps iframe in the `.map` block.
- Forms validate client-side only. Connect Formspree or EmailJS in `js/forms.js`.

## GitHub
`git init && git add . && git commit -m "Initial site"`, create a repo, then `git remote add origin <url> && git push -u origin main`.

## Deploy
- **Vercel:** import the GitHub repo, framework "Other", no build command, output directory `.`.
- **Traditional hosting:** upload the folder contents to `public_html` via cPanel or FTP.
