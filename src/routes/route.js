const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const movie = [
  "Prince",
  "Bang-Bang",
  "Uri",
  "Board",
  "Dhoom",
  "Rang de basanti",
  "The shining",
  "Lord of the rings",
  "Batman begins",
];

const film = [
  { id: 1, name: "The Shining" },
  { id: 2, name: "Incendies" },
  { id: 3, name: "Rang de Basanti" },
  { id: 4, name: "Finding Nemo" },
];

router.get("/movies", function (req, res) {
  res.send(movie);
});

// router.get('/movies/:indexNumber', function(req,res) {
//     const index = req.params.indexNumber
//     res.send(movie[index])
// })

router.get('/movies/:indexNumber', function (req, res) {
  const index = req.params.indexNumber;
  if (index >= 0 && index < movie.length) {
    res.send(`Movie name of ${index}-index is ${movie[index]}`);
  } 
  else {
    res.send(`Please, Use valid index. ${index}-index is not valid.`);
  }
});

router.get('/films', function (req, res) {
  res.send(film);
});

router.get('/films/:filmId', function (req, res) {
  let filmId = req.params.filmId;
  let flag = true;
  for (let i = 0; i < film.length; i++) {
    let obj = film[i];
    if (obj.hasOwnProperty("id")) {
      if (obj.id == filmId) {
        res.send(obj);
        flag = false;
      }
    }
  }
  if (flag == true) {
    res.send(`No movies exists with ${filmId}-ID`);
  }
});
module.exports = router;
