import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import TechStack from "./components/TechStack";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen min-w-full bg-[--bg] text-[--text]">
      <CursorGlow />
      <Navbar />
      <Home />
      <AboutMe />
      <TechStack />
      <Projects />
      <Certifications />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
