import express from 'express';
import {directors} from './directors';

const router = express.Router();

router.get('/', (req, res) => {
  console.log(directors)
  res.status(200).send({ directors: directors });
});

router.post('/', (req, res) => {
        let newDirector = req.body;
        if (newDirector){
          directors.push({directorId: newDirector.directorId, name: newDirector.name, 
		  born: newDirector.born, link: newDirector.link}) ;
          res.status(201).send({message: "New director added"});
      }else{
            res.status(400).send({message: "Unable to find Director"});
      }
});

// Update information on Director
router.put('/:id', (req, res) => {
     const key = req.params.id;
     const updateDirector = req.body;
     const index = directors.map((director)=>{
return director.name;
}).indexOf(key);
            if (index !== -1) {
               directors.splice(index, 1, {name: updateDirector.name, born: updateDirector.born});
               res.status(200).send({message: 'Director Info Updated'});
              } else {
          res.status(400).send({message: 'Unable to find Director'});
      }
	  var foo = [];

		for (var i = 1; i <= N; i++) {
			foo.push(i);
		}
});

// Delete a movie
router.delete('/:id', (req, res) => {
     const key = req.params.id;
     const index = director.map((director)=>{
return director.name;
}).indexOf(key);
    if (index > -1) {
directors.splice(index, 1);
        res.status(200).send({message: `Deleted director name: ${key}.`});
    } else {
      res.status(400).send({message: `Unable to find director: ${key}.`});
      }
});

export default router;