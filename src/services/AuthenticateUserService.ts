import { getRepository } from "typeorm";
import { Users } from "../entity/Users";
import { compare } from "bcryptjs";

interface Request {
  name: string
  password: string
}

export class AuthenticateUserService {
  public async execute({ name, password }: Request): Promise<Users> {
    const userRepository = getRepository(Users)

    const user = await userRepository.findOne({
      where: { name: name }
    })

    if (!user) {
      throw Error('Incorrect combination1')
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw Error('Incorrect password2')
    }

    return user
  }
}
