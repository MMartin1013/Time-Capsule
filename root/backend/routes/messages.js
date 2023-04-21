const express = require('express');
const router = express.Router();
const database = require('../database');

/* Get all messages from a user */
router.get('/', async (req, res, next) => {
   res.status(200);
});

/* POST a new user message */
router.post('/', async (req, res, next) => {
   res.status(200);
});

module.exports = router;