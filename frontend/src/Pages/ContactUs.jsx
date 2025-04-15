import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!formData.name || !formData.email || !formData.message) {
			toast.error('All fields are required!');
			return;
		}

		setLoading(true);

		try {
			const response = await fetch("http://localhost:5000/api/contact", {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			const result = await response.json();
			setLoading(false);

			if (!response.ok) {
				throw new Error(result.error || 'Failed to send message');
			}

			setFormData({ name: '', email: '', message: '' });
			toast.success('Message sent successfully!');
		} catch (error) {
			setLoading(false);
			toast.error('Something went wrong. Please try again.');
		}
	};

	return (
		<div className='bg-light py-5'>
			<Container>
				<h2 className='text-center mb-5 fw-bold'>Contact Us</h2>
				<Row>
					<Col md={6}>
						<Card className='shadow'>
							<Card.Body>
								<Card.Title className='mb-4 fw-bold'>Get in Touch</Card.Title>
								<Form onSubmit={handleSubmit}>
									<Form.Group controlId='name' className='mb-3'>
										<Form.Label>Name</Form.Label>
										<Form.Control
											type='text'
											name='name'
											value={formData.name}
											onChange={handleChange}
											placeholder='Your Name'
											disabled={loading}
										/>
									</Form.Group>

									<Form.Group controlId='email' className='mb-3'>
										<Form.Label>Email</Form.Label>
										<Form.Control
											type='email'
											name='email'
											value={formData.email}
											onChange={handleChange}
											placeholder='Your Email'
											disabled={loading}
										/>
									</Form.Group>

									<Form.Group controlId='message' className='mb-4'>
										<Form.Label>Message</Form.Label>
										<Form.Control
											as='textarea'
											rows={4}
											name='message'
											value={formData.message}
											onChange={handleChange}
											placeholder='Your Message'
											disabled={loading}
										/>
									</Form.Group>

									<Button
										variant='warning'
										type='submit'
										className='w-100'
										disabled={loading}>
										{loading ? (
											<>
												<Spinner
													as='span'
													animation='border'
													size='sm'
													role='status'
													aria-hidden='true'
												/>{' '}
												Sending...
											</>
										) : (
											'Send Message'
										)}
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>

					<Col md={6} className='mt-4 mt-md-0'>
						<Card className='shadow'>
							<Card.Body>
								<Card.Title className='mb-4 fw-bold'>Contact Information</Card.Title>
								<ul className='list-unstyled text-muted'>
									<li className='mb-3'>
										<strong>Address:</strong> 456 Elm Street, Springfield, USA
									</li>
									<li className='mb-3'>
										<strong>Phone:</strong> +1234-567-890
									</li>
									<li className='mb-3'>
										<strong>Email:</strong> contact@example.com
									</li>
								</ul>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Contact;
