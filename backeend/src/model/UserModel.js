import { query } from '../../boilerplate/db/index.js';

// eslint-disable-next-line import/prefer-default-export
export const getUser = async () => {
  const { rows } = await query('SELECT * from user_table WHERE user_id = 1');
  return rows;
};
