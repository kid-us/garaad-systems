import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Services from "@/components/home/services";
import ScrollToSection from "@/components/ScrollToSection";

export default function Home() {
  return (
    <main className="">
      <ScrollToSection />
      <Hero />
      <Services />
      <Projects />
    </main>
  );
}
