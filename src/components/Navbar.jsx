import data from "../data/data";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
  const { lang, darkMode } = useSelector((state) => state);
  const dispatch = useDispatch();
  const nav = data[lang].navbar;

  const toggleLanguage = () => {
    const nextLang = lang === "eng" ? "tr" : "eng";
    dispatch({ type: "SET_LANG", payload: nextLang });

    const message = nextLang === "tr" ? "Dil Türkçe olarak değiştirildi ✅" : "Language switched to English ✅";
    
    toast(message, {
      style: { backgroundColor: darkMode ? "#383344" : "#f2e6ff", color: darkMode ? "#8F88FF" : "#4f46e5" },
      progressStyle: { backgroundColor: "#4f46e5" }
    });
  };

  const toggleDarkMode = () => {
    dispatch({ type: "SET_DARKMODE", payload: !darkMode });
  };

  return (
    <nav className="max-w-7xl mx-auto px-10 py-6 flex flex-col gap-6">
      <ToastContainer position="top-left" autoClose={2000} />
      <div className="flex justify-end items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-m font-semibold dark:text-[#D9D9D9]">{nav.darkMode}</span>
          <button onClick={toggleDarkMode} className={`w-12 h-6 flex items-center rounded-full p-1 transition ${darkMode ? "bg-indigo-600" : "bg-gray-300"}`}>
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${darkMode ? "translate-x-6" : ""}`} /> 
          </button>
        </div>
        <div className="w-px h-6 bg-gray-300"></div>
        <button onClick={toggleLanguage} className="text-m font-semibold dark:text-indigo-400">
          {lang === "eng" ? (<><span className="text-indigo-600">TÜRKÇE</span>'YE GEÇ</>) : (<>SWITCH TO <span className="text-indigo-600">ENGLISH</span></>)}
        </button>
      </div>

      <div className="flex justify-between items-center">
        <div className="rotate-45 w-18 h-18 text-[#7B61FF] dark:text-[#8F88FF] font-semibold text-4xl rounded-full bg-[#EEEBFF] dark:bg-[#383344] flex items-center justify-center">A</div>
        <div className="flex justify-between items-center gap-15">
          <ul className="flex gap-15 text-m">
            <li className="cursor-pointer hover:text-indigo-600 dark:text-[#6B7280] dark:hover:text-[#8F88FF]">{nav.skills}</li>
            <li className="cursor-pointer hover:text-indigo-600 dark:text-[#6B7280] dark:hover:text-[#8F88FF]">{nav.projects}</li>
          </ul>
          <button className="border border-indigo-600 px-4 py-2 rounded-md text-indigo-600 dark:text-[#8F88FF] dark:border-[#8F88FF] hover:bg-indigo-50 dark:hover:bg-gray-800 transition">
            {nav.hireMe}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-10">
        <div className="w-12 h-0.5 bg-indigo-500"></div>
        <h1 className="text-indigo-600 dark:text-[#8F88FF] font-medium text-2xl">{data[lang].heroSection.name}</h1>
      </div>
    </nav>
  );
}