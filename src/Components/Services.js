import React, {useEffect, useRef}  from "react";
import {TweenMax, Power3} from 'gsap';
import { CardColumns, Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup,faCode,faChartLine } from '@fortawesome/free-solid-svg-icons';



function Services(){
  let app = useRef(null);

  useEffect(() =>{
    console.log(app)

    TweenMax.to(
      app,
      4,
      {
        opacity:1,
        y:-20,

        ease:Power3.easeInOut
      }
    )

  }, [])



    return (
        <Container fluid={true}>
          <h1 className="text-center py-4 text-dark">SERVICES</h1>
      <CardColumns className="mt-2 main_col" ref={el => app = el}>
        <Card className="bg-light" >
            <div className="text-center py-4">
                <FontAwesomeIcon  color="#6B3DFF"  className="fa-4x" icon={faLayerGroup} />
            </div>
          <Card.Body className="text-center" >
            <Card.Title>WEB DESIGN</Card.Title>
            <Card.Text>
            Architects and designers develop scalable and extensive architecture which provides performance-driven and business-centric web applications that help organizations to seamlessly connect, interact, operate and generate business value.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-light">
            <div className="text-center py-4">
                <FontAwesomeIcon color="#6B3DFF" className="fa-4x" icon={faCode}/>
            </div>
          <Card.Body className="text-center">
            <Card.Title>WEB DEVELOPMENT</Card.Title>
            <Card.Text>
            Deliver enterprise web development services, by blending the right mix of enhanced project execution processes with relevant hi-tech project management tools, topped up with year of industry experience in offering comprehensive web development solutions.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-light">
            <div className="text-center py-4">
                <FontAwesomeIcon color="#6B3DFF" className="fa-4x" icon={faChartLine} />
            </div>
          <Card.Body className="text-center">
            <Card.Title>PRODUCT STRATEGY</Card.Title>
            <Card.Text>
            I can help you capture value from your products across markets and customer segments. With thoughtful analysis of your product vision and goals, combined with a clear-eyed look at your pricing, value proposition, core capabilities and challenges.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
      </Container>
    );
  }


export default Services;
