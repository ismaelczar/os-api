import { Request, Response, Router } from "express"
import multer from 'multer'
import { CreateUsersService } from "../services/CreateUserService";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import uploadConfig from '../config/upload'

export const usersRouter = Router();
const upload = multer(uploadConfig)

usersRouter.post('/', async (req: Request, res: Response): Promise<any> => {
  try {
    const userBody = req.body;
    const usersRepository = new CreateUsersService();
    const createUser = await usersRepository.execute(userBody)
    delete createUser.password

    return res.status(200).json(createUser)
  } catch (error) {

    return res.status(400).json({ error: error.message })
  }
})

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (req: Request, res: Response): Promise<any> => {

  return res.json({ ok: true })
})
