const router = require('express').Router();
const controller = require('./controller');

router.route('/api/user/:usernameOrUserId')
  .get(controller.user.get)
  .put(controller.user.put)
  .delete(controller.user.delete);

router.route('/api/user')
  .post(controller.user.post);

router.route('/api/portfolio/:portfolioId')
  .get(controller.portfolio.get)
  .put(controller.portfolio.put)
  .delete(controller.portfolio.delete);

router.route('/api/portfolio')
  .post(controller.portfolio.post);

module.exports = router;
