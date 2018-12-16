const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const { body, validationResult } = require('express-validator/check');
sgMail.setApiKey(process.env.SG_KEY);

router.post('/mail', [
    body('from').isEmail(),
    body('from').trim().escape(),
    body('subject').trim().escape()
],(req, res) => {

    
    const results = validationResult(req);
    if(!results.isEmpty()){
        return res.status(401).json({errors: [
                {
                    error: "email is invalid"
                }
            ]
        });
    }

    const { from, subject } = req.body;
    const modSubject = `NEW INQUIRY FOR: ${subject.toUpperCase()}`
    const msg = {
        to: process.env.EMAIL,
        from,
        subject: modSubject,
        html: `<strong>INQUIRE FOR: ${subject}</strong>`
    }

    sgMail.send(msg)
    .then(() => {
        return res.status(200).json({
            message: "Thank you, I'll be in touch!"
        });
    })
    .catch((err) => {
        console.log(err);
        return res.status(500).json({
            message: "Sorry, we had trouble processing your request."
        });
    });

});

module.exports = router;