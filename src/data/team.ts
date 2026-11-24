export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const teamData: TeamMember[] = [
  {
    id: "team-1",
    name: "Alexander Morgan",
    role: "Principal Architect",
    image: "/assets/images/alexander-morgan.webp"
  },
  {
    id: "team-2",
    name: "Olivia Bennett",
    role: "Lead Interior Designer",
    image: "/assets/images/olivia-bennett.webp"
  },
  {
    id: "team-3",
    name: "Ethan Carter",
    role: "Senior Architect",
    image: "/assets/images/ethan-carter.webp"
  },
  {
    id: "team-4",
    name: "Sophia Reynolds",
    role: "Landscape Architect",
    image: "/assets/images/sophia-reynolds.webp"
  }
];
