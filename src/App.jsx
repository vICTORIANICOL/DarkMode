import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navigation from "../src/components/Navigation";
import Home from "../src/pages/Home";
import About from "../src/pages/about/About";
import Benefits from "../src/pages/benefits/Benefits";
import Risks from "../src/pages/risks/Risks";
import Discover from "../src/pages/discover/Discover";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
