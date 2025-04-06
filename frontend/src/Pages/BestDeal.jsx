import React, { useEffect, useState } from "react";
import { Carousel, Card, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const BestDealsCarousel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const chunkArray = (arr, size) => {
    return arr.reduce((chunks, item, index) => {
      const chunkIndex = Math.floor(index / size);
      if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
      chunks[chunkIndex].push(item);
      return chunks;
    }, []);
  };

  const productChunks = chunkArray(products, 4);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-5 fw-bold fs-1" style={{color:" #212121"}}>Best Deals </h2>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <Carousel
          indicators={false}
          prevIcon={<BsChevronLeft size={32} className="text-dark" />}
          nextIcon={<BsChevronRight size={32} className="text-dark" />}
        >
          {productChunks.map((chunk, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {chunk.map((product) => (
                  <Col key={product.id} md={3} sm={6} xs={12} className="d-flex justify-content-center">
                    <Card style={{ width: "18rem", height: "25rem" }} className="shadow-sm border-0">
                      <Card.Img variant="top" src={product.image} height="210px" className="p-4 mt-4" />
                      <Card.Body>
                        <Card.Title className="fw-bold">{product.title.slice(0, 20)}...</Card.Title>
                        <Card.Text className="fw-bold" style={{ color: "#FFA15C", fontSize: "18px" }}>
                          ${product.price}
                        </Card.Text>
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
                        >
                          Buy Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </Container>
  );
};

export default BestDealsCarousel;

