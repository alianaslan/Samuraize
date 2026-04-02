# Samuraize.ai — Next.js Landing Page

## 🚀 Deploy to Vercel (3 steps)

### Option A: GitHub → Vercel (recommended)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click Deploy — Vercel auto-detects Next.js. Done!

### Option B: Vercel CLI
```bash
npm install -g vercel
cd samuraize
npm install
vercel
```

### Option C: Drag & Drop
1. Run `npm run build` locally
2. Drag the project folder to vercel.com/new

---

## 🛠 Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 📁 Project Structure

```
samuraize/
├── app/
│   ├── layout.js        # Root layout + metadata
│   ├── page.js          # Homepage (assembles all sections)
│   └── globals.css      # Design system, animations, fonts
├── components/
│   ├── Navbar.js + .module.css
│   ├── Hero.js + .module.css       # Samurai slicing salmon SVG + URL input
│   ├── HowItWorks.js + .module.css
│   ├── Features.js + .module.css
│   ├── Roadmap.js + .module.css    # 4-phase visual timeline
│   ├── Pricing.js + .module.css    # Ronin / Samurai / Shogun plans
│   ├── FAQ.js + .module.css
│   └── Footer.js + .module.css
├── vercel.json
└── package.json
```

## 🎨 Design System

Colors defined in `globals.css` as CSS variables:
- `--cream` / `--cream-dark` / `--parchment` — earthy backgrounds
- `--terracotta` — primary accent (CTAs, headlines)
- `--gold` — secondary accent (badges, highlights)
- `--moss` — success states, features
- `--indigo` — deep accent
- `--ink` — text / dark surfaces

Fonts (Google Fonts, loaded in globals.css):
- **Shippori Mincho** — display/headings (sharp Japanese serif)
- **DM Sans** — body text

## ✏️ Customization

- **Email capture**: Connect to Mailchimp / ConvertKit by replacing the `handleEmailSubmit` function in `Hero.js`
- **URL input**: Wire to your actual API endpoint in `handleSlice` in `Hero.js`
- **Colors**: Edit CSS variables in `globals.css`
- **Copy**: All text is inline in each component — easy to find and edit
- **Pricing**: Update prices in the `plans` array in `Pricing.js`
