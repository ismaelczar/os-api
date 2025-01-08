/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express"
import { CreateUsersService } from "../services/CreateUserService";

export const usersRouter = Router();


usersRouter.post('/', async (req, res): Promise<any> => {
  try {
    const userBody = req.body;
    const usersRepository = new CreateUsersService();
    const createUser = await usersRepository.execute(userBody)

    return res.status(200).json(createUser)
  } catch (error) {
    console.log(error)

    return res.status(400).json({ error: error.message })

  }
})



