
const express = require('express');
const router = express.Router();
const tvController = require('../controllers/tvController');

// GET all tv
router.get('/', tvController.getAllChannels);

// GET a single channel by ID
router.get('/:channel', tvController.getChannelByChannel);

// POST create a new user
/*router.post('/', userController.createUser);

// PUT update a user by ID
router.put('/:id', userController.updateUser);

// DELETE a user by ID
router.delete('/:id', userController.deleteUser);*/

module.exports = router;
