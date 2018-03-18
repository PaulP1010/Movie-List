import express from 'express';
import {movies} from './movies';
import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';

const router = express.Router(); // eslint-disable-line
router.get('/', (req, res) => {
  res.send({movies: movies});
});

export default router;

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

app.use('/api/movies', moviesRouter);
app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});