import React from 'react';
import { Jumbotron, Container, Row, Col } from "react-bootstrap";




function Hero(props) {

    return(
       <Jumbotron className="bg-transparent Jumbotron-fluid p-0 parallax">
           <Container fluid={true}>
               <Row className="justify-content-center py-5">
                   <Col md={8} sm={12}f>
                        {props.title && <h1 className="display-3 font-weight-bolder text-warning">{props.title}</h1>}
                        {props.subTitle && <h2 className="display-5 font-weight-light text-light">{props.subTitle}</h2>}
                   </Col>
               </Row>
           </Container>
       </Jumbotron>
       
    );

}

export default Hero;