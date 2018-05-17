require("dotenv").config();
const express = require("express");
const router = express.Router();
const mdb = process.env.API_KEY;
const axios = require("axios");
const stUrl = 'https://api.themoviedb.org/3/discover';
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
    "Fantasy": 14,
    "Horror": 27,
    "Music": 10402,
    "Mystery": 9648,
    "Romance": 10749,
    "Science Fiction": 878,
    "Thriller": 53,
    "War": 10752,
    "Western": 37
  }
//   912071580 .-> pilar


// DEFAULT MOVIES
router.get("/", (req, res, next) => {
  const playing = axios.get(` https://api.themoviedb.org/3/movie/now_playing?api_key=${mdb}&page=1`)
  const popular = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${mdb}&language=en-US&page=1`)
  const rated = axios.get (`https://api.themoviedb.org/3/movie/top_rated?api_key=${mdb}&language=en-US&page=1`)
  Promise.all([playing,popular,rated])
    .then(p => {
        return res.json([p[0].data.results,p[1].data.results,p[2].data.results])
    })
});

// BY GENRE
router.get("/genres/:genre", (req, res, next) => {
    let pM = req.params.genre
    let data = generes[pM]
    const genreOne = axios.get(`${stUrl}/movie?api_key=${mdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${data}`)
    const genreTwo = axios.get(`${stUrl}/movie?api_key=${mdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_genres=${data}`)
    const genreThree = axios.get(`${stUrl}/movie?api_key=${mdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_genres=${data}`)
    const genreFour = axios.get(`${stUrl}/movie?api_key=${mdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4&with_genres=${data}`)
    const genreFive = axios.get(`${stUrl}/movie?api_key=${mdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=5&with_genres=${data}`)
    Promise.all([genreOne,genreTwo,genreThree,genreFour,genreFive])
    .then(pM => {
        return res.json([pM[0].data.results,pM[1].data.results,pM[2].data.results,pM[3].data.results,pM[4].data.results]) 
    })
});

// BY ID
router.get("/:id", (req, res, next) => {
    let idDetail = req.params.id
    console.log('idDetail')
    const movie = axios.get(`https://api.themoviedb.org/3/movie/${idDetail}?api_key=${mdb}&language=en-US`)
    const director = axios.get(`https://api.themoviedb.org/3/movie/${idDetail}/credits?api_key=${mdb}`)
    const similars = axios.get(`https://api.themoviedb.org/3/movie/${idDetail}/similar?api_key=${mdb}&language=en-US&page=1`)
    const video = axios.get(`https://api.themoviedb.org/3/movie/${idDetail}/videos?api_key=${mdb}&language=en-US`)
    Promise.all([movie,director,similars,video])
        .then(p => { 
            return res.json([p[0].data,p[1].data.crew,p[2].data.results,p[3].data.results[0]])
        })
});

// BY DIRECTOR 
router.get("/director/:id", (req, res, next) => {
    let id = req.params.id
    const bio = axios.get (`https://api.themoviedb.org/3/person/${id}?api_key=${mdb}&language=en-US`);
    const credits = axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${mdb}&language=en-US`);
    Promise.all([bio,credits])
    .then(p => {
        console.log([p[0].data,p[1].data.crew])
        return res.json([p[0].data,p[1].data.crew])  
    })
});

// BY  NAME
router.get("/title/:title", (req, res, next) => {
    let title = req.params.title;
    const titleOne = axios.get (`https://api.themoviedb.org/3/search/movie?api_key=${mdb}&language=en-US&query=${title}&page=1&include_adult=false`);
    const titleTwo = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${mdb}&language=en-US&query=${title}&page=2&include_adult=false`);
    Promise.all([titleOne,titleTwo])
    .then(p => {
        return res.json([p[0].data.results,p[1].data.results])  
    })
});

// BY  YEAR
router.get("/year/:year", (req, res, next) => {
    let year = req.params.year;
    const yearOne = axios.get (`https://api.themoviedb.org/3/discover/movie?api_key=${mdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}`);
    const yearTwo = axios.get (`https://api.themoviedb.org/3/discover/movie?api_key=${mdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&primary_release_year=${year}`);
    const yearThree = axios.get (`https://api.themoviedb.org/3/discover/movie?api_key=${mdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&primary_release_year=${year}`);
    const yearFour = axios.get (`https://api.themoviedb.org/3/discover/movie?api_key=${mdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4&primary_release_year=${year}`);
    const yearFive = axios.get (`https://api.themoviedb.org/3/discover/movie?api_key=${mdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=5&primary_release_year=${year}`);
    Promise.all([yearOne,yearTwo,yearThree,yearFour,yearFive])
    .then(p => {
        return res.json([p[0].data.results,p[1].data.results,p[2].data.results,p[3].data.results,p[4].data.results])  
    })
});

module.exports = router;
