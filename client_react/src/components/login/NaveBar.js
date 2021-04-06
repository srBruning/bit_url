import React, {useState} from 'react';

import { Container, Image,  Row, Col, InputGroup, FormControl, Button, 
    Nav, Table, Navbar, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';

export default (props, bg) => {
    return (

        <header className="header" >
        <Navbar className="navbar navbar-expand-lg py-3">
            <Container>
                {/* Navbar Brand */}
                <a href="#" className="navbar-brand">
                    <Image src={require('../../assets/4br.png')} 
                        alt="logo" width="80"
                    />
                </a>
                {props.children}
            </Container>
        </Navbar>
        </header>

    )
}
 
// <Navbar bg="dark">
// <Navbar.Brand href="#home">
//   <img
//     src={logo}
//     width="30"
//     height="30"
//     className="d-inline-block align-top"
//     alt="React Bootstrap logo"
//   />
// </Navbar.Brand>
// <Navbar.Collapse id="basic-navbar-nav">
// <Nav className="mr-auto"></Nav>
// <Form inline>
//   <Button variant="outline-success" onClick={onSingOut}>Sair</Button>
// </Form>
// </Navbar.Collapse>
// </Navbar> 