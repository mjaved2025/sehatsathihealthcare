# SehatSathi Website

A simple responsive static website designed to be easy to edit in VS Code and deploy to GoDaddy shared hosting.

## Pages

- `index.html` — Home
- `about.html` — About Us
- `services.html` — Services
- `board.html` — Board Members
- `contact.html` — Contact

## Local testing

You can simply open `index.html` in a browser, or use the VS Code Live Server extension.

## Before production

Replace:
- Placeholder board-member names/roles/photos
- `info@sehatsathi.com`
- Company address
- Service descriptions
- Footer/company legal details

The contact form currently uses `mailto:` and opens the visitor's email client. For a production contact form, use a server-side PHP handler or a trusted transactional/form email service.

## GoDaddy deployment

1. Log in to GoDaddy.
2. Open **My Products → Web Hosting → Manage**.
3. Open **cPanel / File Manager**.
4. Open the website's document root, commonly `public_html`.
5. Upload the website files/folders from this project.
6. Make sure `index.html` is directly inside the document root.
7. Visit your domain and verify all pages.
8. Enable/verify SSL and force HTTPS.
9. Test the site on desktop and mobile.

Do not upload `.git`, editor settings, passwords, API keys, or other secrets.

## Recommended Git workflow

Create a Git repository for this project and push changes to GitHub. Keep production deployment as a deliberate step rather than editing files directly on the server.
