# Component Architecture Guide

This project uses an **Atomic Design** approach for building UI components. Components are organized into four main layers, each serving a specific purpose.

## 📁 Directory Structure

```
app/components/
├── atoms/           # Basic building blocks
├── molecules/       # Combinations of atoms
├── organisms/       # Complex sections & layouts
└── index files      # Clean exports
```

## 🧩 Component Layers

### 1. **Atoms** (`/atoms`)

The smallest, most basic UI elements that cannot be broken down further without losing functionality.

- **Button.tsx** - Reusable button with variants (primary, secondary, outline)
- **Text.tsx** - Typography component for all text elements
- **Badge.tsx** - Label/tag component
- **Stat.tsx** - Statistical number display
- **Icon.tsx** - SVG icon component

**Usage:**

```tsx
import { Button, Text, Badge } from '@/components/atoms';

<Button variant="primary" size="md">Click me</Button>
<Text as="h1" size="3xl" weight="bold">Heading</Text>
<Badge variant="purple">New</Badge>
```

### 2. **Molecules** (`/molecules`)

Combinations of atoms that form simple, reusable components with specific functionality.

- **FeatureCard.tsx** - Card displaying feature with badge
- **StatBlock.tsx** - Statistics display block
- **TestimonialCard.tsx** - Testimonial/review card with rating
- **WhyCard.tsx** - Why section card with number and description
- **MentorCard.tsx** - Mentor profile card
- **FeatureListItem.tsx** - Feature list item with number and title

**Usage:**

```tsx
import { FeatureCard, TestimonialCard } from "@/components/molecules";

<FeatureCard
  title="Amazing Feature"
  description="This is awesome"
  badge="NEW"
/>;
```

### 3. **Organisms** (`/organisms`)

Complex components made from molecules and atoms. These are typically full sections of a page.

- **Navbar.tsx** - Top navigation bar
- **HeroSection.tsx** - Hero banner with headline and CTA
- **FeaturesSection.tsx** - Features showcase grid
- **WhySection.tsx** - Why choose us section
- **MasterclassesSection.tsx** - Expert masterclasses section
- **TestimonialsSection.tsx** - Testimonials/social proof section
- **Footer.tsx** - Footer with links and branding

**Usage:**

```tsx
import { HeroSection, FeaturesSection } from '@/components/organisms';

<HeroSection />
<FeaturesSection />
```

## 🎨 Styling

- **Framework:** Tailwind CSS v4
- **Responsive:** Mobile-first approach with Tailwind breakpoints (sm, md, lg)
- **Dark Mode:** Built-in dark mode support using `dark:` prefix

## 🔧 Component Props Pattern

All components follow a consistent prop pattern:

```tsx
interface ComponentProps {
  children?: React.ReactNode;
  className?: string; // For Tailwind overrides
  variant?: "primary" | "secondary"; // Style variants
  size?: "sm" | "md" | "lg"; // Size variants
}
```

## 🚀 Best Practices

1. **Keep Atoms Simple** - Atoms should be presentation-only with no business logic
2. **Compose with Molecules** - Use molecules to combine atoms into meaningful units
3. **Page-level Organization** - Use organisms to build full page sections
4. **Props Over Hardcoding** - Always use props to make components reusable
5. **Type Safety** - All components are TypeScript with proper interfaces

## 📝 Adding New Components

### To add a new Atom:

1. Create file in `/atoms/MyAtom.tsx`
2. Define TypeScript interface
3. Add to `/atoms/index.ts`

### To add a new Molecule:

1. Create file in `/molecules/MyMolecule.tsx`
2. Combine 1-3 atoms
3. Add to `/molecules/index.ts`

### To add a new Organism:

1. Create file in `/organisms/MyOrganism.tsx`
2. Combine molecules and atoms
3. Add to `/organisms/index.ts`

## 🔄 Import Structure

**Clean imports using barrel exports:**

```tsx
import { Button, Text } from "@/components/atoms";
import { FeatureCard } from "@/components/molecules";
import { HeroSection } from "@/components/organisms";
```

## 📱 Responsive Grid System

- **Mobile-first:** Default styles are mobile, then add sm, md, lg breakpoints
- **Grid classes:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Text sizing:** Auto-scales with Tailwind responsive prefixes

## 🌓 Dark Mode

All components support dark mode:

```tsx
<div className="bg-white dark:bg-black text-black dark:text-white">Content</div>
```

## 📚 Page Structure

The main page (`app/page.tsx`) composes organisms like building blocks:

```tsx
<Navbar />
<HeroSection />
<FeaturesSection />
<WhySection />
<MasterclassesSection />
<TestimonialsSection />
<Footer />
```

This architecture makes it easy to:

- ✅ Reuse components across pages
- ✅ Maintain consistent design
- ✅ Scale the application
- ✅ Test components in isolation
- ✅ Update components globally
