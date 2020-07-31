import React from 'react';
import Hero from '../Components/Hero';
import Projects from '../Components/Projects';




function ProjectPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Projects />


        </div>

            

        

    );

}

export default ProjectPage;