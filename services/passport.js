const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true //tell google to trust the proxy our requests come through
    }, 
    async (accessToken, refreshToken, profile, done) => {
        // attempt to find one record in the User's collection where googleId = profile.id
        const existingUser = await User.findOne({ googleId: profile.id });
    
        if(existingUser){ // existingUser is the result of the query
            // we already have a record with the given profile ID     
            return done(null, existingUser);
        }
    
        // we dont have a record with this profile ID, make a new record
        // create new user in mongodb
        const user = await new User({ googleId: profile.id, googleName: profile.displayName }).save();
        done(null, user);
    })
); 