import data from "../data/data";
import { useSelector} from "react-redux";


export default function Contact() {
  const { lang } = useSelector((state) => state);
  const contact = data[lang].contact;

  return (
    <section className="py-20 bg-[#F9F9F9]">
    <div className="max-w-7xl mx-auto px-10 ">
      <h2 className="text-3xl font-bold mb-6">
        {contact.title}
      </h2>

      <p className="text-[#AF0C48] mb-6">
        👉 {contact.email}
      </p>

      <div className="flex gap-6 text-sm">

        <a href="#" target="_blank"> {contact.blog} </a>

        <a className="text-[#00AB6B]" href="#" target="_blank"> {contact.github} </a>

        <a className="text-[#0077B5]" href="https://www.linkedin.com/in/gozdekocer/" target="_blank"> {contact.linkedin} </a>

      </div>
    </div>
    </section>
  );
}