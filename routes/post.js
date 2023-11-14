const express = require('express')
const router = express.Router();
const Post = require('../models/post')
const checkauth = require("../check-auth")
const ExpressBrute = require('express-brute');
const helmet = require('helmet');
const morgan = require('morgan');

router.use(helmet());
router.use(morgan('dev'));

const store = new ExpressBrute.MemoryStore();

const bruteforce = new ExpressBrute(store, {
    freeRetries: 3, // Number of attempts before IP gets a temporary ban
    minWait: 5*60*1000, // 5 minutes
    maxWait: 60*60*1000, // 1 hour
});


router.get('', (req, res) =>
{
    Post.find().then((posts) =>{
        res.json(
            {
                message: 'Posts Found',
                posts:posts
            })
    })
})

router.post('', checkauth, bruteforce.prevent, (req, res) => {
    const post = new Post (
        {
            id: req.body.id,
            Title: req.body.Title,
            Details: req.body.Details
        }
    )
    post.save();
    res.status(201).json({
        message: 'post created',
        post:post
    })
})

router.post('', checkauth, bruteforce.prevent, (req, res)=>{
    const post = new Post( {
        id: req.body.id,
        Title: req.body.Title,
        Details: req.body.Details
    }
    )
    post.save().then(()=>{
        res.status(201).json({
            message: "Post created",
            post:post
        })
    })
})

router.delete("/:id", checkauth, bruteforce.prevent,  (req, res) => {
    Post.deleteOne({ _id: req.params.id }) // or {_id: req.params.id} if using MongoDB's default _id
    .then(result => {
      res.status(200).json({message: "Post Deleted"});
    })
    .catch(error => {
      res.status(500).json({message: "An error occurred"});
    });
});

module.exports = router