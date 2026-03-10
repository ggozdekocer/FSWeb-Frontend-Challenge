import data from "../data/data";
import { useSelector } from "react-redux";

export default function Contact() {
  const { lang } = useSelector((state) => state);
  const contact = data[lang].contact;

  return (
    <section className="py-20 bg-[#F9F9F9] dark:bg-[#252128]">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-4xl max-w-[45%] font-bold mb-6 pb-20 dark:text-[#AEBCCF]">{contact.title}</h2>
        <div className="text-lg flex justify-between">
          <p className="text-[#AF0C48] dark:text-[#EA7B97] mb-6">
            👉 <a href={`mailto:${contact.email}`} className="underline hover:opacity-80">{contact.email}</a>
          </p>
          <div className="flex gap-6 text-lg">
            <a href="#" className="dark:text-[#E1E1FF]">{contact.blog}</a>
            <a className="text-[#00AB6B]" href="#">{contact.github}</a>
            <a className="text-[#0077B5]" href="https://www.linkedin.com/in/gozdekocer/">{contact.linkedin}</a>
          </div>
        </div>
      </div>
    </section>
  );
}