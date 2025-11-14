# My Portfolio

A modern, single-page personal portfolio built with **Next.js 13 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Dark theme** with smooth gradient backgrounds
- **Framer Motion animations** for entrance effects and card stagger
- **Fully static** — no backend required
- **Easy content management** — add projects by editing `data/projects.ts`
- **Responsive design** — looks great on mobile and desktop
- **Type-safe** — strict TypeScript with no `any` types
- **Modern Next.js App Router** with `@/` path aliases

## 📁 Project Structure

```
my-portfolio/
├─ app/
│  ├─ layout.tsx              # Root layout with metadata
│  ├─ page.tsx                # Main single-page layout
│  ├─ globals.css             # Tailwind imports + base styles
│  ├─ favicon.svg             # Site favicon
│  └─ projects/
│     └─ [slug]/
│        └─ page.tsx          # Optional project detail pages
│
├─ components/
│  ├─ layout/
│  │  ├─ Navbar.tsx           # Sticky navbar
│  │  ├─ Footer.tsx           # Footer with social links
│  │  └─ PageShell.tsx        # Layout wrapper
│  ├─ sections/
│  │  ├─ Hero.tsx             # Hero section with CTA
│  │  ├─ ProjectsGrid.tsx     # Projects grid with animations
│  │  ├─ ProjectCard.tsx      # Individual project card
│  │  ├─ About.tsx            # About section
│  │  └─ Contact.tsx          # Contact section
│  ├─ ui/
│  │  ├─ TagPill.tsx          # Tech tag pill component
│  │  ├─ SectionHeader.tsx    # Reusable section header
│  │  └─ BackgroundOrbs.tsx   # Animated background gradients
│  └─ icons/
│     └─ SocialIcon.tsx       # Social icon placeholder
│
├─ data/
│  ├─ projects.ts             # **Edit this to add projects**
│  └─ socialLinks.ts          # Social media links
│
├─ lib/
│  ├─ types.ts                # TypeScript types (Project, SocialLink)
│  ├─ utils.ts                # Helper functions (slugify, cn)
│  └─ seo.ts                  # SEO metadata utilities
│
└─ public/
   └─ images/
      └─ projects/            # Project thumbnail images
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Adding Projects

Edit `data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    slug: 'your-project',           // Used for URL: /projects/your-project
    title: 'Your Project',
    subtitle: 'Optional tagline',
    description: 'A short description of what this project does.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    link: 'https://example.com',   // Optional live site
    repo: 'https://github.com/...',// Optional GitHub repo
    status: 'live',                 // 'in-progress' | 'live' | 'archived'
    highlight: true,                // Show first in grid
    year: '2025',
    image: '/images/projects/your-project.png',
  },
  // Add more projects...
];
```

**That's it!** The project card will automatically appear on your homepage.

## 🎨 Customization

### Change Colors

Edit Tailwind classes in components:
- Sky blue accent: `text-sky-300`, `bg-sky-500`
- Dark theme: `bg-slate-950`, `text-slate-100`

### Update Personal Info

- **Name & Bio**: Edit `components/sections/Hero.tsx`
- **About section**: Edit `components/sections/About.tsx`
- **Contact email**: Edit `components/sections/Contact.tsx`
- **Social links**: Edit `data/socialLinks.ts`
- **Footer name**: Edit `components/layout/Footer.tsx`

### SEO & Metadata

Edit `app/layout.tsx` and `lib/seo.ts` for site title, description, and Open Graph tags.

## 🛠 Tech Stack

- **Next.js 13** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (animations)
- **React 18**

## 📦 Deployment

Deploy to **Vercel** (recommended):

```bash
vercel
```

Or push to GitHub and connect your repo on [vercel.com](https://vercel.com).

## 📄 License

MIT — feel free to use this as a starting point for your own portfolio!

---

**Built with ❤️ using Next.js + Tailwind + Framer Motion**