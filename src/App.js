import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Project from "./components/project";
import AboutMe from "./pages/aboutMe";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="main"> 

          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>

        
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
