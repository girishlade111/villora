export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  category: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const blogPostsData: BlogPost[] = [
  {
    id: "blog-1",
    slug: "enjoying-a-slow-morning-at-the-villa",
    title: "Enjoying a slow morning at the villa",
    excerpt: "Wake up to gentle ocean breezes, golden Mediterranean light, and the peaceful rhythm of coastal seclusion.",
    coverImage: "/assets/images/how-to-enjoy-a-slow-and-peaceful-morning-at-the-villa-thumbnail.webp",
    date: "November 14, 2026",
    readTime: "4 min read",
    category: "Lifestyle & Wellness",
    sections: [
      {
        heading: "Start the Day Slowly",
        paragraphs: [
          "Mornings at Villora Castle begin without alarm bells or urgency. As the first gentle beams of dawn illuminate the Pacific horizon, the only ambient sound is the soft murmur of ocean surf against the cove below and birdsong from our headland groves.",
          "Wrap yourself in fine linen robes, step onto your private stone terrace, and allow the crisp morning sea air to awaken your senses naturally."
        ]
      },
      {
        heading: "Breakfast With a View",
        paragraphs: [
          "Breakfast is an intimate, unhurried affair served at your leisure. Handcrafted pastries, freshly squeezed organic citrus from our estate orchards, and artisanal coffee brewed to perfection are presented overlooking the calm water.",
          "Take time to read, converse, or simply watch the distant sails move gracefully across the azure bay."
        ]
      },
      {
        heading: "Take Time to Relax",
        paragraphs: [
          "A leisurely morning allows you to pause and reconnect with what truly matters. Take a gentle morning swim in the heated infinity pool or stroll through the quiet coastal gardens before the warmth of the midday sun settles in."
        ]
      },
      {
        heading: "Make the Most of Every Moment",
        paragraphs: [
          "True luxury is the gift of time. By allowing your morning to unfold without rigid schedules, you enter a state of effortless flow that sets the tone for an idyllic day at the estate."
        ]
      }
    ]
  },
  {
    id: "blog-2",
    slug: "planning-the-perfect-villa-weekend",
    title: "Planning the perfect villa weekend",
    excerpt: "Essential tips and itinerary recommendations for crafting an unforgettable luxury retreat on the coast.",
    coverImage: "/assets/images/planning-the-perfect-villa-weekend-thumbnail.webp",
    date: "November 08, 2026",
    readTime: "5 min read",
    category: "Travel Guide",
    sections: [
      {
        heading: "Curate a Balanced Schedule",
        paragraphs: [
          "The secret to an extraordinary weekend escape lies in balancing curated experiences with ample unstructured freedom. Allow yourself dedicated afternoons without agenda to wander the private beach or lounge poolside with a book."
        ]
      },
      {
        heading: "Coordinate Private Gastronomy",
        paragraphs: [
          "Inform our resident culinary team of your preferences in advance. Whether you crave a sunset seafood tasting or a private garden brunch, bespoke dining elevates every moment of your residency."
        ]
      },
      {
        heading: "Engage the Concierge Early",
        paragraphs: [
          "From private skippered boat trips along coastal sea caves to specialized spa treatments, our concierge ensures your preferred appointments are seamlessly arranged before your arrival."
        ]
      }
    ]
  },
  {
    id: "blog-3",
    slug: "a-weekend-guide-to-your-villa-escape",
    title: "A weekend guide to your villa escape",
    excerpt: "Discover the hidden architectural nuances, scenic lookouts, and tranquil sanctuaries throughout the estate grounds.",
    coverImage: "/assets/images/a-weekend-guide-to-your-perfect-villa-escape-thumbnail.webp",
    date: "October 28, 2026",
    readTime: "6 min read",
    category: "Architecture & Design",
    sections: [
      {
        heading: "Architectural Harmony With Nature",
        paragraphs: [
          "Villora Castle was conceived as an organic extension of its dramatic headland topography. Warm limestone facades, terracotta tiling, and sweeping arches frame the coastal panorama without competing with the raw majesty of nature."
        ]
      },
      {
        heading: "Private Sanctuaries to Discover",
        paragraphs: [
          "Beyond the central residence lie intimate courtyard gardens, secluded cliffside pergolas, and meditative stone benches nestled within eucalyptus and lavender groves, each offering a distinct perspective on the ocean."
        ]
      }
    ]
  },
  {
    id: "blog-4",
    slug: "hidden-gems-to-explore-around-the-villa",
    title: "Hidden gems to explore around the villa",
    excerpt: "Explore secluded coves, ancient hiking trails, and artisanal local vineyards nestled in our surrounding valleys.",
    coverImage: "/assets/images/hidden-gems-to-explore-around-the-villa-thumbnail.webp",
    date: "October 16, 2026",
    readTime: "4 min read",
    category: "Local Exploration",
    sections: [
      {
        heading: "Secret Coastal Trails",
        paragraphs: [
          "Departing directly from the estate's south boundary, a scenic winding trail meanders along coastal cliffs to an undisturbed cove renowned for marine life, tidal pools, and absolute peace."
        ]
      },
      {
        heading: "Heritage Artisan Vineyards",
        paragraphs: [
          "Just fifteen minutes inland, explore family-owned boutique wineries crafting world-class organic varietals using sustainable centuries-old methods."
        ]
      }
    ]
  }
];
