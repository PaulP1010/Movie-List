import passport from 'passport';
import passportJWT from 'passport-jwt';
import directorModel from './../api/directors/directorModel';
import movieModel from './../api/movies/movieModel';
import dotenv from 'dotenv';

dotenv.config();

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.secret;
const strategy = new JWTStrategy(jwtOptions, async function(payload, next) {
  console.log('payload received', payload);
  // usually this would be a database call:
  const movie = await movieModel.find({name: payload});
  if (movie) {
    next(null, movie);
  } else {
    next(null, false);
  }
  const director = await directorModel.find({name: payload});
  if (director) {
    next(null, director);
  } else {
    next(null, false);
  }
});

passport.use(strategy);

export default passport;