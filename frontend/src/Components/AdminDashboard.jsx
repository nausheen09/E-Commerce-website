import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Dashboard.css";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Product from './Products.jsx';  // Import your Products component
import AddProductModal from './AddProductModel'; // Ensure you are importing AddProductModal correctly

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [showProduct, setShowProduct] = useState(false); // State for toggling Product view
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control AddProductModal visibility
    const [products, setProducts] = useState([]); // State for products

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = () => {
        console.log("Logging out...");
        window.location.href = "/login";
    };

    const handleProductClick = () => {
        setShowProduct(!showProduct); // Toggle the visibility of Product component
    };

    // Function to open the add product modal
    const handleAddProduct = () => {
        setIsModalOpen(true); // Open the AddProductModal
    };

    useEffect(() => {
        const year = new Date().getFullYear();
        // document.getElementById("copyright").innerHTML = `© ${year} Creative Tim`;
    }, []);

    return (
        <div className="d-flex" id="wrapper">
            {/* Sidebar */}
            <div className={`bg-dark text-white border-end sidebar ${isSidebarOpen ? "show" : "hide"}`} id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-purple text-center py-4 fs-4">
                    <a href="http://www.creative-tim.com" className="text-white text-decoration-none">
                        Creative Tim
                    </a>
                </div>
                <div className="list-group list-group-flush">
                    <a href="/admin" className="list-group-item list-group-item-action bg-dark text-white">
                        <i className="bi bi-speedometer2 me-2"></i> Dashboard
                    </a>

                    <button
                        onClick={handleProductClick}
                        className="list-group-item list-group-item-action bg-dark text-white">
                        <BsPerson className="me-2" />Product
                    </button>

                    <a href="/" className="list-group-item list-group-item-action bg-dark text-white">
                        <i className="bi bi-house-door me-2"></i> Back to Home
                    </a>
                    <button
                        onClick={handleLogout}
                        className="list-group-item list-group-item-action bg-dark text-white border-0 text-start">
                        <i className="bi bi-box-arrow-right me-2"></i> Logout
                    </button>
                </div>
            </div>

            {/* Page Content */}
            <div id="page-content-wrapper" className="w-100">
                {/* Top Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <button className="btn btn-outline-dark me-2 d-lg-none" onClick={toggleSidebar}>
                            <i className="bi bi-list"></i>
                        </button>
                        <span className="navbar-text fw-bold d-none d-lg-inline">Dashboard</span>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex ms-auto me-3">
                                <input className="form-control" type="search" placeholder="Search" />
                                <button className="btn btn-outline-secondary ms-2" type="submit">
                                    <i className="bi bi-search"></i>
                                </button>
                            </form>
                            <ul className="navbar-nav">
                                <li className="nav-item me-3">
                                    <a className="nav-link position-relative" href="#">
                                        <i className="bi bi-bell"></i>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            5
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-person"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Dashboard Content */}
                <div className="container-fluid mt-4">
                    {/* Render the Product component if showProduct is true */}
                    {showProduct && <Product />}

                    <div className="row">
                        {[{ title: "Daily Sales", subtitle: "55% increase today", class: "success", icon: "bar-chart-line" },
                          { title: "Email Subscriptions", subtitle: "Last Campaign Performance", class: "warning", icon: "envelope" },
                          { title: "Completed Tasks", subtitle: "Last Campaign Performance", class: "danger", icon: "check-circle" }]
                            .map((card, index) => (
                            <div className="col-xl-4 col-lg-6 mb-4" key={index}>
                                <div className={`card border-left-${card.class} shadow h-100`}>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h5 className="card-title">{card.title}</h5>
                                                <p className="card-text text-muted">{card.subtitle}</p>
                                            </div>
                                            <i className={`bi bi-${card.icon} fs-2 text-${card.class}`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Add Product Button */}
                        <Button variant="primary" onClick={handleAddProduct}>Add Product</Button>

                    </div>
                </div>
            </div>

            {/* Add Product Modal */}
            <AddProductModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                setProducts={setProducts} // Set the state of products after adding a new product
            />
        </div>
    );
};
export default Dashboard;



// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./Dashboard.css";
// import { BsPerson } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { Navbar, Nav, Container } from "react-bootstrap";
// // Import the Product component here
// import Product from './Products.jsx'; // Adjust the import path accordingly
// const Dashboard = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [showProduct, setShowProduct] = useState(false); // State to toggle product display
//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };
//     const handleLogout = () => {
//         console.log("Logging out...");
//         window.location.href = "/login";
//     };

//     const handleProductClick = () => {
//         setShowProduct(!showProduct); // Toggle the visibility of Product component
//     };

//     useEffect(() => {
//         const year = new Date().getFullYear();
//         document.getElementById("copyright").innerHTML = `© ${year} Creative Tim`;
//     }, []);

//     return (
//         <div className="d-flex" id="wrapper">
//             {/* Sidebar */}
//             <div className={`bg-dark text-white border-end sidebar ${isSidebarOpen ? "show" : "hide"}`} id="sidebar-wrapper">
//                 <div className="sidebar-heading border-bottom bg-purple text-center py-4 fs-4">
//                     <a href="http://www.creative-tim.com" className="text-white text-decoration-none">
//                         Creative Tim
//                     </a>
//                 </div>
//                 <div className="list-group list-group-flush">
//                     <a href="/admin" className="list-group-item list-group-item-action bg-dark text-white">
//                         <i className="bi bi-speedometer2 me-2"></i> Dashboard
//                     </a>

//                     {/* Use the handleProductClick to toggle visibility */}
//                     <button
//                         onClick={handleProductClick}
//                         className="list-group-item list-group-item-action bg-dark text-white">
//                         <BsPerson className="me-2" />Product
//                     </button>

//                     <a href="/" className="list-group-item list-group-item-action bg-dark text-white">
//                         <i className="bi bi-house-door me-2"></i> Back to Home
//                     </a>
//                     <button
//                         onClick={handleLogout}
//                         className="list-group-item list-group-item-action bg-dark text-white border-0 text-start">
//                         <i className="bi bi-box-arrow-right me-2"></i> Logout
//                     </button>
//                 </div>
//             </div>

//             {/* Page Content */}
//             <div id="page-content-wrapper" className="w-100">
//                 {/* Top Navbar */}
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
//                     <div className="container-fluid">
//                         <button className="btn btn-outline-dark me-2 d-lg-none" onClick={toggleSidebar}>
//                             <i className="bi bi-list"></i>
//                         </button>
//                         <span className="navbar-text fw-bold d-none d-lg-inline">Dashboard</span>

//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <form className="d-flex ms-auto me-3">
//                                 <input className="form-control" type="search" placeholder="Search" />
//                                 <button className="btn btn-outline-secondary ms-2" type="submit">
//                                     <i className="bi bi-search"></i>
//                                 </button>
//                             </form>
//                             <ul className="navbar-nav">
//                                 <li className="nav-item me-3">
//                                     <a className="nav-link position-relative" href="#">
//                                         <i className="bi bi-bell"></i>
//                                         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                                             5
//                                         </span>
//                                     </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#">
//                                         <i className="bi bi-person"></i>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>

//                 {/* Dashboard Content */}
//                 <div className="container-fluid mt-4">
//                     {/* Render the Product component if showProduct is true */}
//                     {showProduct && <Product />}

//                     <div className="row">
//                         {[
//                             { title: "Daily Sales", subtitle: "55% increase today", class: "success", icon: "bar-chart-line" },
//                             { title: "Email Subscriptions", subtitle: "Last Campaign Performance", class: "warning", icon: "envelope" },
//                             { title: "Completed Tasks", subtitle: "Last Campaign Performance", class: "danger", icon: "check-circle" },
//                         ].map((card, index) => (
//                             <div className="col-xl-4 col-lg-6 mb-4" key={index}>
//                                 <div className={`card border-left-${card.class} shadow h-100`}>
//                                     <div className="card-body">
//                                         <div className="d-flex justify-content-between align-items-center">
//                                             <div>
//                                                 <h5 className="card-title">{card.title}</h5>
//                                                 <p className="card-text text-muted">{card.subtitle}</p>
//                                             </div>
//                                             <i className={`bi bi-${card.icon} fs-2 text-${card.class}`}></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Stat Cards */}
//                     <div className="row">
//                         {[
//                             { label: "Used Space", value: "49/50 GB", icon: "hdd", color: "warning" },
//                             { label: "Revenue", value: "$34,245", icon: "currency-dollar", color: "success" },
//                             { label: "Fixed Issues", value: "75", icon: "wrench", color: "danger" },
//                             { label: "Followers", value: "+245", icon: "twitter", color: "info" },
//                         ].map((stat, index) => (
//                             <div className="col-xl-3 col-md-6 mb-4" key={index}>
//                                 <div className={`card border-left-${stat.color} shadow h-100 py-2`}>
//                                     <div className="card-body">
//                                         <div className="d-flex justify-content-between align-items-center">
//                                             <div>
//                                                 <div className="text-xs fw-bold text-uppercase mb-1 text-muted">{stat.label}</div>
//                                                 <div className="h5 mb-0 fw-bold text-${stat.color}">{stat.value}</div>
//                                             </div>
//                                             <i className={`bi bi-${stat.icon} fs-2 text-${stat.color}`}></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Footer */}
//                 <footer className="footer mt-auto py-2 bg-light text-center">
//                     <div className="container">
//                         <span id="copyright"></span>
//                     </div>
//                 </footer>
//             </div>
//         </div>
//     );
// };
// export default Dashboard;




// ------my old code ui
// import React, { useState, useEffect } from "react";
// import { Navbar, Nav, Container, Row, Col, Card, Button } from "react-bootstrap";
// import {
//     FiShoppingCart, FiSearch, FiUser, FiHeart, FiBarChart2, FiMenu, FiX
// } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// const AdminDashboard = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 992);
//             if (window.innerWidth >= 992) {
//                 setIsSidebarOpen(true);
//             }
//         };

//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     const handleLogout = () => navigate("/logout");
//     const handleGoHome = () => navigate("/");

//     return (
//         <div className="d-flex">

//             {/* Sidebar */}
//             <div
//                 className={`bg-dark text-light p-3 vh-100 position-fixed transition-all ${isSidebarOpen ? "d-block" : "d-none"} ${isMobile ? "" : "d-lg-block"}`}
//                 style={{
//                     width: "250px",
//                     zIndex: 1050,
//                     left: isSidebarOpen ? "0" : "-250px",
//                     transition: "left 0.3s ease-in-out",
//                 }}
//             >
//                 <div className="d-flex justify-content-between align-items-center">
//                     <h4 className="fw-bold">Admin Panel</h4>
//                     {isMobile && <FiX size={25} className="text-light" onClick={toggleSidebar} />}
//                 </div>
//                 <Nav className="flex-column mt-4">
//                     <Nav.Link href="#" className="text-light">Dashboard</Nav.Link>
//                     <Nav.Link href="#" className="text-light">Product</Nav.Link>
//                     <Nav.Link onClick={handleGoHome} className="text-light">BackTo Home</Nav.Link>
//                 </Nav>
//             </div>

//             {/* Main Content */}
//             <div
//                 className="flex-grow-1"
//                 style={{
//                     marginLeft: !isMobile && isSidebarOpen ? "250px" : "0",
//                     transition: "margin-left 0.3s ease-in-out",
//                     width: "100%"
//                 }}
//             >
//                 {/* Navbar */}
//                 <Navbar expand="lg" bg="dark" variant="dark" className="shadow-sm px-3">
//                     <Container fluid>
//                         {isMobile && (
//                             <FiMenu size={25} className="text-light me-3" onClick={toggleSidebar} />
//                         )}
//                         <Navbar.Brand href="#">Admin Dashboard</Navbar.Brand>
//                         <div className="d-flex gap-3 ms-auto">
//                             <Nav.Link href="#"><FiSearch size={20} color="white" /></Nav.Link>
//                             <Nav.Link href="#"><FiShoppingCart size={20} color="white" /></Nav.Link>
//                             <Nav.Link href="#"><FiUser size={20} color="white" /></Nav.Link>
//                             <Button onClick={handleLogout} variant="outline-light" size="sm">Logout</Button>
//                         </div>
//                     </Container>
//                 </Navbar>

//                 {/* Dashboard Content */}
//                 <Container className="mt-4">
//                     <Row>
//                         <Col xs={12} sm={6} md={4} className="mb-4">
//                             <Card className="p-3 bg-success text-light">
//                                 <Card.Body>
//                                     <FiBarChart2 size={30} />
//                                     <h5 className="mt-2">Daily Sales</h5>
//                                     <p>55% increase in sales today.</p>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                         <Col xs={12} sm={6} md={4} className="mb-4">
//                             <Card className="p-3 bg-warning text-dark">
//                                 <Card.Body>
//                                     <FiHeart size={30} />
//                                     <h5 className="mt-2">Email Subscriptions</h5>
//                                     <p>Campaign sent 2 days ago.</p>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                         <Col xs={12} sm={6} md={4} className="mb-4">
//                             <Card className="p-3 bg-danger text-light">
//                                 <Card.Body>
//                                     <FiBarChart2 size={30} />
//                                     <h5 className="mt-2">Completed Tasks</h5>
//                                     <p>Last campaign performance.</p>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         </div>
//     );
// };
// export default AdminDashboard;



//sahi set kam
// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./Dashboard.css";
// import { BsPerson } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { Navbar, Nav, Container } from "react-bootstrap";
// const Dashboard = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     const handleLogout = () => {
//         console.log("Logging out...");
//         window.location.href = "/login"; r
//     };

//     useEffect(() => {
//         const year = new Date().getFullYear();
//         document.getElementById("copyright").innerHTML = `© ${year} Creative Tim`;
//     }, []);

//     return (
//         <div className="d-flex" id="wrapper">
//             {/* Sidebar */}
//             <div className={`bg-dark text-white border-end sidebar ${isSidebarOpen ? "show" : "hide"}`} id="sidebar-wrapper">

//                 <div className="sidebar-heading border-bottom bg-purple text-center py-4 fs-4">
//                     <a href="http://www.creative-tim.com" className="text-white text-decoration-none">
//                         Creative Tim
//                     </a>
//                 </div>
//                 <div className="list-group list-group-flush">
//                     <a href="/admin" className="list-group-item list-group-item-action bg-dark text-white">
//                         <i className="bi bi-speedometer2 me-2"></i> Dashboard
//                     </a>

//                     <Nav.Link as={Link} to="" className="list-group-item list-group-item-action bg-dark text-white"> <BsPerson className="me-2" />Product</Nav.Link>

//                     <a href="/" className="list-group-item list-group-item-action bg-dark text-white">
//                         <i className="bi bi-house-door me-2"></i> Back to Home
//                     </a>
//                     <button
//                         onClick={handleLogout}
//                         className="list-group-item list-group-item-action bg-dark text-white border-0 text-start" >
//                         <i className="bi bi-box-arrow-right me-2"></i> Logout
//                     </button>
//                 </div>
//             </div>

//             {/* Page Content */}
//             <div id="page-content-wrapper" className="w-100">
//                 {/* Top Navbar */}
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
//                     <div className="container-fluid">
//                         <button className="btn btn-outline-dark me-2 d-lg-none" onClick={toggleSidebar}>
//                             <i className="bi bi-list"></i>
//                         </button>
//                         <span className="navbar-text fw-bold d-none d-lg-inline">Dashboard</span>

//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <form className="d-flex ms-auto me-3">
//                                 <input className="form-control" type="search" placeholder="Search" />
//                                 <button className="btn btn-outline-secondary ms-2" type="submit">
//                                     <i className="bi bi-search"></i>
//                                 </button>
//                             </form>
//                             <ul className="navbar-nav">
//                                 <li className="nav-item me-3">
//                                     <a className="nav-link position-relative" href="#">
//                                         <i className="bi bi-bell"></i>
//                                         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                                             5
//                                         </span>
//                                     </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#">
//                                         <i className="bi bi-person"></i>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>

//                 {/* Dashboard Content */}
//                 <div className="container-fluid mt-4">
//                     <div className="row">
//                         {[
//                             { title: "Daily Sales", subtitle: "55% increase today", class: "success", icon: "bar-chart-line" },
//                             { title: "Email Subscriptions", subtitle: "Last Campaign Performance", class: "warning", icon: "envelope" },
//                             { title: "Completed Tasks", subtitle: "Last Campaign Performance", class: "danger", icon: "check-circle" },
//                         ].map((card, index) => (
//                             <div className="col-xl-4 col-lg-6 mb-4" key={index}>
//                                 <div className={`card border-left-${card.class} shadow h-100`}>
//                                     <div className="card-body">
//                                         <div className="d-flex justify-content-between align-items-center">
//                                             <div>
//                                                 <h5 className="card-title">{card.title}</h5>
//                                                 <p className="card-text text-muted">{card.subtitle}</p>
//                                             </div>
//                                             <i className={`bi bi-${card.icon} fs-2 text-${card.class}`}></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Stat Cards */}
//                     <div className="row">
//                         {[
//                             { label: "Used Space", value: "49/50 GB", icon: "hdd", color: "warning" },
//                             { label: "Revenue", value: "$34,245", icon: "currency-dollar", color: "success" },
//                             { label: "Fixed Issues", value: "75", icon: "wrench", color: "danger" },
//                             { label: "Followers", value: "+245", icon: "twitter", color: "info" },
//                         ].map((stat, index) => (
//                             <div className="col-xl-3 col-md-6 mb-4" key={index}>
//                                 <div className={`card border-left-${stat.color} shadow h-100 py-2`}>
//                                     <div className="card-body">
//                                         <div className="d-flex justify-content-between align-items-center">
//                                             <div>
//                                                 <div className="text-xs fw-bold text-uppercase mb-1 text-muted">{stat.label}</div>
//                                                 <div className="h5 mb-0 fw-bold text-${stat.color}">{stat.value}</div>
//                                             </div>
//                                             <i className={`bi bi-${stat.icon} fs-2 text-${stat.color}`}></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Footer */}
//                 <footer className="footer mt-auto py-2 bg-light text-center">
//                     <div className="container">
//                         <span id="copyright"></span>
//                     </div>
//                 </footer>
//             </div>
//         </div>
//     );
// };
// export default Dashboard;