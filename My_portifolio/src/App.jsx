import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import NavbarIcons from "./components/Navbar/NavbarIcons/NavbarIcons";
import MainContent from "./components/MainContent/MainContent";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

import "./styles/globals.scss";
import "./styles/app.scss";

function App() {
  return (
    <div id="containerBody">
      <Navbar />
      <NavbarIcons />
      <div id="portifolio">
        <Sidebar />
        <MainContent />
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
