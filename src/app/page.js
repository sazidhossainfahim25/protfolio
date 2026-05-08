
import ProjectsPage from "./projects/page";
import AboutPage from "./about/page";
import Hero from "@/components/Hero";
import ContactPage from "./contact/page";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutPage />
      <ProjectsPage />
      <ContactPage/>
    </>
  );
}
