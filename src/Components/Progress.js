import React from "react";
import { ProgressBar, Container, Row, Col, Jumbotron } from "react-bootstrap";

class Progress extends React.Component {
  render() {
    return (
      <Container fluid={true} className="mt-1">
        <Jumbotron className="bg-transparent">
          <h1 className="text-center">MY SKIILS</h1>
        </Jumbotron>
        <Row className="justify-content-center py-3">
          <Col xs={6}>
            <div className="py-2">
              <h4>HTML5</h4>
              <ProgressBar variant="primary" now={80} />
            </div>
            <div className="py-2">
              <h4>CSS</h4>
              <ProgressBar variant="success" now={80} />
            </div>
            <div className="py-2">
              <h4>BULMA</h4>
              <ProgressBar variant="info" now={70} />
            </div>
            <div className="py-2">
              <h4>Bootstrap</h4>
              <ProgressBar variant="danger" now={70} />
            </div>
            <div className="py-2">
              <h4>Java Script</h4>
              <ProgressBar variant="primary" now={60} />
            </div>
            <div className="py-2">
              <h4>PHP</h4>
              <ProgressBar variant="success" now={60} />
            </div>
           
          </Col>

          <Col xs={6}>
            <div className="py-2">
              <h4>jQuery</h4>
              <ProgressBar variant="warning" now={70} />
            </div>
            <div className="py-2">
              <h4>WordPress</h4>
              <ProgressBar variant="danger" now={80} />
            </div>
            <div className="py-2">
              <h4>SQL(DataBase)</h4>
              <ProgressBar variant="success" now={80} />
            </div>
            <div className="py-2">
              <h4>Adobe Photoshop</h4>
              <ProgressBar variant="primary" now={70} />
            </div>
            <div className="py-2">
              <h4>Adobe Illustrator</h4>
              <ProgressBar variant="info" now={70} />
            </div>
            <div className="py-2">
              <h4>Typography</h4>
              <ProgressBar variant="danger" now={55} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Progress;
