import express from 'express';
//import {movies} from './movies';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import moviesRouter from './api/movieListings';

//const router = express.Router(); // eslint-disable-line
//router.get('/', (req, res) => {
  //res.send({movies: movies});
//});

//export default router;

dotenv.config();

// Connect to database
if (process.env.NODE_ENV == 'test') {
  // use mockgoose for testing
  const mockgoose=new Mockgoose(mongoose);
  mockgoose.prepareStorage().then(()=>{
    mongoose.connect(process.env.mongoDB);
  });
} else {
  // use real deal for everything else
  mongoose.connect(process.env.mongoDB);
}

const app = express();

const port = process.env.PORT;

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('public'));

app.use('/api/movies', moviesRouter);
app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});