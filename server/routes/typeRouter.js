const router = require('express').Router();
const TypeController = require('../controllers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), TypeController.create);
router.get('/', TypeController.getAll);

module.exports = router;
