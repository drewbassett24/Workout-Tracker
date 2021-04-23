// Requirements
const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api/apiRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;