import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/github';
import 'react-social-icons/linkedin';
// import { Routes, Route, Link } from "react-router-dom"; 
// import About from "./pages/About";
// import Projects from "./pages/Projects.js";
// import NoPage from "./pages/NoPage";

export default function renderSidebar() {
    return (
        <div>
          <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
          <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    
          <div className="sidebar">
            <div>
                <img src={process.env.PUBLIC_URL + "/face.png"} id="profile-picture" alt="My face"></img>
                <h2>Emily Kang</h2>

                  <a href="https://github.com/Emily-Kang77" aria-label="Github link" target="_blank">
                      <SocialIcon network="github" style={{width: "35px", height: "35px", marginRight: "10%"}} />
                  </a>
                
                <a href="https://www.linkedin.com/in/emilykang1/" aria-label="LinkedIn link" target="_blank">
                    {/* <ion-icon className="social-icon" name="logo-linkedin" aria-hidden="true"></ion-icon> */}
                    <SocialIcon bgColor="white" fgColor="blue" network="linkedin" style={{width: "35px", height: "35px"}}/>
                </a>
            </div>
            
            {/* MAKE BUTTONS LINK TO OTHER PAGES PROPERLY  */}
            <ul className="sidebar-links">
                <li>
                    <a href="#/react-website-v2/about"><button type="button" className="pill">About</button></a>
                </li>
                <li>
                    <a href="#/react-website-v2/projects"><button type="button" className="pill">Projects</button></a>
                </li>
                <li><button type="button" className="pill">Gallery</button>
                </li>
            </ul>
            
          </div>
        </div>
      );
}