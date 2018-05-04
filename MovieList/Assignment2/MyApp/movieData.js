import movieModel from './api/movies/movieModel';

const movies = [
  {
	"movieId": 1,
    "name": 'Mad Max: Fury Road',
	"year": '2015',
	"country": 'Australia, USA',
	"genre": 'Action, Adventure, Sci-Fi, Thriller',
    "runtime": '120 mins',
	"link": 'http://www.imdb.com/title/tt1392190/?ref_=nv_sr_1',
    "rating": [],
  },
  {
	"movieId": 2,
    "name": 'The Dark Knight Rises',
	"year": '2012',
	"country": 'UK, USA',
	"genre": 'Action, Thriller',
    "runtime": '164 mins',
	"link": 'http://www.imdb.com/title/tt1345836/?ref_=nv_sr_2',
    "rating": [],
  },
  {
	"movieId": 3,
    "name": 'Star Wars: The Last Jedi',
	"year": '2017',
	"country": 'USA',
	"genre": 'Action',
    "runtime": '152 mins',
	"link": 'http://www.imdb.com/title/tt2527336/?ref_=nv_sr_2',
    "rating": [],
  },
  {
	"movieId": 4,
    "name": 'Kong: Skull Island',
	"year": '2017',
	"country": 'USA, China, Australia, Canada',
	"genre": 'Action',
    "runtime": '118 mins',
	"link": 'http://www.imdb.com/title/tt3731562/?ref_=nv_sr_1',
    "rating": [],
  },
  {
	"movieId": 5,
    "name": 'The Revenant',
	"year": '2015',
	"country": 'USA, Hong Kong, Taiwan',
	"genre": 'Adventure, Drama, History',
    "runtime": '156 mins',
	"link": 'http://www.imdb.com/title/tt1663202/?ref_=nv_sr_2',
    "rating": [],
  },
  {
	"movieId": 6,
    "name": 'Jurassic World',
	"year": '2015',
	"country": 'USA',
	"genre": 'Action, Adventure, Sci-Fi',
    "runtime": '124 mins',
	"link": 'www.imdb.com/title/tt0369610/?ref_=nv_sr_2',
    "rating": [],
  },
  {
	"movieId": 7,
    "name": 'It (2017)',
	"year": '2017',
	"country": 'USA, Canada',
	"genre": 'Drama, Horror, Thriller',
    "runtime": '135 mins',
	"link": 'http://www.imdb.com/title/tt1396484/?ref_=nv_sr_1',
    "rating": [],
  },
  {
	"movieId": 8,
    "name": 'Journeys End',
	"year": '2017',
	"country": 'UK',
	"genre": 'Drama, War',
    "runtime": '107 mins',
	"link": 'http://www.imdb.com/title/tt3780500/?ref_=nv_sr_3',
    "rating": [],
  },
];

export const loadMovies = () => {
  movieModel.find({}).remove(() => {
    movieModel.collection.insert(movies, (err, docs)=>{
    if (err) {
      console.log(`failed to Load Movie Data: ${err}`);
    } else {
      console.info(`${movies.length} movies were successfully stored.`);
    }
  });
});
};