import {
    userRepository,
} from '../data/repositories/repositories';
import { UserService } from './user/user.service';
  
const userService = new UserService({
  userRepository
});
  
export { userService };
  