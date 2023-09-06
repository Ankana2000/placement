const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

const local = new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });

    if (!user || !user.isPasswordCorrect(password)) {
      console.log('Invalid Username/Password');
      return done(null, false);
    }

    return done(null, user);
  } catch (error) {
    console.log(`Error in finding user: ${error}`);
    return done(error);
  }
});

passport.use('local', local);

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    
    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  } catch (error) {
    console.log(`Error in finding user: ${error}`);
    return done(error);
  }
});

// Check if user is authenticated
passport.checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/users/signin');
};

// Set authenticated user for views
passport.setAuthenticatedUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  next();
};
