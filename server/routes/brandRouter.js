const router = require('express').Router();
const BrandController = require('../controllers/brandController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), BrandController.create);
router.get('/', BrandController.getAll);

module.exports = router;
