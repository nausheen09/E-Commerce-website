import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FiPhone, FiShoppingCart, FiSearch, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const CustomNavbar = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    
    return (
        <Navbar expand="lg" fixed="top" bg="light" className="py-3 shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-inline-flex">
                    <img src="/src/assets/img/gallery/logo.png" alt="logo" className="d-inline-block" />
                    <span className="text-1000 fs-4 fw-bold ms-2">Majestic</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="border-top border-lg-0 mt-4 mt-lg-0">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="fw-medium active">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Womencollection" className="fw-medium">Women</Nav.Link>
                        <Nav.Link as={Link} to="/MenArrivals" className="fw-medium">Men</Nav.Link>
                        <Nav.Link as={Link} to="/bestdeals" className="fw-medium">Collection</Nav.Link>
                        <Nav.Link as={Link} to="/OutletSummer" className="fw-medium">Outlet</Nav.Link>
                        <Nav.Link as={Link} to="/AboutGentle" className="fw-medium">About</Nav.Link>
                    </Nav>
                    <div className="d-flex gap-3">
                        <Nav.Link as={Link} to="/ContactUs"><FiPhone size={20} /></Nav.Link>
                        <Nav.Link as={Link} to="/cart"><FiShoppingCart size={20} /></Nav.Link>
                        <Nav.Link as={Link} to="/search"><FiSearch size={20} /></Nav.Link>
                        <Nav.Link as={Link} to="/profile"><FiUser size={20} /></Nav.Link>
                        {isAuthenticated ? (
                            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/Signup">SignUp</Nav.Link>
                                <Nav.Link as={Link} to="/LogIn">LogIn</Nav.Link>
                            </>
                        )}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

