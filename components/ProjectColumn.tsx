import { ProjectItem } from "@/types/projects-type";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectColumnProps {
  projects: ProjectItem[];
  hideBtn?: boolean;
}

const ProjectColumn: React.FC<ProjectColumnProps> = ({ projects, hideBtn }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-16">
        {projects.map((p) => (
          <Link
            href={p.liveUrl}
            target="_blank"
            key={p.id}
            className="group cursor-pointer"
          >
            <div className="w-full border border-primary group-hover:rounded group-hover:scale-105 transition-all duration-300 ease-in-out">
              <Image
                className={`h-56 md:h-80 object-contain ${p.imgSrc === "/images/somalia.png" && "scale-70"} `}
                src={p.imgSrc}
                alt={p.title}
                width={500}
                height={500}
              />
            </div>
            <h3 className="text-xl md:text-3xl font-semibold text-gray-900 mt-5">
              {p.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 mt-4">
              {p.description}
            </p>
            <Link
              href={p.liveUrl}
              target="_blank"
              className="text-blue-500 mt-4 md:text-lg font-semibold flex items-center group"
            >
              Learn More
              <ArrowRight className="ml-2 size-5 group-hover:ml-4 transition-all duration-300 ease-in-out" />
            </Link>
          </Link>
        ))}
      </div>

      {!hideBtn && (
        <div className="flex justify-center items-center mt-14">
          <Link
            href="/projects"
            className="mt-4 font-semibold flex items-center group border-2 border-primary px-5 py-3 text-secondary"
          >
            Browse All Projects
            <ArrowRight className="ml-2 size-5 group-hover:ml-4 transition-all duration-300 ease-in-out" />
          </Link>
        </div>
      )}
    </>
  );
};

export default ProjectColumn;
