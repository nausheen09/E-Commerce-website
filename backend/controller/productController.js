import Product from '../Models/Product.js';
import uploadToCloudinary from '../config/cloudinary.js';
export const addProduct = async (req, res) => {
	try {
		const { title, price, description } = req.body;
		// Validate input
		if (!title || !price || !req.file ) {
			return res.status(400).json({
				success: false,
				message: 'Name, price, and image are required',
			});
		}
		// Verify file buffer exists
		if (!req.file.buffer) {return res.status(400).json({
				success: false,
				message: 'Invalid image file',
			});
		}
		// Upload to Cloudinary
		const cloudinaryResult = await uploadToCloudinary(req.file.buffer);

		// Save to MongoDB
		const newProduct = new Product({
			title: title,
			price: parseFloat(price),
			description,
			image: cloudinaryResult.secure_url,
		});
		await newProduct.save();
		res.status(201).json({
			success: true,
			message: 'Product added successfully',
			product: newProduct,
		});
	} catch (error) {
		console.error('Error adding product:', error);
		res.status(500).json({
			success: false,
			message: error.message || 'Failed to add product',
			error: process.env.NODE_ENV === 'development' ? error.stack : undefined,
		});
	}
};
export const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find();
		const formattedProducts = products.map((product) => ({
			...product._doc,
		}));
		res.status(200).json({ success: true, products: formattedProducts });
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'An internal server error occurred',
		});
		console.error('Error in get all products route', error);
	}
};
// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndDelete(id);
		if (!product) {
			return res.status(404).json({ success: false, message: 'Product not found' });
		}
		res.status(200).json({ success: true, message: 'Product deleted successfully' });
	} catch (error) {
		console.error('Error deleting product:', error);
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
};

// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const { title, price, description } = req.body;

		let updatedData = { title, price, description };

		// Check if image is also being updated
		if (req.file && req.file.buffer) {
			const cloudinaryResult = await uploadToCloudinary(req.file.buffer);
			updatedData.image = cloudinaryResult.secure_url;
		}

		const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true });

		if (!updatedProduct) {
			return res.status(404).json({ success: false, message: 'Product not found' });
		}

		res.status(200).json({
			success: true,
			message: 'Product updated successfully',
			product: updatedProduct,
		});
	} catch (error) {
		console.error('Error updating product:', error);
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
};
