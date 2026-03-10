import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { lang, darkMode } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-[#252128] text-gray-800 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;