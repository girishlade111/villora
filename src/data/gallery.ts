export interface GalleryImage {
  id: string;
  title: string;
  image: string;
  aspect: string; // e.g. "aspect-[3/4]", "aspect-[4/5]", "aspect-[4/3]", "aspect-[1/1]"
  category: string;
}

export const galleryData: GalleryImage[] = [
  { id: "g-1", title: "Coastal Sunrise Shoreline", image: "/assets/images/gallery-01.webp", aspect: "aspect-[3/4]", category: "Coastline" },
  { id: "g-2", title: "Pastel Umbrella by Beach", image: "/assets/images/gallery-02.webp", aspect: "aspect-[4/5]", category: "Lifestyle" },
  { id: "g-3", title: "Secluded Shore Stroll", image: "/assets/images/gallery-03.webp", aspect: "aspect-[3/2]", category: "Coastline" },
  { id: "g-4", title: "Canoe on Alpine Lake", image: "/assets/images/gallery-04.webp", aspect: "aspect-[4/3]", category: "Activities" },
  { id: "g-5", title: "Soft Tide on White Sands", image: "/assets/images/gallery-05.webp", aspect: "aspect-[3/4]", category: "Coastline" },
  { id: "g-6", title: "Panoramic Villa Terrace", image: "/assets/images/gallery-06.webp", aspect: "aspect-[16/9]", category: "Architecture" },
  { id: "g-7", title: "Heirloom Orchard Harvest", image: "/assets/images/gallery-07.webp", aspect: "aspect-[3/4]", category: "Grounds" },
  { id: "g-8", title: "Verdant Estate Hills", image: "/assets/images/gallery-08.webp", aspect: "aspect-[4/5]", category: "Grounds" },
  { id: "g-9", title: "Seaside Twilight Bonfire", image: "/assets/images/gallery-09.webp", aspect: "aspect-[4/3]", category: "Evening" },
  { id: "g-10", title: "Stone Fire Pit Under Stars", image: "/assets/images/gallery-10.webp", aspect: "aspect-[3/4]", category: "Evening" },
  { id: "g-11", title: "Oceanfront Lounge Pavilion", image: "/assets/images/gallery-11.webp", aspect: "aspect-[4/5]", category: "Architecture" },
  { id: "g-12", title: "Minimalist Oceanview Studio", image: "/assets/images/gallery-12.webp", aspect: "aspect-[1/1]", category: "Interiors" },
  { id: "g-13", title: "Mountain Lake Tranquility", image: "/assets/images/gallery-13.webp", aspect: "aspect-[3/2]", category: "Activities" },
  { id: "g-14", title: "Sunset Gathering on Shore", image: "/assets/images/gallery-14.webp", aspect: "aspect-[4/5]", category: "Lifestyle" },
];
