const express = require("express");
const Review = require('../models/Review');
const router = express.Router();

router.get('/movie/:id', (req,res) => {
  Review.find({movie_id:req.params.id, is_movie: true}).then(reviews=> {
    return res.json(reviews);
  })
})

router.get('/serie/:id', (req,res) => {
  Review.find({movie_id:req.params.id, is_movie: false}).then(reviews=> {
    return res.json(reviews);
  })
})

router.get('/:id', (req,res) => {
  Review.find({user_id:req.params.id}).then(reviews=> {
    return res.json(reviews);
  })
})

module.exports = router;
