import express from 'express';
//import {movies} from './movies';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import directorsRouter from './api/directors';
import moviesRouter from './api/movies';
import mongoose from 'mongoose';
import {loadDirectors} from './directorData';
import {loadMovies} from './movieData';
import {Mockgoose} from 'mockgoose';

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

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: '+ err);
    process.exit(-1);
});

const app = express();

const port = process.env.PORT;

// Populate Mongo Database with sample data
if (process.env.seedDb) {
  loadMovies();
  loadDirectors();
}

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('public'));

app.use('/api/movies', moviesRouter);
app.use('/api/directors', directorsRouter);
app.use(express.static('public'));

// add middleware to handle any errors.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Something broke! ${err.message}`);
});

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});