import './App.css';
// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import About from "./pages/About";
import Projects from "./pages/Projects.js";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div>
      <BrowserRouter basename="/react-website-v2">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
