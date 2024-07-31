const express = require('express');
const router = express.Router();
const thoughtController = require('../controllers/thoughtController.js');

// Thought Routes
router.get('/', thoughtController.getAllThoughts);
router.get('/:id', thoughtController.getSingleThought);
router.post('/', thoughtController.createThought);
router.put('/:id', thoughtController.updateThought);
router.delete('/:id', thoughtController.deleteThought);

router.post('/:thoughtId/reactions', thoughtController.createReaction);
router.delete('/:thoughtId/reactions/:reactionId', thoughtController.deleteReaction);

module.exports = router

