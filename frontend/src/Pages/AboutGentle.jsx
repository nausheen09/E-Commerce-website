import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AboutGentle = () => {
    return (
        <>
            <section>
                <Container className='py-0 '>
                    <Row className="h-100 g-0 align-items-center" style={{background: "#eeeeee"}}>
                        <Col md={6} className="d-flex flex-column justify-content-center p-4">
                            <h1 className=" fw-bold lh-sm fs-4 fs-lg-6 fs-xl-6 ">Gentle Formal Looks</h1>
                            <p className="mb-5 fs-5">We provide the top formal apparel package to make your job look confident and comfortable. Stay connected.</p>
                            <Button variant="dark" size="lg">Explore Collection</Button>
                        </Col>
                        <Col md={6}>
                            <Card className="h-100 border-0">
                                <Card.Img className="h-100" src="src/assets/img/gallery/sharp-dress.png" alt="Gentle Formal Looks" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        

            <section className="py-0 pb-3">
                <Container >
                    <Row className="h-100 g-2 justify-content-center">
                        {[
                            { img: "shoes-blog-1.png", author: "author-1.png", name: "Kelly Hudson", title: "How important are shoes in your style?", text: "Is it possible to assess a person just on the basis of their footwear? It matters for the outsiders that we meet every day..." },
                            { img: "fashion-blog-2.png", author: "author-2.png", name: "Rotondwa Johnny", title: "Fashion trend forecast for Summer 2021", text: "This season has seen some beautiful pieces. Over the previous several weeks, commanding coats, and elegant face masks have ruled Fashion Weeks..." },
                            { img: "spring-dress-blog-3.png", author: "author-3.png", name: "Martin", title: "Spring exclusive collection for Men & Women", text: "Explore the first real-time photographic fashion magazine NOWFASHION to broadcast exclusive live fashion shows..." }
                        ].map((item, index) => (
                            <Col key={index} sm={9} md={4} className="mb-3 mb-md-0 h-100">
                                <Card className="text-white h-100 border-0">
                                    <Card.Img className="h-100" src={`src/assets/img/gallery/${item.img}`} alt={item.title} />
                                    <Card.Body className="px-xl-5 px-md-3 pt-0 pb-4">
                                        <div className="d-flex align-items-center mt-n5 me-auto bg-light p-2 rounded">
                                            <img src={`src/assets/img/gallery/${item.author}`} width="60" alt={item.name} className="rounded-circle" />
                                            <div className="ms-3">
                                                <h6 className="text-dark m-0">{item.name}</h6>
                                                <p className="text-muted m-0">Fashion Activist</p>
                                            </div>
                                        </div>
                                        <h3 className="fw-bold text-dark mt-3 text-truncate">{item.title}</h3>
                                        <p className="text-muted mt-2">{item.text}</p>
                                        <Button variant="link" className="text-dark fs-5 px-0">Read more →</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default AboutGentle;

