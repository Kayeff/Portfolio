import ProjectBar from "./ProjectBar";
import SmallHeading from "./SmallHeading";

const projects = [
  { id: 1, title: "King Chinese", href: "#" },
  { id: 2, title: "Stallon Gym", href: "#" },
  { id: 3, title: "Kunafa World", href: "#" },
];

export default function Project() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center flex-col relative bg-night text-rich-grey">
      <SmallHeading title={"Selected Projects"} />
      <div className="h-full w-full flex items-start justify-center flex-col px-6 py-10 laptop:w-full">
        {projects.map((proj) => (
          <ProjectBar key={`project-${proj.id}`} project={proj} />
        ))}
      </div>
    </section>
  );
}
