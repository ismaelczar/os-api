/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

export const sessionRouter = Router();

sessionRouter.post('/', async (req, res): Promise<any> => {
  try {
    const { name, password } = req.body;
    const authendicateUser = new AuthenticateUserService();
    const user = await authendicateUser.execute({ name, password })

    delete user.password

    return res.status(200).json(user)

  } catch (error) {

    console.log(error)
    return res.status(400).json({ error: error.message })
  }
})
