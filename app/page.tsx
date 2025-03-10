import About from "@/components/about";
import AnimationBanner from "@/components/animationBanner";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <AnimationBanner />
    </main>
  );
}
