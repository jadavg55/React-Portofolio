import React from 'react';
import Hero from '../Components/Hero';
import Slider from '../Components/Slider';
import Services from '../Components/Services';






function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} />
            <Slider />
            <Services />
        </div>
    );

}

export default HomePage;