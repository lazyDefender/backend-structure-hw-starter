import { db } from '../db/connection';
import { UserRepository } from './user/user.repository';
  
const userRepository = new UserRepository({
  db,
  model: 'user'
});
  
export { userRepository };
  