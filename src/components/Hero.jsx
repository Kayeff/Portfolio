import { projects } from "../projects";
import Project from "./Project";
import Section from "./Section";

export default function Hero() {
  return (
    <Section smallHeadingText="Hello you! I'm Kaif Saiyed, a front-end developer with passion in creating minimalist and performant solutions to websites.">
      <div className="w-full flex flex-col gap-2">
        <div className="w-full p-2 grid grid-cols-4 gap-3">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
        <div className="w-full flex items-center justify-end">
          <a href="" target="_blank" className="tracking-tight hover:underline">
            See Resume
          </a>
        </div>
      </div>
    </Section>
  );
}
