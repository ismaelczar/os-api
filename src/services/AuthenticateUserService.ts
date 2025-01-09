import { getRepository } from "typeorm";
import { Users } from "../entity/Users";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken'

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
      throw Error('Incorrect combination1')
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw Error('Incorrect password2')
    }

    //  Criando o token a partir do id do registro.
    const token = sign({}, 'ac3b62ff1f933f80edbce705537d24ce', {
      subject: user.id,
      expiresIn: '1d'
    })

    return { user, token }
  }
}
