import data from "../data/data";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Navbar() {
  const { lang, darkMode } = useSelector((state) => state);
  const dispatch = useDispatch();
  const nav = data[lang].navbar;

  const handleHireMe = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "Hire Me Request",
        sender: "Navbar Button",
        language: lang
      })
      .then((response) => {
        if (response.status === 201) {
          toast.success(lang === "tr" ? "Mesajınız başarıyla iletildi! 🚀" : "Message sent successfully! 🚀", {
            theme: darkMode ? "dark" : "light",
          });
          console.log("Navbar API Success:", response.data);
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
        toast.error(lang === "tr" ? "Bir hata oluştu!" : "An error occurred!");
      });
  };

  const toggleLanguage = () => {
    const nextLang = lang === "eng" ? "tr" : "eng";
    dispatch({ type: "SET_LANG", payload: nextLang });

    const message = nextLang === "tr" 
      ? "Dil Türkçe olarak değiştirildi ✅" 
      : "Language switched to English ✅";
    
    toast(message, {
      theme: darkMode ? "dark" : "light",
      style: { 
        backgroundColor: darkMode ? "#383344" : "#f2e6ff", 
        color: darkMode ? "#8F88FF" : "#4f46e5" 
      }
    });
  };

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    dispatch({ type: "SET_DARKMODE", payload: nextMode });

    const message = nextMode 
      ? (lang === "tr" ? "Karanlık mod aktif 🌙" : "Dark mode active 🌙")
      : (lang === "tr" ? "Aydınlık mod aktif ☀️" : "Light mode active ☀️");

    toast(message, {
      theme: nextMode ? "dark" : "light",
      style: { 
        backgroundColor: nextMode ? "#383344" : "#ffffff", 
        color: nextMode ? "#8F88FF" : "#4f46e5" 
      }
    });
  };

  return (
    <nav className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col gap-6">
      <ToastContainer 
        position="top-left" 
        autoClose={1000} 
        theme={darkMode ? "dark" : "light"} 
      />
      
      <div className="flex justify-end items-center gap-4 md:gap-6 text-xs md:text-sm">
        <div className="flex items-center gap-2">
          <span className="text-m font-semibold dark:text-[#D9D9D9]">
            {nav.darkMode}
          </span>
          <button 
            onClick={toggleDarkMode} 
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${darkMode ? "bg-indigo-600" : "bg-gray-300"}`}
          >
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${darkMode ? "translate-x-6" : ""}`} /> 
          </button>
        </div>
        <div className="w-px h-6 bg-gray-300"></div>
        <button onClick={toggleLanguage} className="text-m font-semibold dark:text-indigo-400">
          {lang === "eng" ? (<><span className="text-indigo-600">TÜRKÇE</span>'YE GEÇ</>) : (<>SWITCH TO <span className="text-indigo-600">
            ENGLISH
          </span></>)}
        </button>
      </div>

      <div className="flex md:flex-row justify-between items-center gap-6">
    <div className="rotate-45 w-12 h-12 md:w-18 md:h-18 text-[#7B61FF] dark:text-[#8F88FF] font-semibold text-2xl md:text-4xl rounded-full bg-[#EEEBFF] dark:bg-[#383344] flex items-center justify-center">
      A
    </div>
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-15">
      <ul className="flex gap-8 md:gap-15 text-sm md:text-m">
            <li className="cursor-pointer hover:text-indigo-600 dark:text-[#6B7280] dark:hover:text-[#8F88FF]">
              {nav.skills}
            </li>
            <li className="cursor-pointer hover:text-indigo-600 dark:text-[#6B7280] dark:hover:text-[#8F88FF]">
              {nav.projects}
            </li>
          </ul>
      <button onClick={handleHireMe} className="w-full md:w-auto border border-indigo-600 px-4 py-2 rounded-md text-indigo-600 dark:text-[#8F88FF]">
        {nav.hireMe}
      </button>
    </div>
  </div>

      <div className="flex items-center gap-3 mt-10">
        <div className="w-12 h-0.5 bg-indigo-500"></div>
        <h1 className="text-indigo-600 dark:text-[#8F88FF] font-medium text-2xl">
          {data[lang].heroSection.name}
        </h1>
      </div>
    </nav>
  );
}