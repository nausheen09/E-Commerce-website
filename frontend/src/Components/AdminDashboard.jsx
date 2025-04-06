import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col, Card } from "react-bootstrap";
import {
    FiShoppingCart, FiSearch, FiUser, FiHeart, FiBarChart2, FiSettings, FiMenu, FiX
} from "react-icons/fi";

const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className={`bg-dark text-light p-3 vh-100 position-fixed ${isSidebarOpen ? "" : "d-none"}`} style={{ width: "250px" }}>
                <div className="d-flex justify-content-between align-items-center">
                    <h4 className="fw-bold text-center">Admin Panel</h4>
                    <FiX size={25} className="text-light d-lg-none" onClick={toggleSidebar} />
                </div>
                <Nav className="flex-column mt-4">
                    <Nav.Link href="#" className="text-light">Dashboard</Nav.Link>
                    <Nav.Link href="#" className="text-light">User Profile</Nav.Link>
                    <Nav.Link href="#" className="text-light">Table List</Nav.Link>
                </Nav>
            </div>

            <div className="flex-grow-1" style={{ marginLeft: isSidebarOpen ? "250px" : "0px" }}>
                {/* Navbar */}
                <Navbar expand="lg" bg="dark" variant="dark" className="shadow-sm px-3">
                    <Container fluid>
                        <FiMenu size={25} className="text-light d-lg-none" onClick={toggleSidebar} />
                        <Navbar.Brand href="#">Admin Dashboard</Navbar.Brand>
                        <div className="d-flex gap-3">
                            <Nav.Link href="#"><FiSearch size={20} color="white" /></Nav.Link>
                            <Nav.Link href="#"><FiShoppingCart size={20} color="white" /></Nav.Link>
                            <Nav.Link href="#"><FiUser size={20} color="white" /></Nav.Link>
                            <Nav.Link href="#"><FiSettings size={20} color="white" /></Nav.Link>
                        </div>
                    </Container>
                </Navbar>

                {/* Dashboard Content */}
                <Container className="mt-4">
                    <Row>
                        <Col md={4}>
                            <Card className="p-3 bg-success text-light">
                                <Card.Body>
                                    <FiBarChart2 size={30} />
                                    <h5 className="mt-2">Daily Sales</h5>
                                    <p>55% increase in sales today.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="p-3 bg-warning text-dark">
                                <Card.Body>
                                    <FiHeart size={30} />
                                    <h5 className="mt-2">Email Subscriptions</h5>
                                    <p>Campaign sent 2 days ago.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="p-3 bg-danger text-light">
                                <Card.Body>
                                    <FiBarChart2 size={30} />
                                    <h5 className="mt-2">Completed Tasks</h5>
                                    <p>Last campaign performance.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AdminDashboard;