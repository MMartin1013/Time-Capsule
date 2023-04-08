const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send(`Reached ${req.originalUrl} with request: ${req.body} `); 
});

/* GET users listing. */
router.get('/:user', (req, res, next) => {
  res.status(200).send(`Reached ${req.originalUrl} with request: ${req.body} `); 
});

module.exports = router;
