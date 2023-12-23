import Sidebar from "../components/sidebar";

export default function renderAboutPage () {
    return(
        <div>
            <Sidebar /> 

            <div className="my-text intro">

                <h2>Intro</h2>

                <p>Hi, I'm Emily and I'm a junior in CS at the University of Washington. I'm interested in security and
                full stack web development. I'm just exploring areas to see what I like. I've led a couple of group projects before because of my initiative to learn 
                and support each team I was in. See more <a href="projects">here</a>!</p>

                <p>I have a 2024 SWE internship at Boeing again, with some opportunity for web development, data visualization and 
                databases.</p>

                <h2>Relevant Classes</h2>

                <ul>
                    <li>CSE 331 (though I wish I took CSE 154 last Spring..)</li>
                    <li>CSE 163 (Python Data Programming, if data visualization is ever relevant)</li>
                </ul>

                
                
            </div>

            <div className="b">
                
                </div>

            
        </div>
    );
}