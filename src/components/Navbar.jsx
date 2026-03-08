import data from "../data/data";

export default function Navbar({ lang, setLang, darkMode, setDarkMode }) {
    const nav = data[lang].navbar;

    const toggleLanguage = () => {
    setLang(lang === "eng" ? "tr" : "eng");
  };

  return (
    <nav className="max-w-6xl mx-auto px-10 py-6 flex flex-col gap-6">


      <div className="flex justify-end items-center gap-6">

        <div className="flex items-center gap-2">

          <span className="text-xs font-semibold">
            {nav.darkMode}
          </span>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition
              ${darkMode ? "bg-indigo-600" : "bg-gray-300"}`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition
                ${darkMode ? "translate-x-6" : ""}`}
            />
          </button>

        </div>

        <button
          onClick={toggleLanguage}
          className="text-xs text-indigo-600 font-semibold"
        >
          {lang === "eng" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
        </button>

      </div>

      <div className="flex justify-between items-center">
        <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">A
        </div>
        
        <div className="flex justify-between items-center gap-15">
        <ul className="flex gap-15 text-sm">
          <li className="cursor-pointer hover:text-indigo-600">
            {nav.skills}
          </li>

          <li className="cursor-pointer hover:text-indigo-600">
            {nav.projects}
          </li>
        </ul>

        <button className="border border-indigo-500 px-4 py-2 rounded-md text-indigo-600 hover:bg-indigo-50">
          {nav.hireMe}
        </button>
        </div>

      </div>

      <div className="flex items-center gap-3 mt-14">

            <div className="w-12 h-[2px] bg-indigo-500"></div>

            <h1 className="text-indigo-600 font-medium">
              {data[lang].heroSection.name}
            </h1>

       </div>
    </nav>
  );
}