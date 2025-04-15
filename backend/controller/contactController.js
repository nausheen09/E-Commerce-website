import Contact from '../Models/Contact.js';
import dotenv from 'dotenv';
import sendEmail from '../Utils/sendEmail.js';
dotenv.config();
const submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        // Validate required fields
        if (!email || !message) {
            return res.status(400).json({ error: 'Email and message are required' });
        }

        // Find or create contact
        let contact = await Contact.findOne({ email });
        console.log('Contact:', contact);
        if (contact) {
            // Existing user: Add new message to array
            contact.messages.push({ text: message, sentAt: new Date() });
        } else {
            // New user: Create with first message
            if (!name) return res.status(400).json({ error: 'Name is required for new users' });

            contact = new Contact({
                name,
                email,
                messages: [{ text: message, sentAt: new Date() }],
            });
            // Send confirmation to the user
            await sendEmail({
                type: 'message_confirmation',
                to: email,
                data: {
                    message,
                },
            });
        }

        await contact.save();


        return res.status(contact ? 200 : 201).json({
            message: 'Message submitted successfully',
            user: contact ? 'Existing User' : 'New User',
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
};
export default submitContactForm;
