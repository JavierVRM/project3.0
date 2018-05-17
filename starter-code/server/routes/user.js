require("dotenv").config();
const express = require("express");
const router = express.Router();
const mdb = process.env.API_KEY;
const axios = require("axios");
const stUrl = 'https://api.themoviedb.org/3/discover';
const User = require('../models/User');
const Review = require('../models/Review');

router.put("/:id/:idMovie",(req,res,next)=> {
    User.findOneAndUpdate({_id:req.params.id}, {$push: {watchlist: req.params.idMovie}}, {new:true})
    .then(user => res.status(200).json(user))
    .catch(e => res.status(500).json({message:e.message}));
})

module.exports = router;
