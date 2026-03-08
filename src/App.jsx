import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";

function App() {

  const [lang, setLang] = useState("eng");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <Navbar 
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Hero lang={lang}/>
      <Skills lang={lang}/>
      <Profile lang={lang}/>
      <Projects lang={lang}/>
      <Contact lang={lang}/>
    </div>
  );
}

export default App;