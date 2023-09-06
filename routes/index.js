const express = require('express');

const router = express.Router();
const userRoutes = require('./user');
const studentRoutes = require('./student');
const homeController = require('../controllers/homecontroller');
const companyRoutes = require('./company');
const passport = require('passport');

router.get('/', passport.checkAuthentication, homeController.homePage);

// Use the correct variable names here
router.use('/users', userRoutes);
router.use('/students', studentRoutes);
router.use('/company', companyRoutes);

module.exports = router;
