import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap";

import Routes from "./Routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App(/*props*/) {
  return (
    <div className="App container">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">Currensee</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/upload/">
            <Nav.Link>Upload</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
