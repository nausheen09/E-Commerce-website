import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const UrbanStorie = () => {
    return (
        <Container className="mb-5">
            <Row className="gx-4">  {/* gx-4 for horizontal spacing */}
                {/* First Card - Urban Stories */}
                <Col md={6}>
                    <Card className="h-200 text-white position-relative border-0">
                        <Card.Img
                            src="src/assets/img/gallery/urban.png"
                            alt="Urban Stories"
                            className="h-100"
                            style={{ objectFit: "cover" }}
                        />
                        <Card.ImgOverlay
                            className="d-flex flex-column justify-content-start align-items-start"
                            style={{
                                background: "rgba(0, 0, 0, 0.5)",
                                padding: "70px 40px", // Adjusted top & left padding
                            }}
                        >
                            <h1 className="fs-md-4 fs-lg-7 text-light">Urban Stories</h1>
                            <h5 className="fs-2 text-light">Collection</h5>
                        </Card.ImgOverlay>
                        <a href="#!" className="stretched-link"></a>
                    </Card>
                </Col>

                {/* Second Card - Country Stories */}
                <Col md={6}>
                    <Card className="h-200 text-white position-relative border-0">
                        <Card.Img
                            src="src/assets/img/gallery/country.png"
                            alt="Country Stories"
                            className="h-100"
                            style={{ objectFit: "cover" }}
                        />
                        <Card.ImgOverlay
                            className="d-flex flex-column justify-content-end align-items-start"
                            style={{
                                background: "rgba(0, 0, 0, 0.5)",
                                padding: "70px 40px", // Adjusted bottom & left padding
                            }}
                        >
                            <h1 className="fs-md-4 fs-lg-7 text-light">Country Stories</h1>
                            <h5 className="fs-2 text-light">Collection</h5>
                        </Card.ImgOverlay>
                        <a href="#!" className="stretched-link"></a>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default UrbanStorie;