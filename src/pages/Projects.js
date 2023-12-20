import Sidebar from "../components/sidebar";

export default function renderProjectsPage () {

    const itStyle = {fontStyle: "italic"};
    return(
        <div>
            <Sidebar />

            <div className="my-text">

                <h1>Projects</h1>

                
                <div className="projects-container">
                
                        {/* <!-- INTERNSHIP --> */}
                    <div className="box item">
                        <p className="role">Backend Software Engineering Intern at Boeing</p>
                        <p style={itStyle}>June - September 2023</p>

                        <ul>
                            <li>I implemented the new design for a small-scale data manager using messaging API</li>
                            <li>Improved the design of the configuration framework by 5% with more robust exception handling</li>
                            <li>Skills: AWS (containerized development), Github, C++, unit testing</li>
                        </ul>

                        Thoughts: I appreciate it. It was my first internship, and I'd like to explore other tech stacks.
                                And work at a tech company! 
                    </div>

                    {/* <!-- DATA PROGRAMMING PROJECT --> */}
                    <div className="box item">
                        <p className="role">Data Programming Class Project Lead</p>
                        <p style={itStyle}>May - June 2023</p>

                        <ul>
                            <li>Researched data sets on housing prices, planned ahead, and discussed approaches to 
                                create good questions and scope.</li>
                            <li>Used Python, Pandas, Matplotlib, Seaborn, Geopandas, and Plotly to analyze
                                over 8000 entries, visualize, and test data</li>
                        </ul>

                        Thoughts: I think I brought together my leadership experiences of getting things done,
                        supporting the team's learning (Husky Coding Project), into a nice mix of both in 
                        this project.
                    </div>

                    <div className="box item">
                        <p className="role">Women in Cybersecurity CTF Participant</p>
                        <p style={itStyle}>September 8-10, 2023</p>

                        Thoughts: I just dipped my toes in security. I realized that I didn't have the time to
                        prepare adequately for both software engineering and cybersecurity internships,
                        so I went with software. This was fun though!
                    </div>

                    <div className="box item">
                        <p className="role">Husky Coding Project Team Leader</p>
                        <p style={itStyle}>October 2022 - June 2023</p>
        
                        <ul>
                            <li>Made web app prototype using the tui-calendar library, node.js. </li>
                        </ul>
        
                        The main priority was creating a valuable learning experience for the team.
                        I learned a lot on how to support the team.
                        I think I should've gone with a different project in Java where we built 
                        from the ground-up so people would be more motivated. I also would've chosen
                        people who perhaps weren't as busy.
                    </div>
        
                    <div className="box item">
                        <p className="role">NASA Artemis (Robotics) Challenge Leader</p>
                        <p style={itStyle}>July - August 2022</p>
        
                        <ul>
                            <li>Led a team for 20-30 hours a week to build a rover and compete in a
                                course simulating moon conditions.
                            </li>
                            <li>Assembled robot arm for barrier deployment; improved arm, rover, and camera
                                movement with C++ and Python</li>
                            <li>Organized the project by researching all parts the rover needed to request them</li>
                        </ul>
        
                        I learned about more task-oriented leadership, and I really enjoyed this project.
                        It felt complete, despite having only a month. I'm open to learning about hardware
                        and embedded systems. 
                    </div>

                </div>
            </div>
        </div>
    );
}