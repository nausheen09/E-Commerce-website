import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Card, Row, Col, ListGroup } from 'react-bootstrap'; // React Bootstrap components

const Product = ({ id, name, price, image, description }) => {
    return (
        <Card className="mb-4 shadow-sm border-0">
            <Row className="g-0 align-items-center">
                {/* Image Section */}
                <Col xs={4} className="text-center p-3">
                    <img
                        src={image}
                        alt={name}
                        className="img-fluid"
                        style={{ maxHeight: "160px", objectFit: "contain" }}
                    />
                </Col>

                {/* Content Section */}
                <Col xs={8}>
                    <Card.Body className="px-3">
                        <Card.Title className="fw-bold">{name.slice(0, 35)}...</Card.Title>
                        <Card.Text className="text-muted" style={{ fontSize: "14px" }}>
                            {description.slice(0, 80)}...
                        </Card.Text>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <span className="fw-bold" style={{ color: "#FFA15C", fontSize: "18px" }}>
                                ${price}
                            </span>

                            <Button
                                variant="dark"
                                className="text-white"
                                style={{}}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = "#9E9E9E;";
                                    e.target.style.color = "white";
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = "black";
                                    e.target.style.color = "white";
                                }}
                            > Remove
                            </Button>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};


// Main Shopping Cart Component
const Cart = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Unauthorized please log in');
                navigate('/login');
                return;
            }
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/cart`
                    // 'http://localhost:5000/api/cart'
                    , {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                    credentials: 'include',
                });

                const data = await response.json();
                if (data.success) {
                    setLoggedIn(true);
                } else {
                    toast.error('Please login');
                    navigate('/login');
                }
            } catch (error) {
                console.error('❌ error in fetching cart items', error);
                setLoggedIn(false);
            }
        };

        fetchItems();
    }, [navigate]);

    useEffect(() => {
        // Fetch product data from fakestoreapi
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    if (!isLoggedIn) {
        return null; // Redirect if not logged in
    }

    // Slice the first two products from the fetched data
    const limitedProducts = products.slice(0, 2);

    return (
        <section className="py-8" style={{ background: "" }}>
            <div className="container py-5">
                <h2 className="mb-4 fw-bold" style={{ color: "#212121" }}>Shopping Cart</h2>
                <Row>
                    <Col md={8}>
                        {limitedProducts.map((product) => (
                            <Product
                                key={product.id}
                                id={product.id}
                                name={product.title}
                                price={product.price}
                                image={product.image}
                                description={product.description}
                            />
                        ))}
                    </Col>

                    <Col md={4}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Card.Title className='fw-bold'>Order Summary</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span>Original price</span>
                                        <span>$7,592.00</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span>Savings</span>
                                        <span>- $299.00</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span>Store Pickup</span>
                                        <span>$99</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span>Tax</span>
                                        <span>$799</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between font-weight-bold">
                                        <span>Total</span>
                                        <span>$8,191.00</span>
                                    </ListGroup.Item>
                                </ListGroup>
                                <Button
                                    variant="dark"
                                    className="text-white w-100 mt-3"
                                    onMouseOver={(e) => {
                                        e.target.style.backgroundColor = "#9E9E9E;";
                                        e.target.style.color = "white";
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.backgroundColor = "black";
                                        e.target.style.color = "white";
                                    }}
                                >Proceed to Checkout
                                </Button>
                                <div className="text-center mt-3">
                                    <span>or </span>
                                    <a href="#" style={{ color: "#FFA15C" }}>Continue Shopping</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    );
};
export default Cart;
