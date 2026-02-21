import projects from "@/constants/projects";
import ProjectColumn from "../ProjectColumn";

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 lg:px-0 px-5">
      <p className="lg:text-5xl md:text-4xl text-3xl font-bold mb-10 uppercase">
        Projects
      </p>
      <ProjectColumn projects={projects.slice(6)} />
    </div>
  );
};

export default Projects;
