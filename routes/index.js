const express = require('express');

const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/', (req, res) => {
  const { title, user } = req.body;
  messages.push({ text: title, user, added: new Date() });
  res.redirect('/');
  // res.send(`<h3>${title}, ${user}</h3>`);
});

module.exports = router;
