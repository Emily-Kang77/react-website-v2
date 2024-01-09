import Sidebar from "../components/sidebar";

export default function renderAboutPage () {
    return(
        <div>
            <Sidebar /> 

            <div className="my-text intro">

                <h2>Intro</h2>

                <p>Hi, I'm Emily and I'm a junior in CS at the University of Washington. I'm interested in security and
                full stack web development. Currently, I'm just exploring roles to see what I like. I've led a couple of group projects before because of my initiative to learn 
                and I did my best to support each team I was in. See more <a href="projects">here</a>!</p>

                <h2>Relevant Classes 2023-2024</h2>

                <ul>
                    <li>CSE 344 - Introduction to Data Management (Databases)</li>
                    <li>CSE 333 - Systems Programming in C++</li>
                    <li>CSE 332 - Data Structures and Algorithms</li>
                    <li>CSE 351 - Hardware and Software Interface </li>
                    <li>CSE 331 - Software Design and Implementation </li>
                    <li>CSE 163 - Python Data Programming</li>
                </ul>

                
                
            </div>

            <div className="b">
                
                </div>

            
        </div>
    );
}