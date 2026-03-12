import data from "../data/data";
import { useSelector } from "react-redux";

export default function Contact() {
  const { lang } = useSelector((state) => state);
  const contact = data[lang].contact;

  return (
    <section className="py-16 md:py-20 bg-[#F9F9F9] dark:bg-[#252128]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl md:max-w-[45%] font-bold mb-10 md:mb-20 dark:text-[#AEBCCF] mx-auto md:mx-0">{contact.title}</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-base md:text-lg">
          <p className="text-[#AF0C48] dark:text-[#EA7B97] font-medium">
            👉 <a href={`mailto:${contact.email}`} className="underline hover:opacity-80">{contact.email}</a>
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-medium">
            <a href="#" className="dark:text-[#E1E1FF] hover:text-indigo-600 transition">{contact.blog}</a>
            <a className="text-[#00AB6B] hover:opacity-80 transition" href="#">{contact.github}</a>
            <a className="text-[#0077B5] hover:opacity-80 transition" href="https://www.linkedin.com/in/gozdekocer/">{contact.linkedin}</a>
          </div>
        </div>
      </div>
    </section>
  );
}