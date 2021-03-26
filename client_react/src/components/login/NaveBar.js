import React, {useState} from 'react';

import { Container,  Nav} from 'react-bootstrap';

export default (props) => {

    return (

        <header className="header">
        <Nav className="navbar navbar-expand-lg navbar-light py-3">
            <Container>
                {/* Navbar Brand */}
                <a href="#" className="navbar-brand">
                    <Image src={require('../../assets/4br.png')} 
                        alt="logo" width="150"
                    />
                </a>
            </Container>
        </Nav>
        </header>

    )
}