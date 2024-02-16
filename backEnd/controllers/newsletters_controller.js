const Newsletter = require("../models/newsletters");

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
