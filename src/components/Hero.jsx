import data from "../data/data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from 'react-toastify';

export default function Hero() {
  const { lang, darkMode } = useSelector((state) => state);
  const hero = data[lang].heroSection;

  const handleHireMe = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "Hire Me Request",
        body: "Request from Hero section",
        userId: 1,
      }) 
      .then((response) => {
        if (response.status === 201) {
          
          toast.success(lang === "tr" ? "Mesajınız başarıyla iletildi! 🚀" : "Message sent successfully! 🚀", {
            theme: darkMode ? "dark" : "light",
            style: { 
              backgroundColor: darkMode ? "#383344" : "#f2e6ff", 
              color: darkMode ? "#8F88FF" : "#4f46e5" 
            }
          });
          console.log("Hero API Success:", response.data);
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
        toast.error(lang === "tr" ? "Bir hata oluştu!" : "An error occurred!");
      });
  };

  return (
    <section className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-12 items-center py-10">
      <div>
        <h1 className="text-5xl font-bold mb-6 leading-tight dark:text-[#AEBCCF]">
          {hero.title}
        </h1>
        <p className="text-gray-600 dark:text-white mb-8">
          {hero.description}
        </p>
        <div className="flex gap-6">
          <button 
          onClick={handleHireMe}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition">
            {hero.hireBtn}
          </button>
          <a 
          href="https://github.com/ggozdekocer" 
          target="_blank" 
          rel="noreferrer" 
          className="text-indigo-600 dark:text-[#E1E1FF] md:flex-none justify-center border dark:border-[#E1E1FF] px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-indigo-50 dark:hover:bg-gray-800 transition">
            <FaGithub /> {hero.github}
          </a>
          <a 
          href="https://www.linkedin.com/in/gozdekocer/" 
          target="_blank" 
          rel="noreferrer" 
          className="text-indigo-600 dark:text-[#E1E1FF] md:flex-none justify-center border dark:border-[#E1E1FF] px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-indigo-50 dark:hover:bg-gray-800 transition">
            <FaLinkedinIn /> {hero.linkedin}
          </a>
        </div>
      </div>
      <img 
      src={hero.profileImage} 
      alt="hero" 
      className="rounded-xl shadow-xl dark:opacity-90" />
    </section>
  );
}