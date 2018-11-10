const router = require('express').Router();
const controller = require('./controller');

// router.route('/user/:user')
//   .get(controller.user.get)
//   .put(controller.user.put)
//   .delete(controller.user.delete);

// router.route('/user')
//   .post(controller.user.post);

router.route('/login')
  .post(controller.user.login);

router.route('/register')
  .post(controller.user.register);


router.route('/portfolio/:portfolio')
  .get(controller.portfolio.get)
  .put(controller.portfolio.put)
  .delete(controller.portfolio.delete);

router.route('/portfolio')
  .post(controller.portfolio.post);

module.exports = router;
