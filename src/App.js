import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";
import ContactPage from "../src/pages/ContactPage";
import ContactPage2 from "../src/pages/ContactPage2";

//Using React-Boostrap, React-Spring(animated), React-UIGradient, React-Components
// npm install --save axios for api contact page
// npm install --save @sendgrid/mail body-parser cors express  ->email
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Marius-Gabriel",
      headerLinks: [
        { title: "Acasă", path: "/" },
        { title: "Informații", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],

      home: {
        title: "Junior Software Developer",
        subtitle: "Proiectele mele",
        text: "Pentru a mă cunoaște mai bine, accesați următoarele link-uri.",
      },

      about: {
        title: "Despre mine!",
      },

      contact: {
        title: "Contact!",
      },
    };
  }

  // "exact"= route / ppath="/about or /contact"  <=> Route path="/" exact  or Route path="/about"
  render() {
    return (
      <Router>
        <Container
          className="p-0"
          fluid={true}
          //fluid=true => foloseste intreaga latime a containerului ce acopera intreaga latime a paginii
        >
          <NavBar className="border-bottom" bg="transparent" expand="lg">
            <NavBar.Brand>Marius-Gabriel</NavBar.Brand>

            <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <NavBar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Acasă
                </Link>
                <Link className="nav-link" to="/about">
                  Informații
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </NavBar.Collapse>
          </NavBar>

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subtitle={this.state.home.subtitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            //exact
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            render={() => <ContactPage2 />}
            //contactpage2
          />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
//title={this.state.contact.title}
