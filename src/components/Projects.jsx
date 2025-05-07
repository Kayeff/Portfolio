import ProjectBar from "./ProjectBar";
import SmallHeading from "./SmallHeading";

const projects = [
  {
    id: 1,
    title: "King Chinese",
    href: "https://kayeff.github.io/King-Chinese/",
  },
  { id: 2, title: "Stallon Gym", href: "https://kayeff.github.io/Stallon/" },
  {
    id: 3,
    title: "Heart It Out",
    href: "https://kayeff.github.io/Heart-It-Out/",
  },
  {
    id: 4,
    title: "Valiant Prototype",
    href: "https://kayeff.github.io/Valiant-Frontend/",
  },
];

export default function Project({ ref }) {
  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen w-full flex items-center justify-center flex-col relative bg-[var(--background)] text-[var(--text)]"
    >
      <SmallHeading title={"Selected Projects"} />
      <div className="w-full flex items-start justify-center flex-col px-6 py-10">
        {projects.map((proj) => (
          <ProjectBar key={`project-${proj.id}`} project={proj} />
        ))}
      </div>
    </section>
  );
}
