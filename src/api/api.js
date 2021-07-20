import { ApiPath } from '../common/enums/enums';
import { userService, } from '../services/services';
import { initUser } from './user/user.api';

// register all routes
const initApi = Router => {
  const apiRouter = Router();

  apiRouter.use(
    ApiPath.USERS,
    initUser(Router, {
      userService
    })
  );

  return apiRouter;
};

export { initApi };
