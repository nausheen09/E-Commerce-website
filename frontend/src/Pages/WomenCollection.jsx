import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const WomenCollection = () => {
    return (
        <Container className="my-5">
            <Row className="align-items-center" style={{ background: "#eeeeee" }}>
                <Col md={6} className="p-4">
                    <h4 className="text-secondary">Exclusive Collection 2021</h4>
                    <h1 className="fw-bold" style={{ color: " #212121" }}>Be Exclusive</h1>
                    <p className="fs-5">The best everyday option in a Super Saver range within a reasonable price. It is our responsibility to keep you 100 percent stylish. Be smart & trendy with us.</p>
                    <Button variant="dark" size="lg">Explore</Button>
                </Col>
                <Col md={6}>
                    <Card className="text-white">
                        <Card.Img src="src/assets/img/gallery/outfit.png" alt="Outfit" />
                        <Card.ImgOverlay className="d-flex align-items-end justify-content-center bg-opacity-50">
                            <Button variant="light" size="lg" className='fw-bolder'>Outfit →</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>

            <Row className="g-3 mt-3">
                {[
                    { img: "src/assets/img/gallery/vanity-bag.png", title: "Vanity Bags" },
                    { img: "src/assets/img/gallery/hat.png", title: "Hats" },
                    { img: "src/assets/img/gallery/high-heels.png", title: "High Heels" }
                ].map((item, index) => (
                    <Col md={4} key={index}>
                        <Card className="text-white">
                            <Card.Img src={item.img} alt={item.title} />
                            <Card.ImgOverlay className="d-flex align-items-end justify-content-center bg-opacity-50">
                                <Button variant="light" size="lg" className='fw-bolder'>{item.title} →</Button>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default WomenCollection;
