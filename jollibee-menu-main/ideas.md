# Jollibee Menu Website - Design Philosophy

## Selected Approach: **Vibrant Fast-Food Energy with Playful Sophistication**

### Design Movement
**Contemporary Fast-Casual with Filipino Warmth** — A blend of modern minimalism with bold, energetic accents that reflect Jollibee's playful brand personality and Filipino hospitality.

### Core Principles
1. **Bold Simplicity**: Clean layouts with strategic visual weight—large food imagery dominates, supporting elements recede
2. **Joyful Energy**: The red-yellow-white palette radiates warmth and appetite appeal; animations feel snappy and delightful, not corporate
3. **Food-First Hierarchy**: Every design decision prioritizes showcasing the food—generous image areas, minimal text clutter
4. **Accessible Playfulness**: Rounded corners, friendly typography, and micro-interactions create approachability without sacrificing professionalism

### Color Philosophy
- **Primary Red (#E31937)**: Jollibee's signature—used for CTAs, highlights, and accents that demand attention
- **Vibrant Yellow (#FFD200)**: Energy and appetite stimulation; used for badges, highlights, and secondary CTAs
- **Clean White (#FFFFFF)**: Breathing room and food showcase background
- **Warm Gray (#F5F5F5)**: Subtle container backgrounds that don't compete with food
- **Dark Charcoal (#1F2937)**: Text and structural elements for readability

**Emotional Intent**: The palette should feel celebratory and inviting—like walking into a bustling Jollibee store during a family gathering.

### Layout Paradigm
- **Hero-Driven Homepage**: Large, full-width hero banner featuring a hero food image with minimal text overlay
- **Asymmetric Menu Grid**: Food cards arranged in a responsive masonry-like grid (not uniform rows) to create visual rhythm
- **Sticky Navigation**: Top navbar remains accessible; cart icon is always visible and prominent
- **Floating Action Elements**: Cart badge, floating checkout button on mobile—never hidden or hard to find

### Signature Elements
1. **Playful Food Cards**: Rounded corners (lg radius), subtle shadow on hover, yellow accent stripe or badge for specials
2. **Jollibee Bee Mascot Accent**: Small bee icon or silhouette used as a decorative element in headers or special sections
3. **Warm Shadows & Depth**: Soft drop shadows on cards create depth; hover effects lift cards slightly for tactile feedback

### Interaction Philosophy
- **Snappy Feedback**: Buttons respond immediately with color changes and scale transforms
- **Delightful Micro-interactions**: Adding to cart triggers a brief celebration animation; modals slide in smoothly
- **Intuitive Navigation**: Category filters are obvious; current selection is clearly highlighted
- **Mobile-First Interactions**: Large touch targets, sticky cart button, swipeable category tabs on small screens

### Animation Guidelines
- **Entrance Animations**: Cards fade in and slide up slightly as the page loads (staggered for visual interest)
- **Hover Effects**: Food cards scale up 1.02x and shadow deepens on hover; buttons shift color and scale 0.98x on press
- **Modal Transitions**: Modals slide up from bottom on mobile, fade in from center on desktop
- **Cart Feedback**: Item count badge pulses when item is added; checkout button has a subtle pulse when cart is non-empty
- **Page Transitions**: Smooth fade transitions between pages (100-150ms)

### Typography System
- **Display Font**: **Poppins Bold** (700) for headings (hero title, section titles, category names)
  - Creates strong visual hierarchy and modern energy
  - Paired with Poppins SemiBold (600) for subheadings
- **Body Font**: **Inter Regular** (400) for descriptions and body text
  - Clean, readable, professional
  - Paired with Inter Medium (500) for labels and buttons
- **Hierarchy Rules**:
  - Hero Title: Poppins 700, 48px (desktop) / 32px (mobile)
  - Section Title: Poppins 700, 32px (desktop) / 24px (mobile)
  - Card Title: Poppins 600, 18px
  - Body Text: Inter 400, 14-16px
  - Button Text: Inter 600, 14px

---

## Design Implementation Checklist
- [ ] Homepage hero with large food image and minimal text overlay
- [ ] Food cards with rounded corners, shadows, and yellow accent badges
- [ ] Sticky navbar with prominent cart icon
- [ ] Responsive grid layout (3 columns desktop, 2 tablet, 1 mobile)
- [ ] Smooth hover animations on cards and buttons
- [ ] Modal for food details with add-to-cart flow
- [ ] Floating cart button on mobile
- [ ] Entrance animations for page load
- [ ] Color contrast verified for accessibility
- [ ] All interactive elements have clear hover/active states
