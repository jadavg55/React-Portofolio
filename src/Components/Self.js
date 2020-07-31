import React, {useEffect, useRef} from "react";
import {TimelineLite ,TweenMax, Power3} from 'gsap';

import arrow from '../Assets/arrow-right-white.svg';
import First from '../Assets/First.JPG';
import Second from '../Assets/Second.JPG';







function Self() {

    let app = useRef(null);
    let images = useRef(null);
    let content = useRef(null);


    let tl = new TimelineLite({ delay: .8})

    useEffect(() => {
        // images vars
        const boyImage = images.firstElementChild;
        const boy_twoImage = images.lastElementChild;

        // contents Vars
        const headlineFirst = content.children[0].children[0];
        const headlineSecond = headlineFirst.nextSibling;
        const headlineThird = headlineSecond.nextSibling;
        const contentP = content.children[1];
        const contentButton = content.children[2];




        //Remove initial flash
        TweenMax.to(app, 0, {css: {visibility: 'visible'}})
        // Images Animation
        tl.from(boyImage, 1.2, {y:1280, ease:Power3.easeOut}, 'Start')
            .from(boyImage.firstElementChild, 2, {scale:1.6, ease:Power3.easeOut}, .2)
            .from(boy_twoImage, 1.2, {y:1280, ease:Power3.easeOut}, .2)
            .from(boy_twoImage.lastElementChild, 2, {scale:1.6, ease:Power3.easeOut}, .2)

        //Content Animation
        tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
            y: 44,
            ease:Power3.easeOut,
            delay: .8
          }, .15, 'Start')
            .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
            .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
    },[tl])


    return(
        <div className="First" ref={el => app = el}>
            <div className="Second">
                <div className="First-inner">
                     <div className="First-content">
                         <div className="First-content-inner" ref={el => content = el}>
                            <h1 className="main">
                                <div className="First-content-line">
                                    <div className="First-content-line-inner">About Me</div> 
                                </div>
                                <div className="First-content-line">
                                    <div className="First-content-line-inner">Front-end Developer</div> 
                                </div>
                                <div className="First-content-line">
                                    <div className="First-content-line-inner">UX & UI Designer</div> 
                                </div>
                            </h1>
                            <p>IT professional pursuing WEB DESIGN - LCA.C0. I am working as a Front­End Developer. Extensively worked on developing Responsive Web Applications. Experienced in developing cross­browser compatible web pages effectively using HTML5 and CSS3. Experienced in JavaScript and having knowledge of Angular JS. And my goal is to be a positive addition to IT team and an integral asset to the organization, while improving my skills and abilities.</p>
                            <div className="btn-row">
                                <button className="explore-button">
                                    Explore
                                    <div className="arrow-icon">
                                        <img src={arrow} alt="arrow" />
                                    </div>
                                </button>
                            </div>
                         </div>   
                     </div>
                     <div className="First-images">
                            <div className="First-images-inner" ref={el => images = el}>
                                <div className="First-image boy">
                                    <img className="picture" src={First} alt="Boy"  />
                                </div>
                                <div className="First-image boy_two">
                                    <img className="picture"  src={Second} alt="Boy"  />
                                </div>
                            </div> 
                            
                    </div>
                </div>
            </div>
            
        </div>
        
    );

}

export default Self;