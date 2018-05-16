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
    const movie = axios.get(`https://api.themoviedb.org/3/movie/${idDetail}?api_key=${mdb}&language=en-US`)
    const director = axios.get(`https://api.themoviedb.org/3/movie/${idDetail}/credits?api_key=${mdb}`)
    const similars = axios.get(`https://api.themoviedb.org/3/movie/${idDetail}/similar?api_key=${mdb}&language=en-US&page=1`)
    Promise.all([movie,director,similars])
        .then(p => { 
            return res.json([p[0].data,p[1].data.crew,p[2].data.results])
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

// byGenre
// router.get("/:genre", (req, res, next) => {
//     let pM = req.params.genre
//     let data = generes[pM]

//    axios.get(`${stUrl}/movie?api_key=${mdb}&language=en-US&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1,page=2,page=3,page=4&with_genres=${data}`)
//     .then(pM => {
//         console.log(pM.data.results);
//         return res.json(pM.data.results);   
//     })
// });

// series
//    axios.get(`${stUrl}/tv?api_key=${mdb}&language=en-US&sort_by=first_air_date.desc&page=1&with_genres=${data}&include_null_first_air_dates=false`)


// byName

// router.get("/test", (req, res, next) => {
//     const q1 = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${mdb}&language=en-US&query=fargo&page=1&include_adult=false`);
//     const q2 = axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${mdb}&language=en-US&query=fargo&page=1`);
//     Promise.all([q1,q2])
//     .then(values => {
//         return res.json([values[0].data.results,values[1].data.results]);
//     })
//     .catch(e=> console.log(e))




//     axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${mdb}&language=en-US&query=fargo&page=1&include_adult=false`)
//     .then(p => {
//          console.log(p.data.results);
//          axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${mdb}&language=en-US&query=fargo&page=1`)
//          .then(d => {
//             console.log(d.data.results);
//             return res.json([p.data.results,d.data.results]);
//         })
//     })
//  });




module.exports = router;
