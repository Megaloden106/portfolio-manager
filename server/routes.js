const router = require('express').Router();
const controller = require('./controller');

router.route('/user/:usernameOrUserId')
  .get(controller.user.get)
  .put(controller.user.put)
  .delete(controller.user.delete);

router.route('/user')
  .post(controller.user.post);

router.route('/portfolio/:portfolioId')
  .get(controller.portfolio.get)
  .put(controller.portfolio.put)
  .delete(controller.portfolio.delete);

router.route('/portfolio')
  .post(controller.portfolio.post);

module.exports = router;
