export interface ActivityItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  thumbnailImage: string;
  featuredImage: string;
  duration: string;
  bestTime: string;
  location: string;
  availability: string;
  difficulty: string;
  experience: string;
  idealFor: string;
}

export const activitiesData: ActivityItem[] = [
  {
    id: "activity-1",
    slug: "sunset-beach-walks",
    title: "Sunset beach walks",
    summary: "A romantic and scenic coastal walking experience along the private shoreline of Villora.",
    description: "Take in the serene beauty of the coastline as the sun dips below the horizon. The golden sands and gentle evening tide offer a peaceful escape, perfect for reflective strolls, romantic memories, and catching the evening sea breeze in secluded privacy.",
    thumbnailImage: "/assets/images/sunset-beach-walks-thumbnail.webp",
    featuredImage: "/assets/images/sunset-beach-walks-featured.webp",
    duration: "45–60 Minutes",
    bestTime: "Late Afternoon & Sunset",
    location: "Villora Private Shoreline",
    availability: "Daily upon request",
    difficulty: "Easy",
    experience: "Guided or self-paced scenic coastal walk",
    idealFor: "Couples, Solitary Thinkers & Nature Lovers",
  },
  {
    id: "activity-2",
    slug: "private-boat-trips",
    title: "Private boat trips",
    summary: "Exclusive luxury yacht and private ocean exploration across turquoise coastal waters.",
    description: "Embark on an unforgettable ocean voyage from our private dock. Glide through sheltered coves, explore secluded sea caves, and toast to the golden hour with vintage champagne on the open deck under the coastal sky.",
    thumbnailImage: "/assets/images/private-boat-trips-thumbnail.webp",
    featuredImage: "/assets/images/private-boat-trips-featured.webp",
    duration: "2–4 Hours",
    bestTime: "Morning or Late Afternoon",
    location: "Villora Marina & Coastal Coves",
    availability: "Weather permitting, booking required",
    difficulty: "Relaxed",
    experience: "Private skippered luxury vessel excursion",
    idealFor: "Families, Small Groups & Romance",
  },
  {
    id: "activity-3",
    slug: "beach-bonfire",
    title: "Beach bonfire",
    summary: "An intimate evening gathering around a glowing hearth by the gentle ocean surf.",
    description: "As dusk transitions into twilight, gather beside a crackling beachfront bonfire. Handcrafted rattan seating, plush cashmere blankets, artisan cocktails, and the tranquil rhythm of the tide create an unforgettable twilight atmosphere.",
    thumbnailImage: "/assets/images/beach-bonfire-thumbnail.webp",
    featuredImage: "/assets/images/beach-bonfire-featured.webp",
    duration: "2–3 Hours",
    bestTime: "Twilight & Evening",
    location: "South Cove Bonfire Circle",
    availability: "Nightly with advance notice",
    difficulty: "Effortless",
    experience: "Fireside gathering with artisan refreshments",
    idealFor: "Friends, Families & Celebrations",
  },
  {
    id: "activity-4",
    slug: "farm-visit",
    title: "Farm visit",
    summary: "Experience the lush estate orchards, organic agro-gardens, and sustainable countryside estate.",
    description: "Stroll through Villora's sustainable organic orchards, fruit groves, and gentle pastureland. Sample seasonal botanical harvests, handpick heirloom citrus, and connect with the heritage agricultural traditions that nurture the villa's table.",
    thumbnailImage: "/assets/images/farm-visit-thumbnail.webp",
    featuredImage: "/assets/images/farm-visit-featured.webp",
    duration: "1.5–2 Hours",
    bestTime: "Morning or Early Afternoon",
    location: "Villora Organic Estate Gardens",
    availability: "Daily tours available",
    difficulty: "Easy walking",
    experience: "Guided horticultural and farm walk",
    idealFor: "All ages, Gastronomy Enthusiasts",
  },
  {
    id: "activity-5",
    slug: "fishing-in-lake",
    title: "Fishing in lake",
    summary: "Quiet reflection, natural tranquility, and catch-and-release fishing on our pristine freshwater lake.",
    description: "Framed by misty hills and eucalyptus groves, the villa lake offers exceptional freshwater angling and serene boat drifting. Whether you are an experienced fly fisherman or looking for quiet meditative moments on the dock, the lake welcomes you.",
    thumbnailImage: "/assets/images/fishing-in-lake-thumbnail.webp",
    featuredImage: "/assets/images/fishing-in-lake-featured.webp",
    duration: "2–3 Hours",
    bestTime: "Dawn or Early Morning",
    location: "The North Lake & Wooden Pier",
    availability: "Daily, equipment provided",
    difficulty: "Low to Moderate",
    experience: "Sport fishing with personal tackle guide",
    idealFor: "Outdoor Enthusiasts & Tranquil Escapes",
  },
];
