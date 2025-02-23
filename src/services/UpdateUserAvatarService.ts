import { getRepository } from "typeorm";
import { User } from "../entity/User";
import path from "path";
import uploadConfig from "../config/upload";
import fs from 'fs'

interface Request {
  user_id: string
  avatarFileName: string
}

export class UpdateUserAvatarService {
  public async execute({ user_id, avatarFileName }: Request): Promise<User> {
    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne({
      where: user_id
    })

    if (!user) {
      throw new Error('Only authenticated users can change avatar.')
    }

    //  REMOVENDO AVATAR ANTERIOR.
    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar)
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath)

      //  REMOVENDO AVATAR SE EXISTIR.
      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath)
      }
    }

    user.avatar = avatarFileName;
    await usersRepository.save(user)

    return user
  }
}
