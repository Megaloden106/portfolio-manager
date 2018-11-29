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

router.route('/portfolio/:id')
  .put(controller.portfolio.put)
  .delete(controller.portfolio.delete);

router.route('/portfolio')
  .post(controller.portfolio.post);

router.route('/portfolio/data/:id')
  .get(controller.portfolio.data.get);


module.exports = router;
