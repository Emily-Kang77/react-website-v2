import Sidebar from "../components/sidebar";

export default function renderAboutPage () {
    return(
        <div>
            <Sidebar /> 

            <div className="my-text intro">
            Hi, I'm Emily and I'm a junior in CS at the University of Washington. I'm interested in security and
            full stack web development. I'm just exploring areas to see what I like. I've led a couple of group projects before because of my initiative to learn 
            and support each team I was in. See more <a href="projects">here</a>!
            </div>

        </div>
    );
}