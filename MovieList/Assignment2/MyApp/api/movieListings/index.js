import express from 'express';
import {movies} from './movies';

const router = express.Router();

router.get('/', (req, res) => {
  console.log(movies)
  res.status(200).send({ movies: movies });
});

router.post('/', (req, res) => {
        let newMovie = req.body;
        if (newMovie){
          movies.push({movieId: newMovie.movieId, name: newMovie.name, 
		  year: newMovie.year, country: newMovie.country, genre: newMovie.genre, 
		  runtime : newMovie.runtime, link: newMovie.link, rating: newMovie.rating }) ;
          res.status(201).send({message: "Movie added"});
      }else{
            res.status(400).send({message: "Unable to find Movie requested. No Movie Found in body"});
      }
});

// Update the movie rating
router.put('/:id/rating', (req, res) => {
     const key = req.params.id;
     const updateMovie = req.body;
     const index = movies.map((movie)=>{
return movie.name;
}).indexOf(key);
            if (index !== -1) {
               movies.splice(index, 1, {rating: updateMovie.rating});
               res.status(200).send({message: 'Movie Info Updated'});
              } else {
          res.status(400).send({message: 'Unable to find Movie in request.'});
      }
	  var foo = [];

		for (var i = 1; i <= N; i++) {
			foo.push(i);
		}
});

// Delete a movie
router.delete('/:id', (req, res) => {
     const key = req.params.id;
     const index = movies.map((movie)=>{
return movie.name;
}).indexOf(key);
    if (index > -1) {
movies.splice(index, 1);
        res.status(200).send({message: `Deleted movie name: ${key}.`});
    } else {
      res.status(400).send({message: `Unable to find the movie name: ${key}.`});
      }
});

var ratings = ['1', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2', 
			'2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9', '3', '3.1', 
			'3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8', '3.9', '4', '4.1', '4.2',
			'4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9', '5'];

console.log(ratings.length);

export default router;