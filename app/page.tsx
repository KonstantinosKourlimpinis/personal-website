import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Dive from "@/components/Dive";
import Sustainability from "@/components/Sustainability";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="md:ml-56">
        <Hero />
        <Experience />
        <Projects />
        <Dive />
        <Sustainability />
        <About />
        <Contact />
      </main>
    </>
  );
}
