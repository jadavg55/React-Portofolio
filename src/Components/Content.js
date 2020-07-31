import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';




function Content(props) {

    return(
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col xs={4}>
                    <Image className="about-image" src="/images/profile.jpg" width={400} height={300} />
                </Col>

                <Col xs={6}>
                    <p className="about-text">IT professional pursuing WEB DESIGN - LCA.C0. I am working as a Front­End Developer. Extensively worked on developing Responsive Web Applications. Experienced in developing cross­browser compatible web pages effectively using HTML5 and CSS3. Experienced in JavaScript and having knowledge of Angular JS. And my goal is to be a positive addition to IT team and an integral asset to the organization, while improving my skills and abilities.</p>
                </Col>
            </Row>
        </Container>
    );

}

export default Content;