import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import Footer from "./Components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Gautam Jadav",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Gautam Jadav",
        subTitle: "UX & UI Designer Front-end Developer",
        text: "Checkout my projects below",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's Talk",
      },
      project: {
        title: "My recent work ",
      },
    };
  }

  render() {
    return (
      <Router>
          <Container className="p-0" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg" bg="dark" variant="dark">
              <Navbar.Brand className="new-fontt">Portfolio</Navbar.Brand>
              <Navbar.Toggle
                className="border-0"
                aria-controls="navbar-toggle"
              />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                  <Link className="nav-link" to="/project">
                    Projects
                  </Link>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} />} />
            <Route path="/about" render={()=> <AboutPage title={this.state.about.title} />} />
            <Route path="/contact" render={()=> <ContactPage title={this.state.contact.title} />} />
            <Route path="/project" render={()=> <ProjectPage title={this.state.project.title} />} />



            <Footer />
          </Container>
      </Router>
    );
  }
}

export default App;
