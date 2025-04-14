import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // If using React Router
import { Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const Products = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(`${apiUrl}/products`);
				setProducts(Array.isArray(response?.data.products) ? response.data.products : []);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};
		fetchProducts();
	}, []);

	if (loading)
		return (
			<div className='d-flex justify-content-center align-items-center' style={{ height: '200px' }}>
				<Spinner animation='border' variant='primary' />
			</div>
		);

	if (error)
		return (
			<Alert variant='danger'>
				Error loading products: {error}
			</Alert>
		);

	return (
		<div className='bg-light py-5'>
			<div className='container'>
				{/* Product Grid */}
				{products.length > 0 ? (
					<Row xs={1} sm={2} lg={3} xl={4} className='g-4'>
						{products.map((product) => (
							<Col key={product._id}>
								<Card className='h-100'>
									<Card.Img
										variant='top'
										src={product.image || '/placeholder-product.jpg'}
										alt={product.name}
										style={{ height: '200px', objectFit: 'cover' }}
									/>
									<Card.Body>
										<Card.Title>{product.title}</Card.Title>
										<Card.Text>{product.description?.substring(0, 60)}...</Card.Text>
										<Card.Text className='fw-bold'>${product.price.toFixed(2)}</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Link
											to={`/products/${product._id}`}
											className='btn btn-primary w-100'>
											Add to Cart
										</Link>
									</Card.Footer>
								</Card>
							</Col>
						))}
					</Row>
				) : (
					<div className='text-center py-5'>
						<svg className='mx-auto mb-3' width='3em' height='3em' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
						<h3 className='mt-2'>No products available</h3>
						<p>Check back later for new products</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Products;