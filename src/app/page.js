import Introduction from "./introduction/introduction";
import About from "./about/about";
import CustomIntro from "./custom-intro/customIntro";
import Project from "./project-showcase/projectShowcase";
import Footer from "./footer/footer";
import { WEB_PROJECTS, GAME_PROJECTS } from "./projects";

export default function Home() {
  return (
    <div>
      <Introduction />
      <About />

      <CustomIntro highlight="Web" content=" Development" />
      {WEB_PROJECTS.map((project, index) => (
        <Project key={index} {...project} />
      ))}

      <CustomIntro
        highlight="Game"
        highlightColor="text-red-400"
        content=" Development"
      />
      {GAME_PROJECTS.map((project, index) => (
        <Project urlColor="red" key={index} {...project} />
      ))}

      <Footer />
    </div>
  );
}
