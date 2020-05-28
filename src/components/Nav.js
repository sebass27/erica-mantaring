import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function MyNav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href={process.env.PUBLIC_URL+"/"}>Erica Mantaring ❤️</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href={process.env.PUBLIC_URL+"/"}>Home</Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL+"/about"}>About</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MyNav;