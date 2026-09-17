@AGENTS.md
# Project: Postill_ua (Bed Linen E-Commerce)

## Project Overview
Minimalist, premium Ukrainian e-commerce store specializing in bed linen.
- Scope: Strictly "Ранфорс" and "Бязь Gold Lux" collections. No satin, linen, or silk.
- Language: Ukrainian (UI & content).
- Assistant Communication: Speak and explain all actions in Ukrainian.

## Tech Stack
- Framework: Next.js (App Router, `src/` directory)
- Language: TypeScript (strict types)
- Styling: Tailwind CSS
- Icons: lucide-react
- State Management: Zustand (with persist for Cart)
- UI Primitives: shadcn/ui (Radix UI)

## Design System & Tokens
- Background: Warm ivory/beige `#FAF8F5`
- Surface / Cards: Pure white `#FFFFFF`
- Text Primary: Dark graphite `#1A1A1A`
- Text Muted: Warm gray `#766E65`
- Borders / Dividers: Warm sand `#E5E0D8`
- Typography:
  - Headings: Elegant Serif font (`font-serif`, Playfair Display / Cormorant Garamond feel)
  - Body & UI: Clean Sans-serif (`font-sans`, Inter / Geist)

## Asset Rules
- All local static images are stored in `/public/images/`.
- Always use Next.js `<Image />` component with proper sizing or `fill` + `object-cover`.

## Development Rules
- Do not add unnecessary npm packages without asking.
- Maintain mobile-first responsive design.
- Keep components modular inside `src/components/`.