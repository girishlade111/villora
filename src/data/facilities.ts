export interface FacilityItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  thumbnailImage: string;
  featuredImage: string;
  highlights: string[];
  capacity: string;
  hours: string;
}

export const facilitiesData: FacilityItem[] = [
  {
    id: "facility-1",
    slug: "large-pool",
    title: "Large pool",
    summary: "Enjoy refreshing swims and relaxing moments beside our heated infinity swimming pool.",
    description: "Discover the pleasure of swimming in Villora's spacious large pool. Enjoy refreshing water, peaceful surroundings, and a relaxing atmosphere designed for leisure, recreation, and unforgettable moments. Whether taking a refreshing dip or unwinding beside the pool, experience the perfect coastal escape.",
    thumbnailImage: "/assets/images/large-pool-thumbnail.webp",
    featuredImage: "/assets/images/large-pool-featured.webp",
    highlights: ["Panoramic ocean vistas", "Solar-temperature climate control", "Private sun loungers & parasols", "Dedicated poolside refreshment service"],
    capacity: "Exclusive for in-house guests",
    hours: "06:00 – 22:00 Daily",
  },
  {
    id: "facility-2",
    slug: "private-beach",
    title: "Private beach",
    summary: "A tranquil sandy sanctuary secluded from public access, bordered by turquoise coastal waters.",
    description: "Step directly onto untouched golden sands reserved exclusively for villa guests. Relax under handcrafted shade cabanas, wander the natural shoreline, and let the gentle rhythm of the Pacific wash away all outside distractions.",
    thumbnailImage: "/assets/images/private-beach-thumbnail.webp",
    featuredImage: "/assets/images/large-pool-featured.webp",
    highlights: ["Direct beach pathway access", "Private cabana daybeds", "Complimentary paddleboards & beach kit", "Secluded natural barrier headlands"],
    capacity: "Private estate access",
    hours: "Sunrise to Sunset",
  },
  {
    id: "facility-3",
    slug: "fine-dining",
    title: "Fine dining",
    summary: "Gourmet coastal culinary artistry crafted by private master chefs with organic estate ingredients.",
    description: "Experience world-class gastronomy in an open-air stone terrace overlooking the sea. Our culinary philosophy celebrates seasonal harvests from our gardens, locally caught ocean seafood, and curated regional wines tailored to your individual taste.",
    thumbnailImage: "/assets/images/fine-dining-thumbnail.webp",
    featuredImage: "/assets/images/large-pool-featured.webp",
    highlights: ["Bespoke tasting menus", "Farm-to-table organic produce", "Sommelier-curated wine cellar", "Private romantic terrace seating"],
    capacity: "Reservations for up to 16 guests",
    hours: "Breakfast, Lunch & Dinner by reservation",
  },
  {
    id: "facility-4",
    slug: "wellness-spa",
    title: "Wellness & spa",
    summary: "Holistic rejuvenation, soothing botanical rituals, and custom thermal wellness treatments.",
    description: "Unwind your body and mind in our serene botanical sanctuary. Featuring natural essential oils, eucalyptus steam rooms, outdoor cedar soaking tubs, and expert massage therapists dedicated to total sensory tranquility.",
    thumbnailImage: "/assets/images/wellness-&-spa-thumbnail.webp",
    featuredImage: "/assets/images/large-pool-featured.webp",
    highlights: ["Aromatherapy and hot stone rituals", "Cedarwood Finnish dry sauna", "Cold plunge bath and herbal steam", "Organic botanical skincare therapies"],
    capacity: "Private treatment suites",
    hours: "09:00 – 20:00 Daily",
  },
  {
    id: "facility-5",
    slug: "fitness-center",
    title: "Fitness center",
    summary: "Minimalist ocean-view movement studio with state-of-the-art training and yoga equipment.",
    description: "Maintain your physical vitality in an airy, sunlit fitness pavilion. Complete with ergonomic training weights, cardio equipment, Pilates reformers, and floor-to-ceiling glass doors opening onto maritime cliffside gardens.",
    thumbnailImage: "/assets/images/fitness-center-thumbnail.webp",
    featuredImage: "/assets/images/large-pool-featured.webp",
    highlights: ["Floor-to-ceiling panoramic glass", "Technogym cardiovascular equipment", "Pilates reformers and yoga props", "Private trainer sessions available"],
    capacity: "Private access",
    hours: "24/7 Keycard access",
  },
  {
    id: "facility-6",
    slug: "private-suites",
    title: "Private suites",
    summary: "Expansive residential suites featuring king beds, travertine bathrooms, and panoramic terraces.",
    description: "Every suite at Villora Castle is an architectural masterwork of understated elegance. Custom-built hardwood furniture, fine Belgian linens, floor-to-ceiling sea views, and expansive private sun terraces offer unmatched personal privacy.",
    thumbnailImage: "/assets/images/private-suites-thumbnail.webp",
    featuredImage: "/assets/images/large-pool-featured.webp",
    highlights: ["Custom California King featherbeds", "Freestanding stone bathtubs", "Expansive oceanfront terrace", "High-fidelity sound & integrated climate control"],
    capacity: "Up to 4 guests per suite",
    hours: "24/7 Butler & concierge support",
  },
];
