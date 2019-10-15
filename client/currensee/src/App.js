import React from "react";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl
} from "react-bootstrap";

import Routes from "./Routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App(props) {
  return (
    <div className="App container">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          Currensee
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/upload">Upload</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;