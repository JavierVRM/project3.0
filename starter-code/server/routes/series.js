require("dotenv").config();
const express = require("express");
const router = express.Router();
const mdb = process.env.API_KEY;
const axios = require("axios");
const User = require('../models/User');
const Review = require('../models/Review');

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
   const airing = axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${mdb}&language=en-US&page=1`)
   const popular = axios.get (`https://api.themoviedb.org/3/tv/popular?api_key=${mdb}&language=en-US&page=1`)
   const rated = axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${mdb}&language=en-US&page=1`)
   Promise.all([airing, popular, rated])
    .then(p => {
        console.log(p.data);
        return res.json([p[0].data.results, p[1].data.results, p[2].data.results])
    .catch(e => next(e));
    })
});

// BY GENRE
router.get("/genres/:genre", (req, res, next) => {
    let pM = req.params.genre
    let data = generes[pM]
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${mdb}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${data}&include_null_first_air_dates=false`)
    .then(pM => {
        console.log(pM.data.results);
        return res.json(pM.data.results);   
    })
});

// BY ID
router.get("/:id", (req, res, next) => {
    let idDetail = req.params.id  
    const serie = axios.get(`https://api.themoviedb.org/3/tv/${idDetail}?api_key=${mdb}&language=en-US`)
    const similars = axios.get(`https://api.themoviedb.org/3/tv/${idDetail}/recommendations?api_key=${mdb}&language=en-US&page=1`)
    Promise.all([serie,similars])
      .then(p => { 
          console.log(p)
          return res.json([p[0].data, p[1].data.results])
      .catch(e => next(e));
      });
  });

  // BY SEASON 
  router.get("/:id/:ip", (req, res, next) => {
    let serieDetail = req.params.id
    let seasonDetail = req.params.ip
    axios.get(`https://api.themoviedb.org/3/tv/${serieDetail}/season/${seasonDetail}?api_key=${mdb}&language=en-US`)
      .then(p => { 
          console.log(p)
          return res.json(p.data);
      })
  });

module.exports = router;
