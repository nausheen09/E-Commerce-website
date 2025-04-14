import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Button,
	Card,
	Col,
	Container,
	Modal,
	Row,
	Spinner,
} from 'react-bootstrap';
import AddProductModal from './AddProductModel.jsx';
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const Products = () => {
	const [products, setProducts] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [isAdding, setIsAdding] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(`${apiUrl}/products`);
				setProducts(
					Array.isArray(response?.data)
						? response.data
						: Array.isArray(response?.data?.products)
							? response.data.products
							: []
				);

			} catch (error) {
				console.error('Error fetching products:', error);
			} finally {
				setLoading(false);
			}
		};
		fetchProducts();
	}, []);

	const deleteProduct = async (id, setProducts) => {
		try {
			const res = await axios.delete(`http://localhost:5000/api/products/delete/${id}`);
			alert(res.data.message);
			setProducts(prev => prev.filter(p => p._id !== id));
		} catch (err) {
			console.error('Error deleting:', err);
			alert('Failed to delete product');
		}
	};

	return (
		<Container className='py-4'>
			<div className='d-flex justify-content-between align-items-center mb-4'>
				<h1>Products</h1>
				<Button
					variant='primary'
					onClick={() => {
						setSelectedProduct(null);
						setIsModalOpen(true);
					}}>
					Add Product
				</Button>
			</div>

			{loading ? (
				<div className='text-center'>
					<Spinner animation='border' />
					<p>Loading products...</p>
				</div>
			) : (
				<Row xs={1} sm={2} md={3} lg={4} className='g-4'>
					{products.map((product) => {
						if (!product || typeof product !== 'object') return null;

						return (
							<Col key={product._id}>
								<Card>
									<Card.Img
										variant='top'
										src={product?.image || '/placeholder-image.jpg'}
										style={{ height: '200px', objectFit: 'cover' }}
									/>
									<Card.Body>
										<Card.Title>{product.title || 'Untitled'}</Card.Title>
										<Card.Text>${product.price || 0}</Card.Text>
										<div className='d-flex gap-2'>
											<Button
												variant='warning'
												onClick={() => {
													setSelectedProduct(product);
													setIsModalOpen(true);
												}}
												disabled={isAdding}>
												Update
											</Button>
											<Button
												variant='danger'
												onClick={() => {
													setSelectedProduct(product);
													setIsDeleteModalOpen(true);
												}}
												disabled={isDeleting}>
												Delete
											</Button>
										</div>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
			)}

			{/* Add / Edit Product Modal */}
			<AddProductModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				product={selectedProduct}
				setProducts={setProducts}
				setIsAdding={setIsAdding} />

			{/* Delete Confirmation Modal */}
			<Modal
				show={isDeleteModalOpen}
				onHide={() => setIsDeleteModalOpen(false)}
				centered>
				<Modal.Header closeButton>
					<Modal.Title>Confirm Delete</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						Are you sure you want to delete{' '}
						<strong>{selectedProduct?.title}</strong>?
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={() => setIsDeleteModalOpen(false)}>
						Cancel
					</Button>

					<Button
						variant='danger'
						onClick={() => {
							if (selectedProduct) {
								setIsDeleting(true);
								deleteProduct(selectedProduct._id, setProducts).finally(() => {
									setIsDeleting(false);
									setIsDeleteModalOpen(false);
								});
							}
						}}
						disabled={isDeleting}>
						{isDeleting ? 'Deleting...' : 'Delete'}
					</Button>

				</Modal.Footer>
			</Modal>
		</Container>
	);
};
export default Products;