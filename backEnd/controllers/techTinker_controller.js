const Newsletter = require("../models/newsletters");
const Contact = require("../models/contacts");
const FAQ = require("../models/faqs");

//@desc post Newsletter form
//@route POST /subscribe
//@access public
exports.postNewsletter = async (req, res) => {

    console.log(req);

    try {
        const newNewsletter = new Newsletter({
            name: req.body.name,
            email: req.body.email
        });
        
        await newNewsletter.save();

        res.status(201).json({ success: true, data: newNewsletter });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};


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

//@desc get Faq
//@route GET /faqs
//@access public
exports.getFAQs = async (req, res) => {
    try {
        const FAQs = await FAQ.find();
        res.status(200).json({ success: true, data: FAQs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};