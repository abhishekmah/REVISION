const express = require('express');
const Post = require('../models/post.model')

const router = express.Router();
const authorize = require('../middlewares/authorize')
const authenticate = require('../middlewares/authenticate')
router.post('', authenticate, async (req, res) => {
    const user = req.user
    console.log(user)
    const post = await Post.create({
        title: req.body.title,
        body: req.body.body,
        postedBy: user.user.id
    });
    return res.status(201).json({ post })
})

router.get('', authenticate, async (req, res) => {
    const posts = await Post.find().lean().exec()
    return res.status(200).json({ posts })
})

module.exports = router