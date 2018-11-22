const router = require('express').Router();
const controller = require('./controller');

router.route('/user/login')
  .post(controller.user.login);

router.route('/user/logout')
  .get(controller.user.logout);

router.route('/user/register')
  .post(controller.user.register);

router.route('/user/session')
  .get(controller.user.session);

router.route('/exchanges')
  .get(controller.exchanges.get);

// router.route('/portfolio/:portfolio')
//   .get(controller.portfolio.get)
//   .put(controller.portfolio.put)
//   .delete(controller.portfolio.delete);

// router.route('/portfolio')
//   .post(controller.portfolio.post);

module.exports = router;
