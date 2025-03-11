import asyncHandler from 'express-async-handler';
import * as model from '../model/UserModel.js';

// eslint-disable-next-line import/prefer-default-export
export const getUser = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getUser());
});
