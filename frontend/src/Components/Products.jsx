import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddProductModal from './AddProductModel';
import { Button, Modal, Card, Row, Col, Spinner } from 'react-bootstrap';
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const Products = () => {
	const [products, setProducts] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [isAdding, setIsAdding] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	// Fetch products
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(`${apiUrl}/products`);
				setProducts(Array.isArray(response?.data) ? response.data : response?.data?.products || []);
			} catch (error) {
				console.error('Error fetching products:', error);
			} finally {
				setLoading(false);
			}
		};
		fetchProducts();
	}, []);

	const handleDelete = async () => {
		if (!selectedProduct) return;

		setIsDeleting(true);
		try {
			await axios.delete(`${apiUrl}/products/${selectedProduct._id}`);
			setProducts(products.filter((p) => p._id !== selectedProduct._id));
		} catch (error) {
			console.error('Error deleting product:', error);
		} finally {
			setIsDeleting(false);
			setIsDeleteModalOpen(false);
		}
	};

	return (
		<div className='container'>
			<div className='d-flex justify-content-between align-items-center mb-4'>
				<h1>Products</h1>
				<Button
					onClick={() => {
						setSelectedProduct(null);
						setIsModalOpen(true);
					}}
					variant='primary'>
					Add Product
				</Button>
			</div>

			{loading ? (
				<Spinner animation='border' variant='primary' />
			) : (
				<Row xs={1} sm={2} md={3} lg={4} className='g-4'>
					{products.map((product) => (
						<Col key={product._id}>
							<Card>
								<Card.Img
									variant='top'
									src={product.image || '/placeholder-image.jpg'}
									alt={product.title}
									className='img-fluid'
								/>
								<Card.Body>
									<Card.Title>{product.title}</Card.Title>
									<Card.Text>${product.price}</Card.Text>
									<div className='d-flex justify-content-between'>
										<Button
											onClick={() => {
												setSelectedProduct(product);
												setIsModalOpen(true);
											}}
											variant='warning'
											disabled={isAdding}>
											Update
										</Button>
										<Button
											onClick={() => {
												setSelectedProduct(product);
												setIsDeleteModalOpen(true);
											}}
											variant='danger'
											disabled={isDeleting}>
											Delete
										</Button>
									</div>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			)}

			{/* Add Product Modal */}
			<AddProductModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				product={selectedProduct}
				setProducts={setProducts}
				setIsAdding={setIsAdding}
			/>

			{/* Delete Confirmation Modal */}
			<Modal show={isDeleteModalOpen} onHide={() => setIsDeleteModalOpen(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Confirm Delete</Modal.Title>
				</Modal.Header>
				<Modal.Body>Are you sure you want to delete {selectedProduct?.title}?</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={() => setIsDeleteModalOpen(false)}>
						Cancel
					</Button>
					<Button
						variant='danger'
						onClick={handleDelete}
						disabled={isDeleting}>
						{isDeleting ? 'Deleting...' : 'Delete'}
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
export default Products;


//---- miss code 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddProductModal from './AddProductModal';
// const apiUrl = import.meta.env.VITE_API_BASE_URL;
// const Products = () => {
// 	const [products, setProducts] = useState([]);
// 	const [isModalOpen, setIsModalOpen] = useState(false);
// 	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
// 	const [selectedProduct, setSelectedProduct] = useState(null);
// 	const [loading, setLoading] = useState(true);
// 	const [isAdding, setIsAdding] = useState(false);
// 	const [isDeleting, setIsDeleting] = useState(false);

// 	// Fetch products
// 	useEffect(() => {
// 		const fetchProducts = async () => {
// 			try {
// 				const response = await axios.get(`${apiUrl}/products`);
// 			setProducts(Array.isArray(response?.data) ? response.data : response?.data?.products || []);
// 			} catch (error) {
// 				console.error('Error fetching products:', error);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};
// 		fetchProducts();
// 	}, []);

// 	const handleDelete = async () => {
// 		if (!selectedProduct) return;

// 		setIsDeleting(true);
// 		try {
// 			await axios.delete(`${apiUrl}/products/${selectedProduct._id}`);
// 			setProducts(products.filter((p) => p._id !== selectedProduct._id));
// 		} catch (error) {
// 			console.error('Error deleting product:', error);
// 		} finally {
// 			setIsDeleting(false);
// 			setIsDeleteModalOpen(false);
// 		}
// 	};

// 	return (
// 		<div className='container mx-auto p-4'>
// 			<div className='flex justify-between items-center mb-6'>
// 				<h1 className='text-2xl font-bold'>Products</h1>
// 				<button
// 					onClick={() => {
// 						setSelectedProduct(null);
// 						setIsModalOpen(true);
// 					}}
// 					className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
// 					Add Product
// 				</button>
// 			</div>

// 			{loading ? (
// 				<p>Loading products...</p>
// 			) : (
// 				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
// 					{products.map((product) => (
// 						<div key={product._id} className='bg-white shadow rounded-lg p-4'>
// 							<img
// 								src={product.image || '/placeholder-image.jpg'} // Using image.url from Cloudinary
// 								alt={product.title}
// 								className='w-full h-48 object-cover rounded-lg mb-4'
// 							/>
// 							<h2 className='text-lg font-semibold'>{product.title}</h2>
// 							<p>${product.price}</p>
// 							<div className='flex space-x-2 mt-4'>
// 								<button
// 									onClick={() => {
// 										setSelectedProduct(product);
// 										setIsModalOpen(true);
// 									}}
// 									className='bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600'
// 									disabled={isAdding}>
// 									Update
// 								</button>
// 								<button
// 									onClick={() => {
// 										setSelectedProduct(product);
// 										setIsDeleteModalOpen(true);
// 									}}
// 									className='bg-black text-white px-4 py-2 rounded hover:bg-red-700'
// 									disabled={isDeleting}>
// 									Delete
// 								</button>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			)}

// 			<AddProductModal
// 				isOpen={ isModalOpen }
				
// 				onClose={() => setIsModalOpen(false)}
// 				product={selectedProduct}
// 				setProducts={setProducts}
// 				setIsAdding={setIsAdding}
// 			/>

// 			{/* Delete Confirmation Modal */}
// 			{isDeleteModalOpen && (
// 				<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
// 					<div className='bg-white p-6 rounded-lg'>
// 						<h3 className='text-lg font-bold mb-4'>Confirm Delete</h3>
// 						<p>Are you sure you want to delete {selectedProduct?.name}?</p>
// 						<div className='flex justify-end space-x-4 mt-6'>
// 							<button onClick={() => setIsDeleteModalOpen(false)} className='px-4 py-2 border rounded'>
// 								Cancel
// 							</button>
// 							<button onClick={handleDelete} className='px-4 py-2 bg-red-500 text-white rounded' disabled={isDeleting}>
// 								{isDeleting ? 'Deleting...' : 'Delete'}
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// };
// export default Products;


// Product.js chatgpt
// import React, { useState } from "react";
// import { Card, Button } from "react-bootstrap";
// const Product = () => {
//     const [products, setProducts] = useState([]);

//     const handleAddProduct = () => {
//         // Add a sample product to the list for now
//         const newProduct = {
//             name: "Sample Product",
//             description: "This is a sample product description.",
//             price: "$100",
//         };
//         setProducts([...products, newProduct]);
//     };

//     return (
//         <div className="container-fluid mt-4">
//             <div className="d-flex justify-content-between mb-4">
//                 <h2>Products</h2>
//                 <Button onClick={handleAddProduct} variant="primary">Add Product</Button>
//             </div>
//             <div className="row">
//                 {products.map((product, index) => (
//                     <div className="col-lg-4 col-md-6 mb-4" key={index}>
//                         <Card className="shadow h-100">
//                             <Card.Body>
//                                 <h5 className="card-title">{product.name}</h5>
//                                 <p className="card-text">{product.description}</p>
//                                 <p className="card-text fw-bold">{product.price}</p>
//                                 <Button variant="secondary">View Details</Button>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
// export default Product;
