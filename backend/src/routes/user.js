const express = require('express');
const { check } = require('express-validator');
const userController = require('../controllers/user');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/users/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', auth, userController.getUserProfile);

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put(
  '/profile',
  [
    auth,
    [
      check('name', 'Name is required').optional(),
      check('graduationYear', 'Graduation year must be a valid number').optional().isNumeric(),
      check('major', 'Major must be a string').optional().isString(),
      check('bio', 'Bio must be a string').optional().isString()
    ]
  ],
  userController.updateUserProfile
);

module.exports = router; 
