const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('form');
});

router.post('/', (req, res, next) => {
  res.send('hello from post');
});

module.exports = router;
