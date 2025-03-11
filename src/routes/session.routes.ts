/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

export const sessionRouter = Router();

sessionRouter.post('/', async (req, res): Promise<any> => {
  const { name, password } = req.body;
  const authendicateUser = new AuthenticateUserService();
  const { user, token } = await authendicateUser.execute({ name, password })

  delete user.password

  return res.status(200).json({ user, token })
})
