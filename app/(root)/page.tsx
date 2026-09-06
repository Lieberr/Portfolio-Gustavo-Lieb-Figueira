import Contact from "@/components/shared/contact";
import Projects from "@/components/shared/projects";
import Skills from "@/components/shared/skills";
import About from "@/components/shared/about";
import Hero from "@/components/shared/hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
 
export default HomePage;