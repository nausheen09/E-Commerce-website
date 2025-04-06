import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";


export const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-2 bg-light border-bottom border-white border-5 text-center">
                <div className="bg-light overlay" style={{
                    backgroundImage: "url(/src/assets/img/gallery/header-bg.png)",
                    backgroundSize: "cover",
                    padding: "300px 0",
                }}>
                    <Container className="mb-4">
                        <Row className="justify-content-around">
                            <Col md={8} style={{ color: " #212121" }}>

                                <h1 className="fs-4 fw-normal">With an outstanding style, only for you</h1>
                                <h1 className=" fw-bold" style={{ fontSize: " 53px" }}>Exclusively designed for you</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            {/* For Her & For Him Section */}
            <section className="py-0" id="header" style={{ marginTop: "-24rem" }}>
                <Container>
                    <Row className="g-0">
                        <Col md={6}>
                            <Card className="h-100 border-0">
                                <Card.Img src="/src/assets/img/gallery/her.png" alt="For Her" />
                                <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                                    <Button variant="light" size="lg">For Her</Button>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="h-100 text-white border-0">
                                <Card.Img src="/src/assets/img/gallery/him.png" alt="For Him" />
                                <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                                    <Button variant="light" size="lg">For Him</Button>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};
