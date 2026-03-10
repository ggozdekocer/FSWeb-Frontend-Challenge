import data from "../data/data";
import { useSelector } from "react-redux";

export default function Skills() {
  const { lang } = useSelector((state) => state);
  const skillsTitle = data[lang].skillsTitle;
  const skills = data[lang].skills;

  return (
    <section className="max-w-7xl mx-auto px-10 py-16">
      <h2 className="text-3xl font-bold mb-10 dark:text-[#AEBCCF]">{skillsTitle.title}</h2>
      <div className="grid md:grid-cols-3 gap-20">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="text-indigo-600 dark:text-[#8F88FF] text-lg font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-500 dark:text-white text-m">{skill.description}</p>
          </div>
        ))}
      </div>
      <hr className="border-[#BAB2E7] dark:border-gray-700 mt-12"/>
    </section>
  );
}