require("dotenv").config();
const express = require("express");
const router = express.Router();
const mdb = process.env.API_KEY;
const axios = require("axios");
const stUrl = 'https://api.themoviedb.org/3/discover';

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
//   912071580 .-> pilar

router.get("/", (req, res, next) => {
   axios.get(` https://api.themoviedb.org/3/movie/now_playing?api_key=${mdb}&page=1`)
    .then(p => {
        console.log(p.data.results);
        return res.json(p.data.results);
    })
});


router.get("/genre/:genre", (req, res, next) => {
    let pM = req.params.genre
    let data = generes[pM]

   axios.get(`${stUrl}/movie?api_key=${mdb}&language=en-US&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1&with_genres=${data}`)
    .then(pM => {
        console.log(pM.data.results);
        return res.json(pM.data.results);   
    })
});


// https://api.themoviedb.org/3/movie/300668?api_key=904b49c7f16b003d4169b1b312367c9b&language=en-US

router.get("/:id", (req, res, next) => {
    let idDetail = req.params.id
    axios.get(`https://api.themoviedb.org/3/movie/${idDetail}?api_key=${mdb}&language=en-US`)
      .then(p => res.json(p.data.results))
      .catch(e => next(e));
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


// SINGLE AXIOS => OK

// router.get("/test", (req, res, next) => {
//    axios.get(` https://api.themoviedb.org/3/movie/now_playing?api_key=${mdb}&page=1`)
//     .then(p => {
//         console.log(p.data.results);
//         return res.json(p.data.results);
//     })
// });

module.exports = router;
