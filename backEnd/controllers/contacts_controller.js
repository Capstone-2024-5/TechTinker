const Contact = require("../models/contacts");

//@desc post contact form
//@route POST /contact
//@access public
exports.postContact = async (req, res) => {

    console.log(req);

    try {
        // Create a new contact instance using the Contact model
        const newContact = new Contact({
            fullName: req.body.fullName,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        });
        
        // Save the new contact to the database
        await newContact.save();

        res.status(201).json({ success: true, data: newContact });
    } catch (error) {
        // If an error occurs, handle it
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};
