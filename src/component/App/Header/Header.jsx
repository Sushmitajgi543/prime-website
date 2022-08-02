import React from 'react';
import { Nav, Container, Navbar, Offcanvas } from 'react-bootstrap';
import "../../Assest/Scss/Header/index.scss"
import { Link } from 'react-router-dom';
import logo from '../../Assest/Image/logo.png';
export const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <div>
                <Link to="/"><img src={logo} alt="" /></Link>

                </div>

            </div>
            <div className='header-container'>
                <hr />
                <div className='header-container-content'>
                    <div className='header-container-content-left'>
                        
                        <p>
                        We build great homes. <br />Do you have a project to discuss? let's talk. &rarr;
                    </p>
                    </div>
                    <div className='header-container-content-right'>
                        <Navbar key="sm" expand="false" className="mb-3">
                            <Container fluid  id='container'>
                                <Navbar.Toggle id="toggle" aria-controls={`offcanvasNavbar-expand-sm`} />
                                <Navbar.Offcanvas
                                    id={`offcanvasNavbar-expand-sm`}
                                    aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                                    placement="end"
                                >
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                            Offcanvas
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Nav className="justify-content-end flex-grow-1 pe-3">
                                          <Link to="/">  <Nav.Link href="#action1">Home</Nav.Link></Link>
                                          <Link to="/project"><Nav.Link href="#action2">Projects</Nav.Link></Link> 
                                          <Link to="/about-us"><Nav.Link href="#action2">Prime Story</Nav.Link></Link> 
                                          <Link to="/contact-us"><Nav.Link href="#action2">Inquiry</Nav.Link> </Link>  
                                        </Nav>

                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Container>
                        </Navbar>
                    </div>

                </div>
            </div>
        </div>
    )
}