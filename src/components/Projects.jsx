import data from "../data/data";
import { useSelector } from "react-redux";

export default function Projects() {
  const { lang } = useSelector((state) => state);
  const projects = data[lang].projects;
  const projectsDetail = data[lang].projectsDetail;

  return (
    <section className="max-w-7xl mx-auto px-10 py-16">
      <h2 className="text-3xl font-bold mb-12 dark:text-[#AEBCCF]">{projectsDetail.header}</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-[#2D2C34] rounded-xl shadow-sm overflow-hidden transition-colors">
            <img src={project.image} alt={project.title} className="w-full object-cover" />
            <div className="p-5">
              <h3 className="text-indigo-600 dark:text-[#CFCBFF] text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-white mb-4">{project.description}</p>
              <div className="flex gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-indigo-600 dark:text-[#8F88FF] text-xs border border-indigo-600 dark:border-[#8F88FF] px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="underline flex justify-between gap-4 text-sm text-indigo-600 dark:text-[#E1E1FF]">
                <a href={project.github} target="_blank" rel="noreferrer">Github</a>
                <a href={project.site} target="_blank" rel="noreferrer">{projectsDetail.viewSite}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}