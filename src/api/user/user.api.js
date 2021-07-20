import { UsersApiPath } from '../../common/enums/enums';
import isAuth from '../../middlewares/auth.middleware';
import { userValidation } from '../../middlewares/validation/validation';

const initUser = (Router, services) => {
  const { userService } = services;
  const router = Router();

  router 
    .post(UsersApiPath.ROOT, userValidation.create, (req, res, next) => userService
      .create(req.body)
      .then(data => res.send(data))
      .catch(next))
    .get(UsersApiPath.$ID, (req, res, next) => userService
      .getById(req.params.id)
      .then(data => res.send(data))
      .catch(next))
    .put(UsersApiPath.$ID, userValidation.update, isAuth, (req, res, next) => userService
      .updateById(req.params.id, req.body)
      .then(data => res.send(data))
      .catch(next));

  return router;
};

export { initUser };
