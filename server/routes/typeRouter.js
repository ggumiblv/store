const router = require('express').Router();

router.post('/', (req, res) => {
  res.json({ message: 'all working' });
});
router.get('/', (req, res) => {
  res.json({ message: 'all working' });
});

module.exports = router;
