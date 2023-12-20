import './App.css';
// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import About from "./pages/About";
import Projects from "./pages/Projects";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/react-website-v2" element={<About />} />
          <Route path="/react-website-v2/about" element={<About />}/>
          <Route path="/react-website-v2/projects" element={<Projects />}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
