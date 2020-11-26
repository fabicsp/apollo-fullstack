
import { Query } from './user.query';
import * as db from '../../db';

const UserMap = {
  id: ({ id, email }) => id,
  email: ({ id, email }) => email,
  idEmail: ({ id, email }) => `${id}: ${email}`,
  boards: async ({ id }) => db.getBoards({ id }),
}

export const resolver = {
  Query,
  User: UserMap,
}