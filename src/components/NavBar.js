import React from 'react';
import { Navbar } from 'react-bootstrap';

<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Brand</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>{' '}
      <Button type="submit">Submit</Button>
    </Navbar.Form>
  </Navbar.Collapse>
</Navbar>;

React.defualt.export()