import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Projects, Pics, About, Contact } from "./components"
import Navbar from "./components/layout/Navbar";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pics" element={<Pics />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
