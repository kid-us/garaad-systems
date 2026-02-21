import ProjectColumn from "@/components/ProjectColumn";
import projects from "@/constants/projects";

const ProjectsPage = () => {
  return (
    <div className="flex= items-center justify-center lg:py-32 py-24">
      <div className="max-w-6xl mx-auto lg:px-0 px-5">
        <div className="max-w-2xl mx-auto">
          <p className="text-center font-extrabold lg:text-[80px] md:text-[70px] text-[50px] lg:leading-16 leading-10">
            Projects
          </p>
        </div>

        <div className="mt-14 space-y-5">
          <p className="lg:text-xl md:text-lg text-base">
            Garaad Systems delivers impactful digital transformation and
            institutional modernization initiatives across the public and
            private sectors in Ethiopia and the Horn of Africa. Our projects
            demonstrate how strategic design, technology, and institutional
            reform can improve service delivery, operational efficiency, and
            governance outcomes.
          </p>
        </div>

        <p className="mt-10 lg:text-4xl md:text-3xl text-2xl font-bold mb-10">
          Featured Projects
        </p>

        <ProjectColumn projects={projects} hideBtn />
      </div>
    </div>
  );
};

export default ProjectsPage;
