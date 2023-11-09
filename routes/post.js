const express = require('express')
const router = express.Router();
const Post = require('../models/post')
const checkauth = require("../check-auth")

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

router.post('', (req, res) => {
    const post = new Post (
        {
            id: req.body.id,
            Title: req.body.Title,
            Details: req.body.Details,
            imgUrl: req.body.imgUrl    
        }
    )
    post.save();
    res.status(201).json({
        message: 'post created',
        post:post
    })
})

router.post('', (req, res)=>{
    const post = new Post( {
        id: req.body.id,
        Title: req.body.Title,
        Details: req.body.Details,
        imgUrl: req.body.imgUrl 
    }
    )
    post.save().then(()=>{
        res.status(201).json({
            message: "Post created",
            post:post
        })
    })
})

router.delete("/:id", checkauth,  (req, res)=>{
    Post.deleteOne({_id: req.params.id}) 
    .then((result)=>
    {
      res.status(200).json({message: "Post Deleted"});
    });
})

module.exports = router