import './App.css';
import React from "react";

function App() {
  return (
    <div>
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

      <div className="sidebar">
        <div>
            <img src={process.env.PUBLIC_URL + "/face.png"} id="profile-picture" alt="My face"></img>
            <h2>Emily Kang</h2>

            <a href="https://github.com/Emily-Kang77" aria-label="Github link" target="_blank">
                <ion-icon className="social-icon" name="logo-github" aria-hidden="true"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/emilykang1/" aria-label="LinkedIn link" target="_blank">
                <ion-icon className="social-icon" name="logo-linkedin" aria-hidden="true"></ion-icon>
            </a>
        </div>
        
        <ul className="sidebar-links">
            <li><button type="button" className="pill">About</button></li>
            <li><button type="button" className="pill">Projects</button></li>
            <li><button type="button" className="pill">Gallery</button></li>
        </ul>

        
      </div>
    </div>
  );
}

export default App;
