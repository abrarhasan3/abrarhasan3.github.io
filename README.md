# Abrar Hasan — Portfolio

A personal portfolio website for **Abrar Hasan** — Lecturer at the Department of Software Engineering, Green University of Bangladesh; researcher in lightweight cryptography and IoT security; debater and educator.

🌐 **Live site:** https://abrarhasan3.github.io/ *(after deployment — see below)*

---

## ✨ Features

- **Editorial-academic design** — serif display typography (Fraunces) paired with monospace accents (JetBrains Mono)
- **Light + Dark themes** — auto-detects system preference, remembers your choice
- **Scroll-triggered animations** — content reveals as you scroll
- **Animated stat counters** — courses, publications, awards
- **Interactive course grid** — hover any course to see its description
- **Terminal-style contact card** — because computer scientists deserve a CLI
- **Custom cursor** on desktop, fully responsive on mobile
- **Reduced-motion support** — respects accessibility preferences
- **Zero build step** — pure HTML, CSS, and JavaScript. Deploy anywhere.

---

## 📂 File Structure

```
.
├── index.html      # Page structure & content
├── styles.css      # All styling (dual theme, animations, layout)
├── script.js       # Theme toggle, scroll reveal, course/project data
└── README.md       # This file
```

To update content (publications, courses, projects), edit `index.html` and the data arrays at the top of `script.js`.

---

## 🚀 Deploying to GitHub Pages

### Option A — Quick deploy (recommended for a personal site)

GitHub gives every account a free site at `https://<your-username>.github.io`. Since your username is `abrarhasan3`, your URL will be `https://abrarhasan3.github.io`.

1. **Create the repository.** On GitHub, click **New repository** and name it **exactly** `abrarhasan3.github.io` (it must match your username + `.github.io`). Make it **Public**. Do not add a README from GitHub (we already have one).

2. **Push the files.** Open a terminal in this folder and run:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/abrarhasan3/abrarhasan3.github.io.git
   git push -u origin main
   ```

3. **Enable Pages.** Go to your repo → **Settings** → **Pages** → under *Source*, choose **Deploy from a branch**, pick `main` branch, `/ (root)` folder, and click **Save**.

4. **Visit your site.** Wait 1–2 minutes, then open **https://abrarhasan3.github.io**. Done.

### Option B — Project repo (if you want a different name)

If you want the repo to live at, say, `github.com/abrarhasan3/portfolio` and the site at `https://abrarhasan3.github.io/portfolio/`:

1. Create a public repo named anything you like (e.g. `portfolio`).
2. Push the same files.
3. **Settings → Pages → Source: Deploy from a branch → main / root → Save.**
4. Site appears at `https://abrarhasan3.github.io/<repo-name>/`.

---

## 🎨 Customizing

### Update content

- **Hero text, sections:** edit `index.html` directly.
- **Courses:** edit the `courses` array at the top of `script.js`.
- **Projects:** edit the `projects` array at the top of `script.js`.
- **Publications:** edit the `<article class="paper">` blocks in `index.html`.
- **Timeline / awards:** edit the `<ol class="timeline">` block in `index.html`.

### Change colors

All theme colors live as CSS variables at the top of `styles.css`:

```css
:root {
  --bg: #F4EFE6;        /* page background (light) */
  --ink: #1A1F2E;       /* main text */
  --accent: #C8442A;    /* highlights, links, the "vermillion" */
  --gold: #B8924A;      /* secondary accent */
  ...
}
```

Edit one variable and watch every related element update.

### Change fonts

Swap the Google Fonts URL in `index.html`'s `<head>` and update the `--font-display`, `--font-body`, `--font-mono` variables in `styles.css`.

---

## 🔧 Local development

No build tools needed. Just open `index.html` in a browser, **or** for a proper local server:

```bash
# Python 3
python3 -m http.server 8000

# Or Node
npx serve .
```

Then visit `http://localhost:8000`.

---

## 📜 License

Code is yours to modify and redistribute. Content (text, photos, publications) belongs to Abrar Hasan.

---

Built with ❤️ for academia.
