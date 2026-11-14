# Web rules

For code that runs in a browser or serves pages: sites, web apps and the API behind them. The project's security policy, framework and conventions come first. Layout, type, controls and accessibility are in the interface skill.

## Security

- **Check access on the server.** Every request checks who asks and which records they may see. Hiding a button or a route in the client protects nothing.
- **Send only what the screen shows.** An API returns the records the user may access and the fields the screen needs. Don't send a full object and filter it in the browser: anyone can read the response in the network tab.
- **The bundle is public.** Keep secrets, keys and internal URLs on the server. Variables with a public prefix, such as `NEXT_PUBLIC_` or `VITE_`, end up in the bundle.
- **User content is text.** Don't pass it to `innerHTML`, `dangerouslySetInnerHTML`, `v-html` or `document.write`. When users must send HTML, sanitize it with a maintained library such as DOMPurify.
- **Work under a strict Content Security Policy**, even if the project has none yet: no inline `<script>`, no `onclick` and other handler attributes, no `eval` or `new Function`, no `javascript:` links.
- **No inline styles.** Don't write a `style` attribute or a framework's `style` prop, even for one value. A policy without `'unsafe-inline'` blocks them, and server rendering turns a `style` prop into such an attribute. Switch looks with classes or `data-*` attributes styled in the stylesheet. Pass a dynamic value through an attribute the element already has: `x`, `y` and `width` in SVG, `value` on `<progress>` and `<meter>`. If none fits, ask before writing to `element.style`.
- **Tokens in cookies.** Keep session tokens in `HttpOnly`, `Secure`, `SameSite` cookies, not in `localStorage`, where any injected script reads them. A request that changes data and relies on cookies needs CSRF protection.
- **Validate on the server.** Validation in the browser is only for the user's convenience.
- **Check redirect targets.** A target from a query parameter must match a list of allowed paths, or the site sends users to any domain.
- **Keep personal data and tokens out of URLs.** URLs land in server logs, browser history and the `Referer` header.
- **Errors don't leak.** A response shows no stack trace, SQL or internal path.

## Data and state

- Every request has a loading, an error and an empty state on screen. A failed request says what failed and offers a retry.
- The newest request wins. Cancel the previous one with `AbortController` or drop its response, so a slow old search doesn't overwrite a newer one.
- Ignore repeated submits while one is pending. An order or a payment also gets an idempotency key on the server.
- Keep in the URL what must survive a reload or Back: search, filters, sort, page, the open tab.
- Server-rendered markup matches the first client render. Read `window`, `localStorage`, the current time and random values after mount.
- Store time in UTC and show it in the user's time zone with `Intl.DateTimeFormat`. Format numbers with `Intl.NumberFormat`. Keep money in integer minor units or a decimal type, never in floats.
- Paginate long lists on the server. Render thousands of rows with virtualization.

## Loading speed

- Every `<img>` and `<video>` has `width` and `height` or an `aspect-ratio`, so the page doesn't jump as it loads. Lazy-load images below the first screen, never the main one above it.
- Serve images at the size they are shown, with `srcset`, in AVIF or WebP.
- Self-host fonts as WOFF2 with the subsets the text needs, such as Cyrillic. Use `font-display: swap` and preload only the fonts of the first screen.
- Start independent requests together, not one after another.
- Load heavy parts such as charts, editors and maps when they are needed, not with the first page.
- Don't add a library for what the platform does: `fetch`, `Intl`, `URLSearchParams`, `<dialog>`, CSS transitions.

## Public pages

For pages that search engines and link previews read:

- `lang` on `<html>`, a unique `<title>` and meta description, one `<h1>`.
- The content is in the server-rendered HTML, not loaded by a script afterwards.
- Pages link to each other with `<a href>`, so crawlers can follow them.
- A page people share has Open Graph title, description and image.
