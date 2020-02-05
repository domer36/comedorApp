const passport = require('passport')
const googleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/User')

passport.use( User.createStrategy() )

passport.serializeUser( (user, done) => done(null, user.id) )
passport.deserializeUser( (id, done) => User.findById(id, (err, user) =>  done(err, user) ))

passport.use(
  new googleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/auth/google/callback"
    },
    async ( req, res, profile, done) => {
      const user = await User.findOne({ googleID: profile.id });

      if (user) {
        user.name = profile._json.name
        user.save()
        return done(null, user)
      }

      const newUser = await User.create({
        
        name: profile._json.name,
        email: profile._json.email,
        googleID: profile.id
      });
      done(null, newUser);
    }
  )
);

module.exports = passport;