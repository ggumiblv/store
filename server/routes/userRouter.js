const Router = require('express');
const router = new Router();

router.post('/registration', (req, res) => {
  res.json({ message: 'all working' });
});
router.post('/login', (req, res) => {
  res.json({ message: 'all working' });
});
router.get('/auth', (req, res) => {
  res.json({ message: 'all working' });
});

module.exports = router;
