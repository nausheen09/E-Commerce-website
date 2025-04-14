import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Button,
    Offcanvas,
    Nav,
    Navbar,
    Form,
    FormControl,
    Card
} from 'react-bootstrap';
import { FaBars, FaBox, FaChartBar, FaSignOutAlt, FaHome, FaSearch } from 'react-icons/fa';
import Products from './Products.jsx';
const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Dashboard');
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const checkAdminStatus = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('Unauthorized access! Please log in as an admin.');
                navigate('/login');
                return;
            }
            try {
                const response = await fetch(`${apiUrl}/auth/isAdmin`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });
                const data = await response.json();
                if (!data.success || !data.isAdmin) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error checking admin status:', error);
                alert('An error occurred. Redirecting to login.');
                navigate('/login');
            }
        };
        checkAdminStatus();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'Products':
                return <Products />;
            case 'Dashboard':
                return (
                    <>
                        <h3 className="mb-4 fw-bold" style={{ color: '#4F4F4F' }}>Dashboard</h3>
                        <Row>
                            {[
                                { title: 'Daily Sales', value: '55% ↑', icon: '📈' },
                                { title: 'Revenue', value: '$34,245', icon: '💰' },
                                { title: 'Followers', value: '2,345', icon: '👥' },
                            ].map((card, idx) => (
                                <Col key={idx} xs={12} md={4}>
                                    <DashboardCard title={card.title} value={card.value} icon={card.icon} />
                                </Col>
                            ))}
                        </Row>
                    </>
                );
            default:
                return <div>Select an option from the menu</div>;
        }
    };

    return (
        <Container fluid className="p-0">
            {/* Navbar (for all sizes) */}
            <Navbar bg="light" className="px-3 border-bottom d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                    <Button variant="outline-dark" className="d-sm-none" onClick={() => setIsSidebarOpen(true)}>
                        <FaBars />
                    </Button>
                    <Navbar.Brand className="m-0">{activeTab}</Navbar.Brand>
                </div>
                <Form className="d-flex align-items-center">
                    <FormControl
                        type="search"
                        placeholder="Search..."
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-dark">
                        <FaSearch />
                    </Button>
                </Form>
            </Navbar>

            <Row className="g-0">
                {/* Sidebar for larger screens */}
                <Col sm={2} className="d-none d-sm-block bg-dark text-white p-3 min-vh-100">
                    <h5 className="text-center mb-4">Admin Panel</h5>
                    <SideMenu activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />
                </Col>


                {/* Content Area */}
                <Col sm={10} className="p-4">
                    {renderContent()}
                </Col>
            </Row>
        </Container>
    );
};
// Side Menu
const SideMenu = ({ activeTab, setActiveTab, onLogout }) => (
    <Nav className="flex-column">
        <MenuItem icon={<FaChartBar />} text="Dashboard" activeTab={activeTab} setActiveTab={setActiveTab} />
        <MenuItem icon={<FaBox />} text="Products" activeTab={activeTab} setActiveTab={setActiveTab} />
        <MenuItem
            icon={<FaHome />}
            text="Back to Home"
            activeTab=""
            setActiveTab={() => (window.location.href = '/')}
            variant="outline-primary"
        />
        <MenuItem
            icon={<FaSignOutAlt />}
            text="Logout"
            activeTab=""
            setActiveTab={onLogout}
            variant="outline-danger"
        />
    </Nav>
);
// Menu Item Component
const MenuItem = ({ icon, text, activeTab, setActiveTab, variant }) => (
    <Nav.Item className="mb-2">
        <Button
            variant={variant || (activeTab === text ? 'warning' : 'outline-light')}
            className="w-100 text-start d-flex align-items-center"
            style={{ color: activeTab === text ? '#000' : '#fff', backgroundColor: activeTab === text ? '#FFA15C' : '' }}
            onClick={() => setActiveTab(text)}
        >
            <span className="me-2">{icon}</span> {text}
        </Button>
    </Nav.Item>
);
// Dashboard Card Component
export const DashboardCard = ({ title, value, icon }) => (
    <Card
        className="shadow-sm mb-4"
        style={{ backgroundColor: 'white', color: 'black', border: '1px solid #FFA15C', }}>
        <Card.Body className="d-flex align-items-center">
            <div className="bg-light p-3 rounded fs-3" style={{ color: '#FFA15C' }}>{icon}</div>
            <div className="ms-3">
                <Card.Title className="mb-1" >{title}</Card.Title>
                <h5 className="mb-0" style={{ color: '#FFA15C' }}>{value}</h5>
            </div>
        </Card.Body>
    </Card>
);
export default AdminDashboard;
