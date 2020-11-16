import React, { Component } from 'react';
import {Navbar, Form, Button, Nav, FormControl} from 'react-bootstrap';

class NavbarPok extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <Navbar variant="dark" expand="lg" fixed="top" className="navPok">
                <Navbar.Brand href="#home">Pokedexi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}
 
export default NavbarPok;