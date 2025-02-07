import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken'
import { getRepository } from "typeorm";

import { Users } from "../entity/Users";
import auth from '../config/auth'

interface Request {
  name: string
  password: string
}

interface Reponse {
  user: Users
  token: string
}

export class AuthenticateUserService {
  public async execute({ name, password }: Request): Promise<Reponse> {
    const userRepository = getRepository(Users)

    const user = await userRepository.findOne({
      where: { name: name }
    })

    if (!user) {
      throw Error('User not found')
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw Error('Incorrect password')
    }

    //  Cria um token quando houver login.
    const { secret, expiresIn } = auth.jwt
    const token = sign({}, secret, {
      subject: user.id,
      expiresIn

    })

    return { user, token }
  }
}
