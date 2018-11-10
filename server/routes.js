const router = require('express').Router();
const controller = require('./controller');

router.route('/login')
  .post(controller.user.login);

router.route('/logout')
  .post(controller.user.logout);

router.route('/register')
  .post(controller.user.register);

router.route('/portfolio/:portfolio')
  .get(controller.portfolio.get)
  .put(controller.portfolio.put)
  .delete(controller.portfolio.delete);

router.route('/portfolio')
  .post(controller.portfolio.post);

module.exports = router;
