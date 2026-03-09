import data from "../data/data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Hero() {

  const { lang } = useSelector((state) => state);

  const hero = data[lang].heroSection;

  return (
    <section className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">

      <div>

        <h1 className="text-5xl font-bold mb-6 leading-tight">
          {hero.title}
        </h1>

        <p className="text-gray-600 mb-8">
          {hero.description}
        </p>

        <div className="flex gap-6">

          <button className="cursor-pointer bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500">
            {hero.hireBtn}
          </button>

          <a
            href="https://github.com/ggozdekocer"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-indigo-600 border px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-indigo-50"
          >
            <FaGithub />
            {hero.github}
          </a>

          <a
            href="https://www.linkedin.com/in/gozdekocer/"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-indigo-600 border px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-indigo-50"
          >
            <FaLinkedinIn />
            {hero.linkedin}
          </a>

        </div>

      </div>

      <img
        src={hero.profileImage}
        alt="hero"
        className="rounded-xl shadow-lg"
      />

    </section>
  );
}