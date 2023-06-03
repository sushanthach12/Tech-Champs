const express = require('express')
const User = require('../models/User')
require('dotenv').config()
const { body, validationResult } = require('express-validator')
const router = express.Router();
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
const authorize = require('../middleware/authorize');
const { ConvertToBase64 } = require('../utils/convertToBase');
const Community = require('../models/Community');
const Mentor = require('../models/Mentor');

const JWT_SECRET = process.env.JWT_SECRET;


router.post('/getMentors', async (req, res) => {
    console.log('Mentor')
    try {
        let mentors = await Mentor.find();

        return res.status(200).json({ "Success": true, 'Mentors': mentors });

    } catch (err) {
        return res.status(500).send("Internal Server error")
    }
})
router.post('/mentorSignup', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    console.log('SIGNup')

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ err: errors.array() })
    }

    try {
        let mentor = await Mentor.findOne({ email: req.body.email });
        if (mentor) {
            return res.status(200).json({ "Success": true, 'User': mentor })
        }

        const hashedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.AES_SEC).toString()

        mentor = await Mentor.create({
            name: req.body.name,
            expertise: req.body.expertise,
            bio: req.body.bio,
            image: req?.body?.image,
            email: req.body.email,
            password: hashedPassword
        })

        const data = {
            user: {
                id: mentor.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: 60 * 60 * 24 * 30 });

        return res.status(200).json({ "Success": true, 'AuthToken': authToken });

    } catch (err) {
        return res.status(500).send("Internal Server error")
    }
})

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    console.log('Login')

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ err: errors.array() })
    }

    try {

        let mentor = await Mentor.findOne({ email: req.body.email });
        if (!mentor) {
            return res.status(400).json({ error: "Sorry a mentor with this email dosnt exists!" })
        }

        const hashedPassword = CryptoJS.AES.decrypt(mentor.password, process.env.AES_SEC);
        const password = hashedPassword.toString(CryptoJS.enc.Utf8)

        if (password !== req.body.password) {
            return res.status(400).json({ error: "Please enter correct credentials" })
        }

        const data = {
            user: {
                id: mentor.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: 60 * 60 * 24 * 30 });

        return res.json({ "Success": true, "AuthToken": authToken, "Mentor": mentor });

    } catch (err) {
        return res.status(500).send("Internal Server error")
    }
})



module.exports = router