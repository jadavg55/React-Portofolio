import React from 'react';
import Hero from '../Components/Hero';
import Progress from '../Components/Progress';
import Self from '../Components/Self';




function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Self />
            <Progress />
        </div>
    );

}

export default AboutPage;