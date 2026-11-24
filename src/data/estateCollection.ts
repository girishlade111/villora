export interface EstateItem {
  id: string;
  title: string;
  caption: string;
  image: string;
}

export const estateCollectionData: EstateItem[] = [
  {
    id: "estate-1",
    title: "Strawberry field",
    caption: "Lush botanical gardens and heirloom organic strawberry orchards.",
    image: "/assets/images/strawberry-field.webp"
  },
  {
    id: "estate-2",
    title: "Garden estate",
    caption: "Manicured Mediterranean hedges framing secluded stone courtyards.",
    image: "/assets/images/garden-estate.webp"
  },
  {
    id: "estate-3",
    title: "Poolside haven",
    caption: "Heated infinity waters merging into the distant blue Pacific horizon.",
    image: "/assets/images/poolside-haven.webp"
  },
  {
    id: "estate-4",
    title: "Luxury retreat",
    caption: "Architectural symmetry designed for effortless coastal living.",
    image: "/assets/images/luxury-retreat.webp"
  },
  {
    id: "estate-5",
    title: "Coastal escape",
    caption: "Dramatic headland terraces catching the golden late-afternoon glow.",
    image: "/assets/images/coastal-escape.webp"
  },
  {
    id: "estate-6",
    title: "Private villa",
    caption: "The private residence offering quiet seclusion and understated luxury.",
    image: "/assets/images/private-villa.webp"
  }
];
