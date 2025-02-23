import { Request, Response, Router } from "express"
import multer from 'multer'

import uploadConfig from "../config/upload";
import { CreateUsersService } from "../services/CreateUserService";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UpdateUserAvatarService } from '../services/UpdateUserAvatarService'


export const usersRouter = Router();
const upload = multer(uploadConfig)

//  CRIAR NOVO USUÁRIO.
usersRouter.post('/', async (req: Request, res: Response): Promise<any> => {
  try {
    const userBody = req.body;
    const userRepository = new CreateUsersService();
    const createUser = await userRepository.execute(userBody)
    delete createUser.password

    return res.status(200).json(createUser)
  } catch (error) {

    return res.status(400).json({ error: error.message })
  }
})

//  INCLUIR FOTO AO USUÁRIO.
usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (req, res): Promise<any> => {
  try {
    const updateUserAvatar = new UpdateUserAvatarService();
    const user = await updateUserAvatar.execute({
      user_id: req.user.id,
      avatarFileName: req.file.filename
    })

    delete user.password

  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

