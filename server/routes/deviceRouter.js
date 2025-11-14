const Router = require('express');
const router = new Router();

router.post('/', (req, res) => {
  res.json({ message: 'all working' });
});
router.get('/', (req, res) => {
  res.json({ message: 'all working' });
});
router.get('/:id', (req, res) => {
  res.json({ message: 'all working' });
});

module.exports = router;
