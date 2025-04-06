import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Summer = () => {
    return (
        <section className="py-0" id="outlet">
            <Container>
                <Row className="h-100 g-0">
                    <Col md={6}>
                        <Card className="h-100 text-white card-span">
                            <Card.Img className="h-100" src="src/assets/img/gallery/summer.png" alt="..." />
                            <Card.ImgOverlay className="bg-dark-gradient rounded-0 d-flex align-items-end">
                                <div className="p-5 p-md-2 p-xl-5">
                                    <h1 className="fs-md-4 fs-lg-7 text-light">Summer of '21</h1>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={6} className="h-100">
                        <Row className="h-100 g-0">
                            {[
                                { img: "sunglasses.png", title: "Sunglasses" },
                                { img: "footwear.png", title: "Footwear" },
                                { img: "hat-black-border.png", title: "Hat" },
                                { img: "watches.png", title: "Watches" }
                            ].map((item, index) => (
                                <Col md={6} key={index}>
                                    <Card className="h-100 text-white card-span">
                                        <Card.Img className="h-100" src={`src/assets/img/gallery/${item.img}`} alt={item.title} />
                                        <Card.ImgOverlay className="bg-dark-gradient rounded-0 d-flex align-items-end">
                                            <div className="p-5 p-xl-5 p-md-0">
                                                <h3 className="text-light" style={{background:"rgba(66, 66, 66, 0.25)"}}>{item.title}</h3>
                                            </div>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default Summer;