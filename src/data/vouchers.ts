export interface VoucherItem {
  id: string;
  slug: string;
  title: string;
  price: string;
  priceNumeric: number;
  subtitle: string;
  summary: string;
  description: string;
  image: string;
  guests: string;
  validity: string;
  inclusions: string[];
  howItWorks: { step: string; title: string; desc: string }[];
}

export const vouchersData: VoucherItem[] = [
  {
    id: "voucher-1",
    slug: "sunset-dinner",
    title: "Sunset dinner",
    price: "From $120",
    priceNumeric: 120,
    subtitle: "A romantic sunset dinner by the coastal terrace with bespoke chef menus.",
    summary: "Indulge in an enchanting culinary journey as dusk falls over the Pacific ocean.",
    description: "Treat someone special to an unforgettable 4-course seaside dinner prepared by our resident culinary chef. Includes vintage wine pairing, private table dressing on the sunset terrace, and personalized dietary menus.",
    image: "/assets/images/fine-dining-thumbnail.webp",
    guests: "2 Guests",
    validity: "12 Months from purchase",
    inclusions: [
      "4-Course customized gourmet tasting menu",
      "Curated fine regional wine or botanical pairings",
      "Exclusive private terrace seating at sunset",
      "Dedicated butler and sommelier service"
    ],
    howItWorks: [
      { step: "01", title: "Select your voucher", desc: "Choose the sunset dinner experience and complete the booking enquiry." },
      { step: "02", title: "Receive digital gift pass", desc: "A personalized luxury gift voucher is prepared for you or your recipient." },
      { step: "03", title: "Reserve your date", desc: "Contact our concierge anytime within 12 months to select your preferred evening." },
      { step: "04", title: "Enjoy the experience", desc: "Arrive at Villora Castle for an exquisite dining evening overlooking the ocean." }
    ]
  },
  {
    id: "voucher-2",
    slug: "spa-wellness",
    title: "Spa & wellness",
    price: "From $299",
    priceNumeric: 299,
    subtitle: "Full-day rejuvenation pass including deep thermal hydrotherapy and botanical massage.",
    summary: "Rebalance body and mind with our signature holistic wellness day package.",
    description: "Immerse in full sensory serenity with restorative body massages, custom organic facial therapies, cedar dry saunas, and cliffside infinity hydro-plunges amidst natural gardens.",
    image: "/assets/images/wellness-&-spa-thumbnail.webp",
    guests: "1–2 Guests",
    validity: "12 Months from purchase",
    inclusions: [
      "90-Minute signature botanical aromatherapy massage",
      "Access to eucalyptus steam, sauna, and cold plunge",
      "Organic cold-pressed juices and artisan herbal tea service",
      "Private cliffside relaxation pavilion reservation"
    ],
    howItWorks: [
      { step: "01", title: "Select wellness package", desc: "Confirm the spa & wellness voucher option for single or couple retreat." },
      { step: "02", title: "Receive voucher package", desc: "Delivered immediately via digital card or physical keepsake card." },
      { step: "03", title: "Schedule treatments", desc: "Consult our wellness coordinator to tailor therapists and preferences." },
      { step: "04", title: "Immerse in tranquility", desc: "Spend a revitalizing day unwinding along our coastal sanctuary." }
    ]
  },
  {
    id: "voucher-3",
    slug: "weekend-escape",
    title: "Weekend escape",
    price: "From $499",
    priceNumeric: 499,
    subtitle: "Two-night coastal residency in a private sea-facing terrace suite.",
    summary: "The ultimate luxury getaway featuring suite accommodation, gourmet breakfasts, and pool access.",
    description: "Experience the complete enchantment of Villora Castle with a curated weekend residency. Enjoy luxurious suite accommodation, daily champagne farm breakfasts, private beach access, and personalized concierge attention.",
    image: "/assets/images/private-suites-thumbnail.webp",
    guests: "2 Guests",
    validity: "12 Months from purchase",
    inclusions: [
      "2 Nights in an Oceanfront Terrace Suite",
      "Daily gourmet farm-to-table breakfast served on terrace",
      "Complimentary bottle of reserve champagne upon arrival",
      "Unlimited access to infinity pool, sauna, and private beach"
    ],
    howItWorks: [
      { step: "01", title: "Choose residency", desc: "Select the weekend escape voucher for a bespoke vacation escape." },
      { step: "02", title: "Receive reservation token", desc: "Secure voucher delivered with unique redemption credentials." },
      { step: "03", title: "Coordinate itinerary", desc: "Our concierge assists in selecting your preferred weekend dates." },
      { step: "04", title: "Check-in to paradise", desc: "Arrive at Villora for an unforgettable weekend of quiet luxury." }
    ]
  }
];
