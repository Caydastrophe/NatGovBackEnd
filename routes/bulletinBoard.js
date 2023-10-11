const express = require('express')
const router = express.Router();
const BulletinBoard = require('../models/bulletinBoard')
const checkauth = require("../check-auth")

router.get('', (req, res) =>
{
    BulletinBoard.find().then((bulletinBoards) =>{
        res.json(
            {
                message: 'bulletinBoard Found',
                bulletinBoards : bulletinBoards
            })
    })
})


router.post('', checkauth, (req, res)=>{
    const bulletinBoard = new bulletinBoard( {
        id: req.body.id,
        caption: req.body.caption,
        likes: req.body.likes,
        imgUrl: req.body.imgUrl 
    }
    )
    bulletinBoard.save().then(()=>{
        res.status(201).json({
            message: "bulletinBoard created",
            bulletinBoard : bulletinBoard
        })
    })
})

router.delete('', checkauth, (req,res)=>{
    BulletinBoard.deleteOne({_id: req.params.id})
    .then((result)=>
    {
        res.status(200).json({message: "BulletinBoard Deleted"});
    });
})


module.exports = router