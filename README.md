# Refuge — Restaurant & Bar

Marketing website for Refuge, 52 Athol Street, Douglas, Isle of Man.
Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Develop

```bash
npm install
npm run dev
```

## Configure

Copy `.env.example` to `.env.local`:

- `NEXT_PUBLIC_BOOKING_URL` — reservation provider URL. When unset, all
  "Book a Table" CTAs fall back to the phone line (01624 616584) and show
  "Online booking coming soon".
- `NEXT_PUBLIC_SITE_URL` — canonical URL for metadata / JSON-LD.

## Content

- Menus: `lib/menus.ts` — structured data (dishes, descriptions, prices,
  dietary labels). Entries marked `placeholder: true` are labelled as such in
  the UI until the real menu is supplied.
- Reviews: `lib/reviews.ts` — awaiting the real testimonial text.
- Hours / address / phone: `lib/site.ts` (Sunday hours intentionally omitted —
  unconfirmed).

## Images

All photography in `lib/images.ts` is temporary placeholder stock imagery.
Replace with real Refuge photos before launch — recommended: AWS S3 behind a
CDN, then add the hostname to `remotePatterns` in `next.config.ts` and grant
the deploy role least-privilege `s3:GetObject` access only.

## Deploy

Static-friendly Next.js app; deploy to Vercel as-is.
