import React from 'react';
import {Carousel, Image} from 'react-bootstrap'






class Slider extends React.Component   {
  render(){
    
    return(

      <Carousel className="mb-0">
  <Carousel.Item>
    <Image width={900} height={700}
      className="d-block w-100" 
      src="/images/slider-new2.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <Image width={900} height={700}
      className="d-block w-100"
      src="/images/slider-new3.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <Image width={900} height={700}
      className="d-block w-100"
      src="/images/Slider-new1.jpg"
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
    );
        
    }
}

export default Slider;