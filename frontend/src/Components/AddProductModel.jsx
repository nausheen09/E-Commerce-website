import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

function AddProductModal({ isOpen, onClose, product, setProducts, setIsAdding }) {
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState(null);

	// 🟡 Prefill the form when editing
	useEffect(() => {
		if (product) {
			setTitle(product.title || '');
			setPrice(product.price || '');
			setDescription(product.description || '');
			setImage(null); // don't prefill image for security reasons
		} else {
			setTitle('');
			setPrice('');
			setDescription('');
			setImage(null);
		}
	}, [product]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsAdding(true);

		const formData = new FormData();
		formData.append('title', title);
		formData.append('price', price);
		formData.append('description', description);
		if (image) formData.append('image', image); // optional in update

		try {
			if (product) {
				// 🟢 UPDATE flow
				const response = await axios.put(`${apiUrl}/products/update/${product._id}`, formData, {
					headers: { 'Content-Type': 'multipart/form-data' },
					withCredentials: true,
				});
				setProducts(prev => prev.map(p => (p._id === product._id ? response.data.product : p)));
				alert("Product Updated Successfully!");
			} else {
				// 🔵 ADD flow
				const response = await axios.post(`${apiUrl}/products/add`, formData, {
					headers: { 'Content-Type': 'multipart/form-data' },
					withCredentials: true,
				});
				setProducts(prev => [...prev, response.data.newProduct]);
				alert("Product Added Successfully!");
			}
			onClose();
		} catch (error) {
			console.error(error.response?.data || error.message);
			alert(product ? "Failed to update product" : "Failed to add product");
		} finally {
			setIsAdding(false);
		}
	};

	return (
		<Modal show={isOpen} onHide={onClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>{product ? 'Update Product' : 'Add Product'}</Modal.Title>
			</Modal.Header>
			<Form onSubmit={handleSubmit}>
				<Modal.Body>
					<Form.Group>
						<Form.Label>Title</Form.Label>
						<Form.Control
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Price</Form.Label>
						<Form.Control
							type="number"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control
							as="textarea"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>{product ? 'Change Image (optional)' : 'Image'}</Form.Label>
						<Form.Control
							type="file"
							onChange={(e) => setImage(e.target.files[0])}
							{...(product ? {} : { required: true })}
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={onClose}>
						Cancel
					</Button>
					<Button type="submit" variant="primary">
						{product ? 'Update Product' : 'Add Product'}
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
}

export default AddProductModal;



// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import axios from 'axios';
// const apiUrl = import.meta.env.VITE_API_BASE_URL;
// function AddProductModal({ isOpen, onClose, product, setProducts, setIsAdding }) {
	  
// 	const [title, setTitle] = useState('');
// 	const [price, setPrice] = useState('');
// 	const [description, setDescription] = useState('');
// 	const [image, setImage] = useState(null);
// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		setIsAdding(true);
// 		const formData = new FormData();
// 		formData.append('title', title);
// 		formData.append('price', price);
// 		formData.append('description', description);
// 		formData.append('image', image);
// 		try {
// 			const response = await axios.post(`${apiUrl}/products/add`, formData, {
// 				headers: {
// 					'Content-Type': 'multipart/form-data',
// 				},
// 				withCredentials: true,
// 			});

// 			// 👇 Add the new product to the state
// 			setProducts(prev => [...prev, response.data.newProduct]);

// 			alert("Product Added Successfully!");
// 			onClose();
// 		} catch (error) {
// 			console.error(error.response?.data || error.message);
// 			alert("Failed to add product");
// 		} finally {
// 			setIsAdding(false);
// 		}
// 	};

// 	return (
// 		<Modal show={isOpen} onHide={onClose} centered>
// 			<Modal.Header closeButton>
// 				<Modal.Title>Add Product</Modal.Title>
// 			</Modal.Header>
// 			<Form onSubmit={handleSubmit}>
// 				<Modal.Body>
// 					<Form.Group>
// 						<Form.Label>Title</Form.Label>
// 						<Form.Control
// 							type="text"
// 							value={title}
// 							onChange={(e) => setTitle(e.target.value)}
// 							required
// 						/>
// 					</Form.Group>
// 					<Form.Group>
// 						<Form.Label>Price</Form.Label>
// 						<Form.Control
// 							type="number"
// 							value={price}
// 							onChange={(e) => setPrice(e.target.value)}
// 							required
// 						/>
// 					</Form.Group>
// 					<Form.Group>
// 						<Form.Label>Description</Form.Label>
// 						<Form.Control
// 							as="textarea"
// 							value={description}
// 							onChange={(e) => setDescription(e.target.value)}
// 							required
// 						/>
// 					</Form.Group>
// 					<Form.Group>
// 						<Form.Label>Image</Form.Label>
// 						<Form.Control
// 							type="file"
// 							onChange={(e) => setImage(e.target.files[0])}
// 							required
// 						/>
// 					</Form.Group>
// 				</Modal.Body>
// 				<Modal.Footer>
// 					<Button variant="secondary" onClick={onClose}>
// 						Cancel
// 					</Button>
// 					<Button type="submit" variant="primary">
// 						Add Product
// 					</Button>
// 				</Modal.Footer>
// 			</Form>
// 		</Modal>
// 	);
// }
// export default AddProductModal;