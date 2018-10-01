import React, { Component } from "react";
import "./App.css";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {
  FormGroup,
  FormControl,
  InputGroup,
  Form,
  ControlLabel
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar bsStyle="navbar navbar-expand-lg navbar-dark bg-dark">
          <a href="#home" bsStyle="navbar-brand">
            TitanSearch
          </a>
          <Form inline>
            <FormGroup controlId="formInlineName">
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{" "}
            <Button type="submit">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default App;
// bsStyle="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search"
