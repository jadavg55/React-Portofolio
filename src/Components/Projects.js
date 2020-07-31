import React, {useEffect} from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Portfolio from "../Assets/portfolio.png";
import Priyanka from "../Assets/priyanka.png";
import Wordpress from "../Assets/WordPress_Project.mp4";
import Ui from "../Assets/ui.jpg";



function Projects() {

    useEffect(() => {
        AOS.init({duration:2000});
    }, []);

  return (
    <Container fluid={true}>
      <h1 className="text-center py-4 text-dark">PROJECTS</h1>
      <Row>
        <Col sm={6}>
          <Card className="Project_card" data-aos="fade-right">
            <Card.Img variant="top" src={Portfolio} height={360} width={240} />
            <Card.Body>
              <Card.Title>My Portfolio Using HTML and CSS</Card.Title>
              <Card.Text>
              As a part of my final project, I made the portfolio using HTML, CSS, javascript, and some more library which is fully manageable. and make everything in separate pages and also using some AOS, Hover, slick library, and very well maintenance typography. In addition to all the functionalities of the existing website, it has new functionalities such as Slider, contact form, attractive animations, and completely responsive.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="dark" href="http://gautam.niravjdn.xyz/">
                VIEW MORE
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="Project_card" data-aos="fade-left">
            <Card.Img variant="top" src={Priyanka} height={360} width={240} />
            <Card.Body>
              <Card.Title>Portfolio Project</Card.Title>
              <Card.Text>
              I am always ready to learn something new and increase my knowledge. She is my friend Priyanka so I made this portfolio for her and also this portfolio I make it in HTML and CSS and javascript, and Bulma( CSS framework) also for images I use some tools like adobe photoshop. In addition to all the functionalities of the existing website, it has new functionalities such as jumbotron, attractive animations, and completely responsive.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="dark"
                href="https://fervent-northcutt-d37171.netlify.app/"
              >
                VIEW MORE
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <Row className="py-4">
        <Col sm={6}>
          <Card className="Project_card" data-aos="fade-up">
            <ReactPlayer controls url={Wordpress} height={360} width={685} />
            <Card.Body>
              <Card.Title>Wordpress</Card.Title>
              <Card.Text>
              Delmar is a well-known and major pharmaceutical company. As a part of my final project, I made the site of Delmar in a WordPress which is fully manageable. and make everything in separate pages and header and footer links with all pages also using some AOS library and very well maintenance typography. In addition to all the functionalities of the existing website, it has new functionalities such as Slider, contact form, attractive animations, and responsive.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
             
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="Project_card" data-aos="fade-down">
          <Card.Img variant="top" src={Ui} height={360} width={240} />
            <Card.Body>
              <Card.Title>UI Design</Card.Title>
              <Card.Text>
              I have designed a few layouts and UI designs as a hobby. The UI design shows the Product description page of the e-commerce site, a landing page of a shoemaker company, and a sign-up page for user registration respectively. Designing graphic user interface elements, like menus, tabs, navbar, buttons, selectors, and widgets. and that reason I get more ideas about my web pages and also the last most important typography that reason I maintain very well. and for user interface design I would love to used Figma and Adobe XD.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
