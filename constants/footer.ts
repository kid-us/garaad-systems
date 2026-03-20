import { FooterType, SocialMedia } from "@/types/footer-types";
import { Linkedin, Github } from "lucide-react";

export const footerItems: FooterType[] = [
  // Company
  { category: "Company", name: "About Us", path: "/about-us" },
  { category: "Company", name: "Leadership", path: "/leadership" },
  { category: "Company", name: "Careers", path: "/careers" },
  { category: "Company", name: "Contact", path: "/contact" },
  // Services
  {
    category: "Services",
    name: "E-Government Solutions",
    path: "/projects#E-Government",
  },
  {
    category: "Services",
    name: "Digital Engineering",
    path: "/projects#DigitalEngineering",
  },
  {
    category: "Services",
    name: "Institutional Modernization",
    path: "/projects#Institutional",
  },
  {
    category: "Services",
    name: "Advisory & Strategy",
    path: "/contact-us#Advisory&Strategy",
  },
  // Insights
  {
    category: "Insights",
    name: "Blog",
    path: "/blog",
  },
  {
    category: "Insights",
    name: "Reports",
    path: "/reports",
  },
  {
    category: "Insights",
    name: "News",
    path: "/news",
  },
  // Connect
  {
    category: "Connect",
    name: "Linkedin",
    path: "#",
    icon: "",
  },
  {
    category: "Connect",
    name: "Facebook",
    path: "#",
    icon: "",
  },
  {
    category: "Connect",
    name: "X",
    path: "#",
    icon: "",
  },
];

export const socialMedias: SocialMedia[] = [
  { icon: Linkedin, link: "https://www.linkedin.com/company/garaad-creative/" },
  { icon: Github, link: "#Facebook" },
];
