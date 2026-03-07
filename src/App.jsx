import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
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