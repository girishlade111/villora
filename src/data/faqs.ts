export interface FAQItem {
  id: string;
  category: "Villa" | "Location" | "Booking";
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  // Villa
  {
    id: "faq-villa-1",
    category: "Villa",
    question: "How many people can stay in the villa?",
    answer: "Our villa welcomes families, couples, and groups. Capacity varies by suite configuration, hosting up to 16 guests comfortably. Please contact our concierge team with your requested dates to confirm the best accommodation options for your stay."
  },
  {
    id: "faq-villa-2",
    category: "Villa",
    question: "What materials is the villa made from?",
    answer: "Our villas blend timeless Mediterranean coastal architecture with handcrafted limestone, warm natural terracotta, imported Belgian linens, and sustainable timber finishes. Contact our team for detailed architectural specifications."
  },
  {
    id: "faq-villa-3",
    category: "Villa",
    question: "Can small kids stay in the villa?",
    answer: "Yes, children are warmly welcome. Our villa offers a relaxing and secure environment for families to spend quality time together. Ask our concierge about our child-friendly amenities, baby equipment, and poolside safety provisions."
  },
  {
    id: "faq-villa-4",
    category: "Villa",
    question: "Do toilets have bathtub?",
    answer: "All bathrooms are designed for supreme comfort, with modern walk-in rain showers, dual vanities, and premium amenities. Freestanding stone soaking bathtubs with ocean views are available in our primary suites."
  },
  {
    id: "faq-villa-5",
    category: "Villa",
    question: "Do you allow pets?",
    answer: "Please contact our team before finalizing your booking if you plan to bring a pet. Our concierge will share our dedicated pet guidelines, suitable suite locations, and applicable care arrangements."
  },

  // Location
  {
    id: "faq-loc-1",
    category: "Location",
    question: "Where is Villora located?",
    answer: "Villora Castle is nestled in a secluded coastal estate along Pacific Coast Highway in Malibu, California, offering an undisturbed private sanctuary surrounded by dramatic ocean panoramas and rolling green hills."
  },
  {
    id: "faq-loc-2",
    category: "Location",
    question: "How can I get to Villora?",
    answer: "Villora is easily accessible by private vehicle via Pacific Coast Highway, with gated secure parking on site. Private airport chauffeur transfers from LAX or private helipad arrivals can be arranged upon request."
  },
  {
    id: "faq-loc-3",
    category: "Location",
    question: "Is Villora close to the beach?",
    answer: "Yes, the estate boasts direct, private stair access down to our secluded sandy beach cove, ensuring guests can transition effortlessly from poolside terraces to ocean sands within minutes."
  },
  {
    id: "faq-loc-4",
    category: "Location",
    question: "Are there restaurants and attractions nearby?",
    answer: "While Villora provides full private culinary services, world-renowned Malibu dining destinations, scenic wine tasting rooms, and state park hiking trails are situated just 10 to 20 minutes from the gates."
  },
  {
    id: "faq-loc-5",
    category: "Location",
    question: "Can I get directions before my arrival?",
    answer: "Absolutely. Our concierge sends a comprehensive arrival package with private gate entry codes, GPS routing, and customized greeting details 48 hours prior to your scheduled check-in."
  },

  // Booking
  {
    id: "faq-book-1",
    category: "Booking",
    question: "How can I book a stay at Villora?",
    answer: "You can initiate your reservation inquiry directly through our booking form on this website or by contacting our reservations desk. We recommend reserving well in advance to secure your preferred dates."
  },
  {
    id: "faq-book-2",
    category: "Booking",
    question: "Can I modify or cancel my booking?",
    answer: "Yes, modifications and cancellations are handled flexibly according to your reservation tier. Please review your booking agreement terms or contact our reservations coordinator for personalized support."
  },
  {
    id: "faq-book-3",
    category: "Booking",
    question: "Is a deposit required to confirm my booking?",
    answer: "A standard reservation deposit of 50% is required to secure your exclusive estate dates, with the balance due 30 days prior to arrival. Our team provides clear invoicing and secure payment methods."
  },
  {
    id: "faq-book-4",
    category: "Booking",
    question: "What payment methods do you accept?",
    answer: "We accept all major international credit cards, verified bank wire transfers, and direct institutional payments to ensure smooth, secure transactions."
  },
  {
    id: "faq-book-5",
    category: "Booking",
    question: "When will I receive my booking confirmation?",
    answer: "Once your inquiry is verified and deposit confirmed, you will immediately receive an official Villora reservation confirmation dossier with full itinerary and concierge contact numbers."
  }
];
