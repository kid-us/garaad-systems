import { LucideIcon } from "lucide-react";

type Categories = "Company" | "Services" | "Insights" | "Connect";

export interface FooterType {
  name: string;
  category: Categories;
  path: string;
  icon?: string;
}

export interface SocialMedia {
  icon: LucideIcon;
  link: string;
}
