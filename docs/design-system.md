# 발산마켓 Landing — Design System Rules

This document defines the visual design system that every landing section must follow. The goal is a **professional B2B feel** — calm, editorial, confident — while preserving the warm salmon (#F4978E) accent and the brand's approachable voice.

> Single source of truth: `src/app/globals.css` (tokens via Tailwind v4 `@theme inline`).
> When in doubt, pick the restrained option.

---

## 1. Foundations

### 1.1 Color

| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#0F0F10` | Display headings, large numbers, strong ink |
| `--color-dark` | `#2c2c2c` | Body text, card titles |
| `--color-warm-gray` | `#8a8580` | Secondary text, captions, meta |
| `--color-warm-bg` | `#f9f8f6` | Section alternating bg, card bg on white |
| `--color-warm-border` | `#e8e4e0` | Dividers, card borders |
| `--color-accent` | `#F4978E` | CTA, key numbers, eyebrow, 1 emphasis per section |
| `--color-accent-soft` | `#FFF0ED` | Tag/chip backgrounds, hover states |

**Accent budget (hard rule)**
- Max **2 accent-colored elements per viewport** at any time.
- Accent is reserved for: primary CTA, 1 key metric, 1 eyebrow label, small chips/badges.
- Never color body text or entire headlines in accent. At most 1–2 words.

### 1.2 Typography

We use a **fluid scale** with `clamp()` so sizes breathe between mobile and desktop without media-query ladders.

| Token | Size | Weight | Tracking | Line-height | Use |
|---|---|---|---|---|---|
| `text-display` | `clamp(2.5rem, 5vw + 1rem, 5rem)` | 700 | -0.035em | 1.02 | Hero headline only |
| `text-h1` | `clamp(2rem, 3vw + 1rem, 3.25rem)` | 600 | -0.025em | 1.1 | Section titles |
| `text-h2` | `clamp(1.5rem, 1.5vw + 1rem, 2rem)` | 600 | -0.02em | 1.2 | Sub headings, card titles |
| `text-lead` | `clamp(1rem, 0.5vw + 0.875rem, 1.25rem)` | 400 | 0 | 1.6 | Section lead paragraphs |
| `text-body` | `0.9375rem` (15px) | 400 | 0 | 1.65 | Body text |
| `text-caption` | `0.75rem` (12px) | 500 | 0 | 1.5 | Meta, captions |
| `text-eyebrow` | `0.6875rem` (11px) | 600 | 0.16em uppercase | 1 | Section category label |

**Hierarchy rule**: headline and body must have **≥ 2.5× size ratio**. That contrast is what makes a layout feel editorial, not "student project".

### 1.3 Spacing (rhythm scale)

Use these for section padding, stacks, and gaps — not arbitrary numbers.

| Token | Value | Use |
|---|---|---|
| `space-section` | `clamp(5rem, 8vw, 8rem)` → `py-[clamp(5rem,8vw,8rem)]` | **Every** section's vertical padding |
| `space-section-tight` | `clamp(4rem, 6vw, 6rem)` | Hero, banner |
| `space-stack-xl` | `clamp(3rem, 5vw, 5rem)` | Gap between major blocks inside a section |
| `space-stack-lg` | `2rem` (32px) | Gap between title group and content |
| `space-stack-md` | `1rem` (16px) | Default text stack |
| `space-gutter` | `px-6 lg:px-12` | Horizontal side padding |

### 1.4 Grid & container

- **Max width**: `1280px` (`max-w-7xl`) — matches current usage
- **Content column** (for long reading): `max-w-[820px]` mx-auto
- **Outer gutter**: `px-6` mobile, `px-12` desktop
- **Inner grid gap**: `gap-8 lg:gap-12` default, `gap-12 lg:gap-20` for feature blocks

### 1.5 Elevation & borders

Shadows are **subtle and soft**. No hard `shadow-md`. Only the two tokens below.

```css
--shadow-card:        0 1px 2px rgba(17,17,17,.04), 0 8px 24px rgba(17,17,17,.04);
--shadow-card-hover:  0 2px 4px rgba(17,17,17,.04), 0 16px 32px rgba(17,17,17,.06);
```

**Border**: `1px solid rgba(232, 228, 224, 0.8)` — borders carry most of the card's visual weight; shadow only adds depth on hover.

**Corner radius**:
- Cards: `rounded-2xl` (16px)
- Images inside cards: `rounded-xl` (12px)
- Chips/pills/buttons: `rounded-full`
- Inputs: `rounded-xl`

### 1.6 Motion

All transitions: `duration-300 ease-out` (default) or `duration-500 ease-out` (scroll reveals).

Hover micro-interactions:
- Cards: `hover:-translate-y-0.5` + shadow swap (subtle)
- Images inside cards: `group-hover:scale-[1.03]` (500ms)
- Buttons: no translate, only color/shadow

**Never**:
- Bounce animations
- Floating decorative elements
- Long `transition-all` chains

---

## 2. Section Rhythm

Sections alternate backgrounds to create visual cadence:

```
1. Hero           → white
2. Business       → warm-bg
3. Features       → white
4. Video          → warm-bg
5. BrandStory     → accent-soft tint
6. Trust          → white
7. FAQ            → warm-bg
8. Contact        → white
```

**Every section uses the same vertical padding token** (`space-section`, except Hero/BrandStory which use `space-section-tight`). This single discipline is what makes the page read as one system.

---

## 3. Section Title Pattern

Every section starts with **the same block**:

```tsx
<div className="mb-14 lg:mb-16">
  <span className="text-eyebrow text-accent">Product Lineup</span>
  <h2 className="text-h1 text-ink mt-3 mb-4">품질을 만드는 4가지 기준</h2>
  <p className="text-lead text-warm-gray max-w-2xl">보조 설명 한 줄 또는 두 줄.</p>
</div>
```

- Eyebrow label is **always** above the H1.
- Eyebrow is in English Title Case + uppercase tracking.
- H1 body never exceeds 2 lines on desktop.
- Lead paragraph is restricted to `max-w-2xl` for readability.

---

## 4. Component Patterns

### 4.1 Card

```tsx
<div className="bg-white border border-warm-border/80 rounded-2xl shadow-card p-6 lg:p-8
                transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover">
```

Only deviation allowed: padding can be `p-4` for small product cards, `p-8 lg:p-12` for hero cards.

### 4.2 Primary CTA button

```tsx
<Link className="inline-flex items-center gap-2 bg-ink text-white px-7 py-3.5
                 rounded-full text-sm font-medium shadow-card
                 hover:shadow-card-hover hover:bg-ink/90 transition-all">
  대량주문 문의하기
  <ArrowIcon />
</Link>
```

Notice: **primary CTA uses `bg-ink` (near-black), not `bg-accent`**. Accent is used only for the single "key" CTA in the hero. This is counter-intuitive but it's what makes high-end B2B sites look editorial — the black button reads as confident; accent buttons read as e-commerce.

### 4.3 Secondary CTA button

```tsx
<Link className="inline-flex items-center gap-2 border border-warm-border
                 text-ink px-7 py-3.5 rounded-full text-sm font-medium
                 hover:border-ink transition-colors">
```

### 4.4 Eyebrow label

```tsx
<span className="inline-block text-[11px] font-semibold tracking-[0.16em] uppercase text-accent">
  Product Lineup
</span>
```

### 4.5 Chip / tag

```tsx
<span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                 bg-accent-soft text-accent text-[11px] font-semibold">
```

---

## 5. Iconography

- Use **inline SVG** with `strokeWidth={1.6}`, `strokeLinecap="round"`, `strokeLinejoin="round"`.
- Stroke color via `currentColor`, never hardcoded.
- Size: 14px (inside chips), 16px (body), 20–24px (cards), 32px+ (feature illustrations).
- **No emoji.** No decorative stars or sparkles.

---

## 6. Images

- Always `next/image` with explicit `fill` or `width`/`height`.
- Container: `relative rounded-xl overflow-hidden bg-warm-bg`.
- Default `object-cover` unless the asset is a product PNG with transparency, then `object-contain`.
- Add `className="transition-transform duration-500 group-hover:scale-[1.03]"` for interactive cards.

---

## 7. Framework Rules

- **Next.js 16.2** (App Router). Sections live in `src/components/<Name>Section.tsx`.
- **React 19**. Client components marked `"use client"`.
- **Tailwind v4** via `@import "tailwindcss"` + `@theme inline` in `globals.css`.
- **No component library** — raw Tailwind + tokens. Consistency via this doc.
- Scroll reveal animations via `useScrollAnimation` hook (existing). Do not reinvent.

---

## 8. Forbidden

To keep the professional feel, these are **always** wrong:
- `font-light` on body text (looks underweight on Korean type)
- Multiple accent colors in one viewport
- Decorative floating shapes that aren't part of content
- `shadow-md`/`shadow-lg` (too harsh)
- `rounded-lg` on cards (breaks radius rhythm)
- Arbitrary hex colors in JSX (use tokens)
- Emoji in UI strings

---

## 9. Checklist before shipping a section

- [ ] Uses `space-section` padding
- [ ] Uses eyebrow + H1 + lead title pattern
- [ ] Cards use `shadow-card`, `rounded-2xl`, `border-warm-border`
- [ ] No more than 2 accent-colored elements visible at once
- [ ] Body vs headline ratio ≥ 2.5×
- [ ] Alternating background follows the rhythm map
- [ ] Responsive: inspected at 375, 768, 1280, 1440
- [ ] No decorative shapes, no emoji, no custom shadows
