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

const JWT_SECRET = process.env.JWT_SECRET;


router.post('/postQuery', [
    body('email', 'Enter a valid email').isEmail(),
], async (req, res) => {
    console.log('Community')

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ err: errors.array() })
    }

    try {
        let user = await User.findOne({ email: req.body.email });

        const newQueryPost = await Community.create({
            user: user._id,
            queryTitle: req?.body?.queryTitle,
            queryDescription: req?.body?.queryDescription,
            queryViews: req?.body?.queryViews,
            queryLikes: req?.body?.queryLikes
        })



        return res.status(200).json({ "Success": true, 'Query': newQueryPost });

    } catch (err) {
        return res.status(500).send("Internal Server error")
    }
})

router.post('/getAllQuery', async (req, res) => {
    console.log('Community GEt')

    try {

        const allQueryPost = await Community.find().populate("user")

        return res.status(200).json({ "Success": true, 'Query': {...allQueryPost} });

    } catch (err) {
        return res.status(500).send("Internal Server error")
    }
})



module.exports = router