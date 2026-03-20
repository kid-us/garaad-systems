import { ProjectsList } from "@/types/projects-type";

export const projects: ProjectsList = [
  {
    id: "p-001",
    title: "Masaf",
    description:
      "Empowering Youth. Expanding Opportunity. Building Resilient Communities.",
    imgSrc: "/images/masaf.png",
    tags: ["e-government", "identity", "platform"],
    liveUrl: "https://masaf.co",
    featured: true,
  },
  {
    id: "p-002",
    title: "Flayease",
    description: "Exploring the World, One Dream at a Time!",
    imgSrc: "/images/flayease-logo.png",
    tags: ["e-government", "identity", "platform"],
    liveUrl: "https://flyease.co.ke",
    featured: true,
  },
  {
    id: "p-003",
    title: "Mahadho",
    description:
      "A Dynamic Platform Showcasing Somali Culture, Literature, and Social Insights",
    imgSrc: "/images/madasha-mahadho.png",
    tags: ["e-government", "identity", "platform"],
    liveUrl: "https://mahadho.com",
    featured: true,
  },
  {
    id: "p-004",
    title:
      "Somali Regional Government Urban Development and Construction Bureau",
    description: "License Registration Portal",
    imgSrc: "/images/somalia.png",
    tags: ["e-government", "identity", "platform"],
    liveUrl: "https://fe-crlis-somali.vercel.app",
    featured: true,
  },
];

export default projects;
