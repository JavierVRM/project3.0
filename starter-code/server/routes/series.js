require("dotenv").config();
const express = require("express");
const router = express.Router();
const mdb = process.env.API_KEY;
const axios = require("axios");


const generes = {
    "Action": 28,
    "Adventure": 12,
    "Animation": 16,
    "Comedy": 35,
    "Crime": 80,
    "Documentary": 99,
    "Drama":18,
    "Family": 10751,
    "Fantasy": 14,
    "History": 36,
    "Horror": 27,
    "Music": 10402,
    "Mystery": 9648,
    "Romance": 10749,
    "Science Fiction": 878,
    "Thriller": 53,
    "War": 10752,
    "Western": 37
  }

router.get("/", (req, res, next) => {
   axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${mdb}&language=en-US&page=1`)
    .then(p => {
        console.log(p.data.results);
        return res.json(p.data.results);
    })
});

module.exports = router;
